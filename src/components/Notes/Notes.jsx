import Form from "./Form";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import NoteCard from "./NoteCard";
import { DataContext } from "../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyNotes from "./EmptyPage";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <h2 style={{ color: "blue" }}>Notes</h2>
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <Grid
                  container
                  item
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided) => (
                        <Grid
                          item
                          spacing={3}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <NoteCard note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};
export default Notes;

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import DeleteCard from "./DeleteCard";
import { DataContext } from "../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyNotes from "../Notes/EmptyPage";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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
const Deletes = () => {
  const { deleteNotes, setDeleteNotes } = useContext(DataContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(
      deleteNotes,
      result.source.index,
      result.destination.index
    );
    setDeleteNotes(items);
  };
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <h2 style={{ color: "red" }}>Trash</h2>
        {deleteNotes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {deleteNotes.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          item
                        >
                          <DeleteCard note={note} />
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
export default Deletes;

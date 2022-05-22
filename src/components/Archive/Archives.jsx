import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import ArchiveCard from "./ArchiveCard";
import { DataContext } from "../context/DataProvider";
import { Grid } from "@mui/material";
import EmptyNotes from "../Notes/EmptyPage";
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
const Archives = () => {
  const { archiveNotes, setArchiveNotes } = useContext(DataContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(
      archiveNotes,
      result.source.index,
      result.destination.index
    );
    setArchiveNotes(items);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {archiveNotes.map((note, index) => (
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
                          <ArchiveCard note={note} />
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
export default Archives;

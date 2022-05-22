import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DeleteForeverOutlined as DeleteForever,
  RestoreFromTrashOutlined as Restore,
} from "@mui/icons-material";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";
import React from "react";
const CardBox = styled(Card)`
  border: 2px solid #db0000;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
`;

const DeleteCard = ({ note }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const moveToNote = (note) => {
    const updatedNotes = deleteNotes.filter((curr) => curr.id !== note.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevState) => [note, ...prevState]);
  };

  const ForeverDelete = (note) => {
    const updatedNotes = deleteNotes.filter((curr) => curr.id !== note.id);
    setDeleteNotes(updatedNotes);
  };
  return (
    <CardBox>
      <CardContent>
        <Typography variant="h5">{note.title}</Typography>
        {note.title !== "" && <hr />}
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => moveToNote(note)}
        >
          <Restore color="side" />
        </IconButton>
        <IconButton fontSize="small" onClick={() => ForeverDelete(note)}>
          <DeleteForever color="error" />
        </IconButton>
      </CardActions>
    </CardBox>
  );
};

export default DeleteCard;

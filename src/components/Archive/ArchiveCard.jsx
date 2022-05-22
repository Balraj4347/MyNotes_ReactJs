import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DeleteOutlineOutlined as Delete,
  UnarchiveOutlined as Unarchive,
} from "@mui/icons-material";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const CardBox = styled(Card)`
  border: 2px solid #00db00;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
`;

const ArchiveCard = ({ note }) => {
  const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const moveToNote = (note) => {
    const updatedNotes = archiveNotes.filter((curr) => curr.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevState) => [note, ...prevState]);
  };

  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((curr) => curr.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeleteNotes((prevState) => [note, ...prevState]);
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
          <Unarchive color="secondary" />
        </IconButton>
        <IconButton fontSize="small" onClick={() => deleteNote(note)}>
          <Delete color="error" />
        </IconButton>
      </CardActions>
    </CardBox>
  );
};

export default ArchiveCard;

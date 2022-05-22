import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";
import React from "react";
const CardBox = styled(Card)`
  border: 2px solid #749ddb;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
`;

const NoteCard = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((curr) => curr.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevState) => [note, ...prevState]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((curr) => curr.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevState) => [note, ...prevState]);
  };
  return (
    <CardBox>
      <CardContent>
        <Typography variant="h5">{note.title}</Typography>
        {note.title !== "" && <hr />}
        <Typography>
          <span style={{ wordWrap: "break-word" }}>{note.text}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        >
          <Archive color="primary" />
        </IconButton>
        <IconButton fontSize="small" onClick={() => deleteNote(note)}>
          <Delete color="error" />
        </IconButton>
      </CardActions>
    </CardBox>
  );
};

export default NoteCard;

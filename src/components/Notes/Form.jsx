import {
  TextField,
  styled,
  ClickAwayListener,
  IconButton,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState, useRef, useContext } from "react";
import React from "react";
import { DataContext } from "../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 500px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;
const note = {
  id: "",
  title: "",
  text: "",
};
const Form = () => {
  const [textfielddisp, settextfielddisp] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const refContainer = useRef();
  const { setNotes } = useContext(DataContext);

  const displaytextarea = () => {
    settextfielddisp(true);
    refContainer.current.style.minHeight = "100px";
  };
  const hideTextArea = () => {
    settextfielddisp(false);
    refContainer.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.title || addNote.text) {
      setNotes((prevState) => [addNote, ...prevState]);
    }
  };

  const onTextChange = (e) => {
    let newNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(newNote);
  };

  return (
    <ClickAwayListener onClickAway={hideTextArea}>
      <Container ref={refContainer}>
        {textfielddisp && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 5 }}
            name="title"
            onChange={(e) => {
              onTextChange(e);
            }}
            value={addNote.title}
          />
        )}
        <TextField
          placeholder="Take a Note...."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={displaytextarea}
          name="text"
          onChange={(e) => {
            onTextChange(e);
          }}
          value={addNote.text}
        />
        {textfielddisp && (
          <IconButton
            color="primary"
            size="medium"
            style={{ marginLeft: "auto" }}
            onClick={hideTextArea}
          >
            <SaveIcon />
            Close
          </IconButton>
        )}
      </Container>
    </ClickAwayListener>
  );
};

export default Form;

import { createContext, useState, useEffect } from "react";
import React from "react";
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const LsNotes = localStorage.getItem("notes");
  const ArNotes = localStorage.getItem("archiveNotes");
  const TrNotes = localStorage.getItem("deleteNotes");

  const [notes, setNotes] = useState(() => {
    if (LsNotes.length !== 0) return JSON.parse(LsNotes);
    return [];
  });
  const [archiveNotes, setArchiveNotes] = useState(() => {
    if (ArNotes.length !== 0) return JSON.parse(ArNotes);
    return [];
  });
  const [deleteNotes, setDeleteNotes] = useState(() => {
    if (TrNotes.length !== 0) return JSON.parse(TrNotes);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  }, [archiveNotes]);
  useEffect(() => {
    localStorage.setItem("deleteNotes", JSON.stringify(deleteNotes));
  }, [deleteNotes]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

import { useEffect, useState } from "react";

function NotesApp() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note");

    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div>
      <h1>Notes App</h1>

      <textarea
        rows="6"
        cols="40"
        placeholder="Write your note here..."
        value={note}
        onChange={(event) =>
          setNote(event.target.value)
        }
      />

      <h3>Your Note:</h3>

      <p>{note}</p>
    </div>
  );
}

export default NotesApp;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNotes from "./pages/HomeNotes";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // store to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNotes notes={notes} />} />
          <Route path="/new-note" element={<NewNote setNotes={setNotes} />} />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

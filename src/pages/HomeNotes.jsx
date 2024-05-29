import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const HomeNotes = ({ notes }) => {
  const [showNote, setShowNote] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [notes, text]);

  return (
    <section>
      <header className="notes__header">
        {!showNote && <h2>My Jotter</h2>}

        {showNote && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowNote((prevState) => !prevState)}
        >
          {showNote ? <AiOutlineClose /> : <BiSearchAlt2 />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && (
          <p className="empty__notes">Note not found :( </p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/new-note" className="btn add__btn">
        <AiOutlinePlus />
      </Link>
    </section>
  );
};

export default HomeNotes;

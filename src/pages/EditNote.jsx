import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    if (title && details) {
      const createNote = { ...note, title, details, date };

      const createNotes = notes.map((item) => {
        if (item.id === id) {
          item = createNote;
        }
        return item;
      });
      setNotes(createNotes);
    }

    // to home page
    nav("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure want to delete this note ?")) {
      const createNotes = notes.filter((item) => item.id !== id);
      setNotes(createNotes);
      nav("/");
    }
  };

  return (
    <section>
      <header className="new-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleChange}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="new-note__form" onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="25"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;

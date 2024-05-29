import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    // Generate a random color
    const generateRandomColor = () => {
      const colors = [
        "#a916c2",
        "#6d3519",
        "#92064d",
        "#680fc7",
        "#0d3c0c",
        "#394f4c",
      ];

      // Generate a random index within the range of colors array
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    // Set a random color when the component mounts
    setColor(generateRandomColor());
  }, []);
  return (
    <Link
      style={{ backgroundColor: color }}
      to={`/edit-note/${note.id}`}
      className="note"
    >
      <h4>
        {note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;

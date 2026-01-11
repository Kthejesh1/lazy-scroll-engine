import { useState } from "react";

const initialItems = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js"
];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault(); // REQUIRED
    if (index === dragIndex) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems[dragIndex];

    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(index, 0, draggedItem);

    setDragIndex(index);
    setItems(updatedItems);
  };

  return (
    <ul style={{ width: 250 }}>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          style={{
            padding: "10px",
            marginBottom: "6px",
            background: "#f2f2f2",
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

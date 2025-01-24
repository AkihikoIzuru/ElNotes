import { useState } from "react";
import { useNotes } from "../hooks/useNotes";

const Notes = () => {
  const { notes, isLoading, create, update, remove } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    create.mutate({ title, content });
    setTitle("");
    setContent("");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      {/* Input Form */}
      <div className="mb-6">
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <ul>
        {notes?.map((note: any) => (
          <li
            key={note.id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{note.title}</h3>
              <p>{note.content}</p>
            </div>
            <div>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                onClick={() =>
                  update.mutate({ id: note.id, title: "Updated Title", content: "Updated Content" })
                }
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => remove.mutate(note.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;

import { useState } from "react";

const EditModal = ({ sections, addBookToLibrary, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [view, setView] = useState("");
  const [section, setSection] = useState("Fiction");
  console.log("Sections: ", sections);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500 p-44"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7" }}
    >
      <div className="mx-auto relative w-3/6 h-1/2 flex flex-col justify-center fixed border bg-white border-gray-300 rounded-lg shadow-lg">
        <div className="h-16 p-8 justify-center flex border-b border-gray-200">
          Library
        </div>
        <div className="flex-1 p-8  py-8 font-bold">
          Title:
          <input
            className="border border-1 w-full p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          Author:
          <input
            className="border border-1 w-full p-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          View
          <input
            className="border border-1 w-full p-2"
            value={view}
            onChange={(e) => setView(e.target.value)}
          />
          Section
          <select
            className="border border-1 w-full p-2"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            {sections.map((section, idx) => {
              return (
                <option key={idx} value={section}>
                  {section}
                </option>
              );
            })}
          </select>
        </div>

        <div className="h-16 p-8 border-t border-gray-200 flex justify-end items-center gap-2">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded-sm shadow-sm ml-2"
            onClick={() => {
              addBookToLibrary({
                newBook: {
                  title,
                  author,
                  view,
                },
                bookSection: section,
              });
              handleCancel();
            }}
          >
            Save
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded-sm shadow-sm"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;

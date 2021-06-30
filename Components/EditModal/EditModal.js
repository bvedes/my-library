import { useState } from "react";

const EditModal = ({ sections, addBookToLibrary, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [view, setView] = useState("");
  const [section, setSection] = useState("Fiction");
  console.log("Sections: ", sections);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          style={{ width: "600px" }}
          className="inline-block bg-white rounded-md p-4 shadow-xl transform transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex flex-col gap-4">
            Library
            <div className="flex gap-2">
              Title:
              <input
                className="border border-1 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              Author:
              <input
                className="border border-1 w-full"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              View
              <input
                className="border border-1 w-full"
                value={view}
                onChange={(e) => setView(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              Section
              <select
                className="border border-1 w-full"
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
          </div>

          <div className="pt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent
              shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
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
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 
              shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditModal;

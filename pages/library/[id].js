import { useState } from "react";
import { useLibrary } from "../../libs/use-libraries";
import { useRouter } from "next/router";
import EditModal from "../../Components/EditModal/EditModal";
import { GoTrashcan } from "react-icons/go";
const Sections = () => {
  const { libraries, addBookToLibrary, removeBookFromLibrary } = useLibrary();
  const [showEditingModal, toggleEditingModal] = useState(false);

  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  console.log("libraries: ", libraries);

  const library = libraries?.find((library) => library.id === id);
  console.log("library: ", library);
  const sections = library?.sections.map((section) => section.name);

  const handleCancel = () => toggleEditingModal(false);

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="w-3/5">
        <div className="flex justify-center p-6 bg-gray-400">
          Library - {id}
        </div>
        <div className="flex flex-col gap-10">
          {library?.sections.map((section, idx) => {
            return (
              <div key={idx}>
                <div className="font-bold p-4 bg-gray-200">{section.name}</div>
                <div className="grid grid-cols-6 text-xs gap-8 py-8">
                  {section.books.map((book, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <img src={book.view} />
                      <div>
                        <div className="font-bold">{book.title}</div>
                        <div className="flex items-center justify-between">
                          {book.author}

                          <GoTrashcan
                            className="text-red-500 cursor-pointer"
                            onClick={() =>
                              removeBookFromLibrary({
                                libraryId: id,
                                bookSection: section.name,
                                bookTitle: book.title,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div>
            {showEditingModal && (
              <EditModal
                sections={sections}
                addBookToLibrary={addBookToLibrary}
                handleCancel={handleCancel}
              />
            )}
            <button
              className="ml-auto rounded-md px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-700"
              onClick={() => {
                toggleEditingModal(true);
              }}
            >
              Add Book
            </button>
          </div>
          <button
            className="rounded-md px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-700"
            onClick={() => router.push("/libraries")}
          >
            come back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;

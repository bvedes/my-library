import { useState } from "react";
import { useLibrary } from "../../libs/use-libraries";
import { useRouter } from "next/router";
import EditModal from "../../Components/EditModal/EditModal";
import { GoTrashcan } from "react-icons/go";
import Layout from "../../Components/Layout/Layout";

const Sections = () => {
  const { libraries, addBookToLibrary, removeBookFromLibrary } = useLibrary();
  const [showEditingModal, toggleEditingModal] = useState(false);

  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  const library = libraries?.find((library) => library.id === id);
  const sections = library?.sections.map((section) => section.name);

  const handleCancel = () => toggleEditingModal(false);

  return (
    <Layout>
      <div>
        <div className="flex items-center justify-center gap-2 p-2">
          <div>Library</div>
          <button
            className="bg-blue-500 text-white p-2 ml-auto"
            onClick={() => {
              toggleEditingModal(true);
            }}
          >
            Add Book
          </button>

          <button
            className="bg-blue-500 text-white p-2"
            onClick={() => router.push("/")}
          >
            Back
          </button>
        </div>
        <div className="flex flex-col gap-10">
          {library?.sections.map((section, idx) => {
            return (
              <div key={idx}>
                <div className="flex justify-center font-bold p-2">
                  {section.name}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                  {section.books.map((book, idx) => (
                    <Book
                      key={idx}
                      book={book}
                      removeBookFromLibrary={removeBookFromLibrary}
                      sectionName={section.name}
                      libraryId={id}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {showEditingModal && (
            <EditModal
              sections={sections}
              addBookToLibrary={addBookToLibrary}
              handleCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

const Book = ({
  book: { title, author, view },
  removeBookFromLibrary,
  sectionName,
  libraryId,
}) => {
  return (
    <div className="flex flex-col justify-end gap-1 text-sm p-8 w-64 mx-auto">
      <img src={view} className="h-64" />
      <div className="font-bold">{title}</div>
      <div>{author}</div>
      <GoTrashcan
        className="text-red-500 cursor-pointer"
        onClick={() =>
          removeBookFromLibrary({
            libraryId,
            bookSection: sectionName,
            bookTitle: title,
          })
        }
      />
    </div>
  );
};

export default Sections;

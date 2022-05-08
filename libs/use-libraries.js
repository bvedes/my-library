import { useEffect, useState } from "react";
import { initialState } from "../utils/index";
import { useRouter } from "next/router";

export const useLibrary = () => {
  const [libraries, setLibraries] = useState([]);
  const {
    query: { id },
  } = useRouter();

  console.log("initialState:", initialState);

  useEffect(() => {
    setLibraries(
      JSON.parse(window.localStorage.getItem("libraries")) || initialState
    );
  }, []);

  const handleSetLibraries = (libraries) => {
    setLibraries(libraries);
    window.localStorage.setItem("libraries", JSON.stringify(libraries));
  };
  console.log("libraries: ", libraries);

  const createLibrary = (library) => {
    handleSetLibraries([...libraries, library]);
    window.localStorage.setItem(
      "libraries",
      JSON.stringify([...libraries, library])
    );
  };

  const addBookToLibrary = ({ newBook, bookSection }) => {
    handleSetLibraries(
      libraries.map((library) => {
        if (library.id !== id) {
          return library;
        }
        return {
          ...library,
          sections: library.sections.map((section) => {
            if (section.name !== bookSection) {
              return section;
            }
            return {
              ...section,
              books: [...section.books, newBook],
            };
          }),
        };
      })
    );
  };

  const removeBookFromLibrary = ({ libraryId, bookSection, bookTitle }) => {
    handleSetLibraries(
      libraries.map((library) => {
        if (library.id !== libraryId) {
          return library;
        }
        return {
          ...library,
          sections: library.sections.map((section) => {
            if (section.name !== bookSection) {
              return section;
            }
            return {
              ...section,
              books: section.books.filter((book) => book.title !== bookTitle),
            };
          }),
        };
      })
    );
  };

  const removeLibrary = (id) => {
    handleSetLibraries(libraries.filter((library) => library.id !== id));
  };

  return {
    libraries,
    removeLibrary,
    createLibrary,
    addBookToLibrary,
    removeBookFromLibrary,
  };
};

import { useEffect, useState } from "react";
import { initialState } from "../utils/index";
import { useRouter } from "next/router";

export const useLibrary = () => {
  const [libraries, setLibraries] = useState(null);
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    console.log("2");
    setLibraries(
      JSON.parse(window.localStorage.getItem("libraries")) || initialState
    );
  }, []);

  const handleSetLibraries = (libraries) => {
    setLibraries(libraries);
    window.localStorage.setItem("libraries", JSON.stringify(libraries));
  };

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

  return {
    libraries,
    createLibrary,
    addBookToLibrary,
    removeBookFromLibrary,
  };
};
import { useState } from "react";
import { useRouter } from "next/router";
import { useLibrary } from "../libs/use-libraries";
import { v4 as uuidv4 } from "uuid";

const Libraries = () => {
  const { libraries, createLibrary } = useLibrary();
  const [name, setName] = useState("");
  const router = useRouter();

  console.log("my libararies: ", libraries);

  const handleCreateLibrary = () => {
    console.log("name: ", name);
    createLibrary({
      id: uuidv4(),
      name,
      sections: [
        { name: "Fiction", books: [] },
        { name: "Non-Fiction", books: [] },
        { name: "Magazines", books: [] },
      ],
    });
    setName("");
  };

  return (
    <div className="mt-16 flex flex-col p-6 items-center">
      <div className="w-3/5 bg-white bg-opacity-30 shadow-md border my-2 p-4">
        <div className="flex justify-center">Create a Library</div>
        {(libraries || []).map((library, idx) => {
          const { name, id } = library;
          return (
            <div key={idx}>
              <button onClick={() => router.push(`/library/${id}`)}>
                {name}={id}
              </button>
            </div>
          );
        })}
        <div className="bg-gray-100 shadow-md border w-full p-3 mb-5 flex my-4">
          <input
            className=" w-full p-3"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="button"
            className="ml-auto rounded-md px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-700"
            onClick={() => handleCreateLibrary()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Libraries;

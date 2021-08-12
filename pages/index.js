import { useState } from "react";
import { useRouter } from "next/router";
import { useLibrary } from "../libs/use-libraries";
import { v4 as uuidv4 } from "uuid";
import Layout from "../Components/Layout/Layout";

const Libraries = () => {
  const { libraries, createLibrary, removeLibrary } = useLibrary();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleCreateLibrary = () => {
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
    <Layout>
      <div className="flex justify-center items-center py-8">
        <div className="w-full">
          <div className="sm:flex justify-between items-center">
            <div className="font-bold text-xl">Libraries</div>
          </div>
          <div className="w-full">
            <img
              src="https://www.frontlist.in/wp-content/uploads/2021/06/GettyImages-577674005.jpg"
              className="flex justify-center w-full"
            />
          </div>
          {(libraries || []).map((library, idx) => {
            const { id, name } = library;
            return (
              <div key={idx} className="py-2 flex justify-between">
                <button
                  className="underline hover:no-underline text-blue-600 hover:text-blue-800"
                  onClick={() => router.push(`/library/${id}`)}
                >
                  {name}
                </button>
                <button
                  className="bg-red-500 w-7 ring-offset-0 text-white justify-center items-center"
                  onClick={() => removeLibrary(id)}
                >
                  x
                </button>
              </div>
            );
          })}
          <div className="w-full flex">
            <input
              placeholder="Create a Library"
              className="w-full p-2 border border-gray-300 hover:border-gray-400"
              type="text"
              value={name}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateLibrary();
                }
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              type="button"
              className="ml-auto p-2 text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => handleCreateLibrary()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Libraries;

import { useState } from "react";
import { useRouter } from "next/router";
import { useLibrary } from "../libs/use-libraries";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";

const Libraries = () => {
  const { libraries, createLibrary } = useLibrary();
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
          <div className="flex justify-between items-center">
            <div className="font-bold">Libraries</div>
          </div>
          {(libraries || []).map((library, idx) => {
            const { name, id } = library;
            return (
              <div key={idx} className="py-2">
                <button
                  className="underline hover:no-underline text-blue-600 hover:text-blue-800"
                  onClick={() => router.push(`/library/${id}`)}
                >
                  {name}
                </button>
              </div>
            );
          })}
          <div className="pt-24">
            <div className="w-full p-2 flex">
              <input
                className="w-full p-3 border border-gray-300 hover:border-gray-400"
                type="text"
                value={name}
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
      </div>
    </Layout>
  );
};

export default Libraries;

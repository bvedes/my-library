import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();

  return (
    <div className="mt-16 flex flex-col p-6 items-center">
      <div className="w-3/5 bg-white bg-opacity-30 shadow-md border my-2 p-6 flex justify-center">
        <button
          className="bg-blue-600 font-medium text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          onClick={() => router.push("/libraries")}
        >
          Goo
        </button>
      </div>
    </div>
  );
};

export default App;

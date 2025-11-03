import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/gallery.jsx";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const repo = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setUserData(repo.data);
    console.log(repo);
  };
  let printUserData = "Loadding.....";

  if (userData.length > 0) {
    printUserData = userData.map((elem, index) => {
      return (
        <div key={index}>
          <Gallery elem={elem} />
        </div>
      );
    });
  }

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <>
      <div className="bg-black overflow-auto h-screen p-4 text-white">
        <div className="flex gap-5 flex-wrap">{printUserData}</div>
        <div className="flex justify-center gap-6 items-center p-4">
          <button
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setUserData([]);
              }
            }}
            className="bg-amber-500 text-black font-bold  rounded-2xl py-1 px-8"
          >
            prev
          </button>
          <h1>page {index}</h1>
          <button
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);
            }}
            className="bg-amber-500 text-black font-bold  rounded-2xl py-1 px-8"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

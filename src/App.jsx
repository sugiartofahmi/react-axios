import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  let [data, setData] = useState([]);
  const url = "http://localhost:7000/mahasiswa";
  const getData = async () => {
    return axios.get(url).then((res) => {
      setData((data = res.data));
    });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="font-bold text-2xl">React Get Data</h1>
        {data.map((x, i) => (
          <div className="flex flex-col" key={i}>
            <h1>{x.name}</h1>
            <h2>{x.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

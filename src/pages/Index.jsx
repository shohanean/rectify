import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Card from "../components/Card";
function Index() {
  const [data, setData] = useState([]);
  // API Start
  const categories = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setData(response.data));
  };
  useEffect(() => {
    categories();
  }, []);
  // API End

  return (
    <>
      <h1>Categoties [{data.length}]</h1>
      <div className="container">
        <div className="row">
          {data.length ? (
            data.map((data, id) => (
              <Card key={id} id={data.id} name={data.name} image={data.image} />
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;

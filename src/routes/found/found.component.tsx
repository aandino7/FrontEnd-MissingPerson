import { useState } from "react";
import "./found.css";
import axios from "axios";
import { FoundResult } from "../../api/models";

const Found = () => {
  const [file, setFile] = useState("");
  const [foundResult, setFoundResult] = useState({
    matches: ["x"],
    result: false,
  });

  const fileHandler = (e: any) => {
    let file = e.target.files[0];
    setFile(file);
  };

  const recognize = () => {
    const formData = new FormData();
    formData.append("person_picture", file);
    axios
      .post<FoundResult>("http://127.0.0.1:8000/recon-by-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        setFoundResult(res.data);
        alert(
          res.data.result ? "Hubo coincidencias!" : "No hubo coincidencias..."
        );
      });
  };

  return (
    <div>
      <div>
        <label>Sube tu vaina</label>
        <input type="file" onChange={e => fileHandler(e)} />
        <button onClick={() => recognize()}>Probar</button>
      </div>
      <div>
        <p>La foto que salio</p>
        <img src={foundResult.matches[0]} alt="result" />
      </div>
      <h1>E velda?</h1>
      <button>Confirma</button>
    </div>
  );
};

export default Found;

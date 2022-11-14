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
      .then((res) => {
        setFoundResult(res.data);
        alert(
          res.data.result ? "Hubo coincidencias!" : "No hubo coincidencias..."
        );
      });
  };

  return (
    <div>
      <div className="div2">
        <label className="p5">FOUND A PERSON BY SELECTING AN IMAGE</label>
        <br></br>
        <input className="file1" type="file" onChange={(e) => fileHandler(e)} />
        <button className="button btn1" onClick={() => recognize()}>
          TEST
        </button>
        <p className="p7">RESULT</p>
        <img className="img" src={foundResult.matches[0]} alt="result" />
        <h1 className="p6">IS THIS YOUT MATCH?</h1>
        <button className="button btn2">CONFIRM</button>
      </div>
    </div>
  );
};

export default Found;

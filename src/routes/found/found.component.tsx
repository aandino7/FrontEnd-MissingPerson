import { useState } from "react";
import "./found.css";
import axios from "axios";
import { FoundResult } from "../../api/models";
import { useNavigate } from "react-router-dom";

const Found = () => {
  const [file, setFile] = useState("");
  const [foundResult, setFoundResult] = useState({
    matches: ["x"],
    result: false,
    images: ["x"],
  });
  const navigate = useNavigate();

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
        if (!res.data.result) {
          alert("No results matching that image...");
          window.location.reload();
        }
        setFoundResult(res.data);
      });
  };

  const confirm = () => {
    axios
      .delete<boolean>(
        `http://127.0.0.1:8000/delete-image/${foundResult.images[0]}`
      )
      .then(() => {
        alert("Person marked as found, thank you!");
        navigate("/");
      });
  };

  return (
    <div>
      <div className="div2">
        <label className="p5">FIND A PERSON BY SELECTING AN IMAGE</label>
        <br></br>
        <input className="file1" type="file" onChange={(e) => fileHandler(e)} />
        <button className="button btn1" onClick={() => recognize()}>
          TEST
        </button>
        <p className="p7">RESULT</p>
        {foundResult.result && (
          <img className="img" src={foundResult.matches[0]} alt="result" />
        )}
        {foundResult.result && <span className="p9">WE FOUND A MATCH!</span>}
        {foundResult.result && (
          <div>
            <h1 className="p6">IS THIS YOUT MATCH?</h1>
            <button className="button btn2" onClick={() => confirm()}>
              CONFIRM
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Found;

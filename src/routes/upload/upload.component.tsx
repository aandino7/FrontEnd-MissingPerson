import "./upload.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const fileHandler = (e: any) => {
    let file = e.target.files[0];
    setFile(file);
  };

  const uploadPerson = () => {
    const formData = new FormData();
    formData.append("person_picture", file);
    axios
      .post("http://127.0.0.1:8000/upload-person", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/missing");
      });
  };

  return (
    <div>
      <div className="div1">
        <label>
          Name
          <input type="text" className="borderr" />
        </label>
        <br></br>
        <label>
          Last Name
          <input type="text" className="borderr" />
        </label>
        <br></br>
        <label>
          Last Seen
          <input type="text" className="borderr" />
        </label>
        <br></br>
        <label>
          Last seen:
          <input className="date" type="date" name="date" />
        </label>
        <br></br>
        <input
          className="subir"
          type="file"
          id="myfile"
          name="myfile"
          onChange={e => fileHandler(e)}
        />
        <br></br>
        <div className="wrap">
          <button onClick={() => uploadPerson()} className="button">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;

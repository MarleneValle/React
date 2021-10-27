import React, { Fragment, useState } from "react";
import PercentageBar from "./PercentageBar";
import Message from "./Message";
import axios from "axios";

export const Uploader = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose or Drag File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
            setTimeout(() => setUploadPercentage(0), 3000);
          },
        }
      );

      const { fileName, filePath, fileData } = res.data;

      setUploadedFile({ fileName, filePath, fileData });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  // // Parse text

  // const input = document.querySelector("input");
  // const textarea = document.querySelector("textarea");

  // input.addEventListener("change", () => {
  //   const files = input.files;

  //   if (files.length === 0) return;

  //   const file = files[0];

  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const file = e.target.result;
  //     const lines = file.split(/\r\n|\n/);
  //     textarea.value = lines.join("\n");
  //   };

  //   reader.onerror = (e) => alert(e.target.error.name);
  //   reader.readAsText(file);
  // });

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <div className="mb-4">
        {file && uploadPercentage !== 0 ? (
          <PercentageBar percentage={uploadPercentage} />
        ) : null}
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group files mb-4 text-center">
          <label htmlFor="customFile">{fileName}</label>
          <input
            type="file"
            className="form-control"
            multiple=""
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button
            className="btn  btn-secondary col-md-4 mb-4 "
            type="submit"
            id="inputGroupFileAddon04"
          >
            Submit
          </button>
        </div>
      </form>

      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-12 mt-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <div>
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Your file..."
              ></textarea>
            </div>
          </div>
        </div>
      ) : null}
      {console.log(file)}
    </Fragment>
  );
};

export default Uploader;

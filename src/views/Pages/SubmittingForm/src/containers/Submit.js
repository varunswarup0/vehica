import React, { useState } from "react";
import Ecia from "../containers/Form/Ecia/index";
import axios from "axios";
import { uuid } from "uuidv4";
import "./Submit.css";
export default function Submit() {
  const [upload, setUpload] = useState(null);
  const [proceed, setProceed] = useState(false);
  const [initstate, setInitState] = useState(null);
  const [fillFormOnline, setfillFormOnline] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    const newId = uuid();
    form.append("ecia", upload);
    axios
      .post("http://localhost:3002/upload/" + newId, form)
      .then((res) => {
        console.log(res.data.data);
        setInitState(res.data.data);
        setProceed(true);
      })
      .catch((err) => setProceed("error"));
  };

  const toggleTrueFalse = () => setfillFormOnline(!fillFormOnline);

  return (
    <>
      <div>
        {proceed ? (
          fillFormOnline ? (
            <Ecia />
          ) : (
            <Ecia {...initstate} />
          )
        ) : (
          <form encType="multipart/form-data" onSubmit={submitHandler}>
            <button onClick={toggleTrueFalse} className="btn">
              Fill Form Online
            </button>
            <button className="btn">
              <input
                type="file"
                id="fileform"
                onChange={(e) => setUpload(e.target.files[0])}
              />
            </button>
            <input type="submit" className="btn" />
          </form>
        )}
        {proceed === "error" ? "An error occured" : ""}
      </div>
    </>
  );
}

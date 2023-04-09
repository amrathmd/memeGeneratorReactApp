import React from "react";
import "./styles.css";

export default function Form() {
  const [formData, setFormData] = React.useState({
    objectOnTop: "",
    objectDown: ""
  });
  function handleChange(event) {
    setFormData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value
      };
    });
  }
  const [memeData, setMemeData] = React.useState({});
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeData(data));
  }, []);
  const Data = JSON.stringify(memeData, null, 2);
  const [url, setUrl] = React.useState("https://i.imgflip.com/24y43o.jpg");
  function getImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setUrl((prevurl) => memesArray[randomNumber].url);
  }
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="TextTop"
          name="objectOnTop"
          value={formData.objectOnTop}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="TextBottom"
          name="objectDown"
          value={formData.objectDown}
          onChange={handleChange}
        />
      </form>

      <div id="imageContainer">
        <h1 id="topData">{formData.objectOnTop}</h1>
        <h1 id="bottomData">{formData.objectDown}</h1>
        <button id="getImage" onClick={getImage}>
          Click here to get another image
        </button>
        <img src={url} id="Image"></img>
      </div>
    </div>
  );
}

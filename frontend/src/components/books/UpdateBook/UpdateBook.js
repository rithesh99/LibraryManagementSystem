import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {isAuthenticated} from '../../auth/index'
import { getBook, updateBook} from '../helper'
import Base from '../../../shared/Base'
import "./UpdateBook.css";
import Success from '../Success'

const UpdateBook = ({match}) => {


  useEffect(() => {
    getBook(match.params.bookId)
    .then(res => {
      setValues({name: res.name, imageUrl: res.imageUrl, author: res.author, publisher: res.publisher, category: res.category})
    })
    .catch(err => console.log(err))
  }, [])

  const { token, user } = isAuthenticated();
 
  const [values, setValues] = useState({
    name: "",
    imageUrl: "",
    author: "",
    publisher: "",
    category:"",
    error: "",
    success: "",
  });
  const { name, imageUrl, author, publisher, category, error, success } = values;

  const [src, selectedFile] = useState(null);

  const handleFileChange = (e) => {
    selectedFile(URL.createObjectURL(e.target.files[0]));
  };
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
    setValues({ ...values, imageUrl: base64Image });
  }

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    console.log("values", values);
    updateBook(token, match.params.bookId,user._id, values).then((data) => {
      console.log("data", data);
      if(data === undefined){
        setValues({...values, error: "Image size is large!!!! "})
      } 
      else if (data.err) {
        setValues({ ...values, error: data.err });
      }
       else {
        setValues({
          ...values,
          name: "",
          imageUrl: "",
          author: "",
          publisher:"",
          category:"",
          error: "",
          success: "true",
        });
      }
    });
  };

  const errorMessage = () => (
    <div className="message__error" style={{ display: error ? "" : "none" }}>
      <h4>{error}</h4>
    </div>
  );
  const createBookPortion = () => {
    return (
      <Base>
        <div className="addbook">
          {src ? (
            <div className="addbook__image">
              {src && (
                <div className="addbook__src">
                  <div className="addbook__pic">
                    <ReactCrop
                      src={src}
                      onImageLoaded={setImage}
                      crop={crop}
                      onChange={setCrop}
                      className="addbook__photo"
                    />
                  </div>
                  <div className="addbook__crop">
                    <button
                      className="addbook__crop__button"
                      onClick={getCroppedImg}
                    >
                      Crop Image
                    </button>
                  </div>
                </div>
              )}
              {result && (
                <div className="addbook__result">
                  <h1>Selected image</h1>
                  <img src={imageUrl} alt="" className="addbook__photo" />
                  {/* {console.log(imageUrl)} */}
                </div>
              )}
            </div>
          ) : (
            <div className="">
              <div className="">
                <div className="">
                  <input
                    type="file"
                    accept="/image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="addbook__title__section">
            <h2 className="addbook__title">Name</h2>
            <input
              value={name}
              onChange={handleChange("name")}
              className=""
            />
            <h2 className="addbook__title">Author</h2>
            <input
              onChange={handleChange("author")}
              className=""
              value={author}
            />
            <h2 className="addbook__title">Publisher</h2>
            <input
              onChange={handleChange("publisher")}
              className=""
              value={publisher}
            />
            <h2 className="addbook__title">Category</h2>
            <input
              onChange={handleChange("category")}
              className=""
              value={category}
            />
          </div>

          
         
          {name && imageUrl && publisher && category && author && (
            <div className="addbook__submit">
              <button className="addbook__submit__btn" onClick={onSubmit}>
                Update
              </button>
            </div>
          )}
        </div>
      </Base>
    );
  };

  if (!success) {
    return (
      <div>
        {errorMessage()}
        {createBookPortion()}
      </div>
    );
  } else {
    return <Success />;
  }
};
export default UpdateBook;

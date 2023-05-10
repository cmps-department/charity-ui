import { useRef, useState} from "react";
import { useDispatch } from 'react-redux'

import useImageUploader from "../hooks/useImageUploader";

import gallery from "../images/gallery.png";
import galleryHover from "../images/gallery-hover.png";
import border from "../images/border.svg";
import borderHover from '../images/border-hover.svg';

function Uploader() {
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  // Don't forget to finish loading and error handling
  const [uploadImages, loading, error] = useImageUploader();

  function handleHover() {
    setHovered((prevState) => !prevState);
  }

  function dragStartHandler(e) {
    e.preventDefault();
    setHovered(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setHovered(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    setHovered(true);
    const filesList = e.dataTransfer.files;
    uploadImages(filesList)
  }

  function handleUploadFiles(e) {
    setHovered(true);
    uploadImages(e.target.files)
  }

  return (
    <>
      <h2 className="font-bold text-xl mb-5">Фото</h2>
      <label
        className="flex flex-col justify-center items-center rounded-3xl cursor-pointer py-[200px] border"
        style={{
          backgroundImage: hovered ? `url(${borderHover})` : `url(${border})`,
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
        htmlFor="image-input"
      >
        <input
          id="image-input"
          type="file"
          accept="image/png image/jpeg"
          ref={inputRef}
          hidden
          onChange={(e) => handleUploadFiles(e)}
          multiple
        />
        <div className="flex flex-col justify-center items-center">
          <img
            className="mb-6"
            src={hovered ? galleryHover : gallery}
            alt="upload"
          />
          <p className={hovered ? "text-primary-300" : ""}>
            Виберіть або перетягніть сюди фото
          </p>
        </div>
      </label>
    </>
  );
}

export default Uploader;
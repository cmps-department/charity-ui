import { useRef } from "react";
import { useState } from "react";

import gallery from "../images/gallery.png";
import galleryHover from "../images/gallery-hover.png";

function Uploader() {
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef(null);

  // Variable is used to create dashed border with large line spacing, please don't change !
  const _formBorder = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='${
    hovered ? "%23917800FF" : "%23333"
  }' stroke-width='4' stroke-dasharray='24%2c 28' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;

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
    setHovered(false);
    console.log(e.dataTransfer.files);
  }

  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Фото</h2>
      <form
        action=""
        className="flex flex-col justify-center items-center rounded-3xl cursor-pointer py-[200px] border"
        style={{
          backgroundImage: _formBorder,
        }}
        onClick={() => inputRef.current.click()}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        <input
          type="file"
          accept="image/png image/jpeg"
          ref={inputRef}
          hidden
        />
        <div className="flex flex-col justify-center items-center">
          <img
            className="mb-6"
            src={hovered ? galleryHover : gallery}
            alt="upload"
          />
          <p className={hovered ? "text-primary-300" : ""}>
            Виберіть або перетащіть сюди фото
          </p>
        </div>
      </form>
    </div>
  );
}

export default Uploader;
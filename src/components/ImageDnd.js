import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "./Image";

import {
  changeImagePosition,
  deleteImage,
} from "../store/slices/postCreationSlice";

import useStrictDroppable from "../hooks/useStrictDroppable";
import trash from "../images/trash.png";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  width: "260px",
  height: "auto",
  margin: `0 15px 15px 0`,
  border: isDragging ? "2px solid #FED700" : "none",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = () => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start"
});

function ImageDnd() {
  const { images } = useSelector((state) => state.postData);
  const [hiddenImageId, setHiddenImageId] = useState(null);

  const [enabled] = useStrictDroppable();

  const dispatch = useDispatch();

  function onHandleDragEnd(result) {
    dispatch(changeImagePosition(result));
  }

  function handleDeleteImage(e, index) {
    e.preventDefault();
    dispatch(deleteImage(index));
  }

  function handleClick(index) {
    if (index === hiddenImageId) {
      setHiddenImageId(null);
    } else {
      setHiddenImageId(index);
    }
  }

  return (
    <>
      <p className="my-5">
        Перше фото буде основним (Ви можете перетягувати фотографії)
      </p>
      <DragDropContext onDragEnd={(result) => onHandleDragEnd(result)}>
        {enabled && (
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                style={getListStyle()}
                {...provided.droppableProps}
              >
                {images.map((imageId, index) => (
                  <Draggable
                    key={imageId}
                    draggableId={imageId}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Image
                          className="w-full h-auto object-contain rounded-3xl"
                          size={{width: 260, height: 180}}
                          imageId={imageId}
                          alt="application image"
                          onClick={() => handleClick(imageId)}
                        />
                        <div
                          className={`${
                            hiddenImageId === imageId ? "block" : "hidden"
                          }
                          absolute top-0 left-0 w-full h-full rounded-3xl bg-blur 
                          backdrop-blur-md z-10 flex justify-center items-center`}
                          onClick={() => handleClick(imageId)}
                        >
                          <button
                            className="bg-white p-3.5 rounded-full drop-shadow-md"
                            onClick={(e) => handleDeleteImage(e, imageId)}
                          >
                            <img src={trash} alt="delete" />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </>
  );
}

export default ImageDnd;

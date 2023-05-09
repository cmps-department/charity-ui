import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import useStrictDroppable from "../hooks/useStrictDroppable";
import car from "../images/car1.png";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  width: "260px",
  height: "180px",
  margin: `0 15px 15px 0`,
  border: isDragging ? "2px solid #FED700" : "none",
  borderRadius: "24px",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = () => ({
  display: "flex",
  flexWrap: "wrap",
});

function ImageDnd() {
    const { imageList } = useSelector(state => state.postData);

    const [enabled] = useStrictDroppable();
    
    function onHandleDragEnd(result) {

    }

  return (
    <>
      <p className="my-5">Перше фото буде основним (Ви можете перетягувати фотографії)</p>
          <DragDropContext onDragEnd={result => onHandleDragEnd(result)}>
        {enabled && (
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle()}
                {...provided.droppableProps}
              >
                {imageList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
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
                        <img className="object-cover" src={car} alt={item.alt} />
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

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FixedSizeList, areEqual } from "react-window";
import "../../../css/components/admin/changeOrder.css";

function getStyle({ provided, style, isDragging }) {
  // If you don't want any spacing between your items
  // then you could just return this.
  // I do a little bit of magic to have some nice visual space
  // between the row items
  const combined = {
    ...style,
    ...provided.draggableProps.style,
  };

  const marginBottom = 8;
  const withSpacing = {
    ...combined,
    height: isDragging ? combined.height : combined.height - marginBottom,
    marginBottom,
  };
  return withSpacing;
}

function Item({ provided, item, style, isDragging }) {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getStyle({ provided, style, isDragging })}
      className={`item ${isDragging ? "is-dragging" : ""}`}
    >
      {item.title}
    </div>
  );
}

const Row = React.memo(function Row(props) {
  const { data: items, index, style } = props;
  const item = items[index];
  return (
    <Draggable draggableId={item._id} index={index} key={item._id}>
      {(provided) => <Item provided={provided} item={item} style={style} />}
    </Draggable>
  );
}, areEqual);

const ChangeOrder = ({ curquestions, onChangeOrder }) => {
  const [questions, setQuestions] = useState(curquestions);

  // useEffect(() => {
  //     setQuestions(onDragEnd())
  // }, [onDragEnd])

  function reorder(startIndex, endIndex) {
    const result = questions.map((list_item) => {
      return list_item;
    });
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  //TODO: Move to Admin instead of doing all this weird state stuff
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.source.index === result.destination.index) {
      return;
    }

    const newItems = reorder(result.source.index, result.destination.index);

    setQuestions(newItems);
  };

  return (
    //set.questions.map((questionId) => questions.find(() => question._id === questionId))
    <div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="dnd">
          <Droppable
            droppableId="droppable"
            mode="virtual"
            renderClone={(provided, snapshot, rubric) => (
              <Item
                provided={provided}
                isDragging={snapshot.isDragging}
                item={questions[rubric.source.index]}
              />
            )}
          >
            {(provided) => (
              <FixedSizeList
                height={80 * questions.length}
                itemCount={questions.length}
                itemSize={80}
                width={300}
                outerRef={provided.innerRef}
                itemData={questions}
              >
                {Row}
              </FixedSizeList>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <Button onClick={() => onChangeOrder(questions)}>Done</Button>
    </div>
  );
};

export default ChangeOrder;

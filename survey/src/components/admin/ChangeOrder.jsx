import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FixedSizeList, areEqual } from "react-window";
import "../../css/components/changeOrder.css";



function getStyle({ provided, style, isDragging }) {
    // If you don't want any spacing between your items
    // then you could just return this.
    // I do a little bit of magic to have some nice visual space
    // between the row items
    const combined = {
        ...style,
        ...provided.draggableProps.style
    };

    const marginBottom = 8;
    const withSpacing = {
        ...combined,
        height: isDragging ? combined.height : combined.height - marginBottom,
        marginBottom
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
            {provided => <Item provided={provided} item={item} style={style} />}
        </Draggable>
    );
}, areEqual);


const ChangeOrder = ({ questions, onDragEnd }) => {

    return (

        //set.questions.map((questionId) => questions.find(() => question._id === questionId))
        <DragDropContext onDragEnd={onDragEnd}>
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
                    {provided => (
                        <FixedSizeList
                            height={100 * questions.length}
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

    );
}

export default ChangeOrder
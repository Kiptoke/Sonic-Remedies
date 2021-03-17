import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FixedSizeList, areEqual } from "react-window";
import "../../css/components/changeOrder.css";

function reorder(list, startIndex, endIndex) {
    const result = list.map((list_item) => { return list_item._id })
    //const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

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


const ChangeOrder = ({ set, onOrderChanged }) => {
    //will hold all questions in set
    const [questions, setQuestions] = useState([]);
    const [qids, setQids] = useState(set.questions);
    //get questions in set
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            fetch("http://localhost:5000/questions")
                .then((response) => {
                    if (!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then((data) => {
                    const filtered = data.filter(
                        (question) => qids.includes(question._id)
                    )
                    const sorted = [];
                    for (let i = 0; i < qids.length; i++) {
                        for (let j = 0; j < filtered.length; j++) {
                            if (qids[i] === filtered[j]._id) {
                                sorted.push(filtered[j]);
                                break;
                            }
                        }
                    }
                    setQuestions(sorted);
                })
        }
        return () => mounted = false;

    }, [qids]);


    //TODO: Move to Admin instead of doing all this weird state stuff
    async function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        if (result.source.index === result.destination.index) {
            return;
        }

        const newItems = reorder(
            questions,
            result.source.index,
            result.destination.index
        );
        console.log(newItems)

        const updatedSet = {
            questions: newItems,
        };

        const stringified = JSON.stringify(updatedSet);

        fetch(`http://localhost:5000/sets/${set._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: stringified,
        })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((updated) => {
                setQids(updated.questions);
                onOrderChanged(updated);
            })
    }


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
                            height={500}
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
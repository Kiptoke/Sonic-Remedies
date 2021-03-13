import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ChangeOrder = ({ set }) => {
    //will hold all questions in set
    const [questions, setQuestions] = useState([]);
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
                        (question) => set.questions.includes(question._id)
                    )
                    setQuestions(filtered);
                })
        }
        return () => mounted = false;

    }, [set]);


    return (

        //set.questions.map((questionId) => questions.find(() => question._id === questionId))



        < DragDropContext >
            <Droppable droppableId="questions">
                {(provided) => (
                    <ul className="questions" {...provided.droppableProps} ref={provided.innerRef}>
                        {questions.map((question, index) => {
                            return (
                                <Draggable key={question._id} draggableId={question._id} index={index}>
                                    {(provided) => {
                                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >{question.title}</li>
                                    }}
                                </Draggable>
                            )
                        })}
                    </ul>
                )}
            </Droppable>
        </DragDropContext >

    )
}

export default ChangeOrder
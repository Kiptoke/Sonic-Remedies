import { useState } from 'react'

const NewQuestion = ({ onNewQuestion }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [options, setOptions] = useState("");

    const onSubmit = (e) => {

    }


    return (
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input
                type="text"
                placeholder="Add Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label>Question Type</label>
            <div onChange={(e) => setType(e.target.value)}>
                <input type="radio" value="multiple-choice" name="option" /> Multiple Choice
                <input type="radio" value="check-box" name="option" />Checkbox
                <input type="radio" value="short-answer" name="option" />Short Answer
                <input type="radio" value="long=answer" name="option" />Long Answer
            </div>
            {(type == "multiple-choice" || type == "check-box") && <label>Options (please separate each option with a comma)</label>}
            {(type == "multiple-choice" || type == "check-box") && <input type="text" placeholder="options" value={options} onChange={(e) => setOptions(e.target.value)} />}
            <input type="submit" value="New Question" />
        </form>
    )
}

export default NewQuestion

import React, {useState} from 'react';

export default function FeedbackForm() {
    const [score,setScore] = useState("");
    const [comment,setComment] = useState("");

    const handleSubmit =(e)=> {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please prove a comment explaining why the experience was poor.")
        return;
    }

    console.log("Form submitted")
    setComment("");
    setScore("10");
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <h2>Feedback forum</h2>
        <div className="Field">
            <label>Score: {score} ♠ </label>
            <input 
                type="range" 
                min="o" 
                max="10" 
                value={score} 
                onChange = {e => setScore(e.target.value)} 
                />
                </div>
                    <div className="Field">
                    <label>Comment: </label>
                    <textarea value={comment} onChange={e => setComment(e.value.target)}/>
                </div>
                    <button type = "text">submit</button>
                </fieldset>
            </form>
        </div>
    );
};
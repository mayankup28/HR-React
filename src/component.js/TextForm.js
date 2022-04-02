import React, { useState } from 'react'

function TextForm(props) {
    const [text,setText]=useState('')
    const UpClicked=()=>{
        let newText=text.toLocaleUpperCase()
        setText(newText)
    }
    const LowClicked=()=>{
        let newText=text.toLocaleLowerCase()
        setText(newText)
    }
    const UpChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={UpChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={UpClicked}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={LowClicked}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h2>Your Text summry</h2>
        <p>{text.split(" ").length} word and {text.length} chareters</p>
        <p>{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}

export default TextForm
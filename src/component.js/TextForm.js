import React, { useState } from 'react'

function TextForm(props) {
    const [text,setText]=useState('')
    const UpClicked=()=>{
        let newText=text.toLocaleUpperCase()
        setText(newText)
        props.Showalert("Converted in Uppercase","success")
    }
    const LowClicked=()=>{
        let newText=text.toLocaleLowerCase()
        setText(newText)
        props.Showalert("Converted in Lowercase","success")
    }
    const UpChange=(event)=>{
        setText(event.target.value)
    }
    const handelsapce=()=>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.Showalert("Extra Space removed","success")
    }
    return (
        <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={UpChange} style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={UpClicked}>Convert to UpperCase</button>

<button className="btn btn-primary mx-2 my-2" onClick={LowClicked}>Convert to LowerCase</button>

<button className="btn btn-primary mx-2 my-2" onClick={()=>setText("",props.Showalert("Text is cleared","success"))}>Clear Text</button>

<button className="btn btn-primary mx-2 my-2" onClick={handelsapce}>Space remove</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summry</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} chareters</p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text for preview"}</p>
    </div>
    </>
    )
}

export default TextForm
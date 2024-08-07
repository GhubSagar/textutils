import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=() =>{
    // console.log("UpperCase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!" , "success");
  }
  const handleLoClick=() =>{
    // console.log("LowerCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!" , "success");
  }
    const handleClearClick=() =>{
    let newText='';
    setText(newText)
     props.showAlert("Text cleared!" , "success");
  }
   const handleOnChange=(event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
   const handleCopy=() =>{
    // console.log("Text Copied");
   // var text= document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
     props.showAlert("Copied to Clipboard!" , "success");
  }
   const handleExtraSpaces=() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
     props.showAlert("Extra spaces removed!" , "success");
  }
  const handleSpeak=() =>{
     let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);

  }
const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#04001f':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':"#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here..."}</p>
    </div>
    </>
  )
}

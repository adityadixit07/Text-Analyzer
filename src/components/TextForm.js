import React,{useState} from 'react'
// import {PropTypes } from 'react';
// 

export default function TextForm(props) {
  
    const handleClick=()=>{
    console.log("uppercase analyzing..",+text)
    let newText=text.toUpperCase();

    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("uppercase analyzing..")
    setText(event.target.value)
    
  }
  const handleClick1=()=>{
    console.log("lowercase click clicked",+text);
    let lowerText=text.toLowerCase();
    setText(lowerText);
  }

  const clearText=()=>{
    console.log('clear text fires'+text);
    // let c=document.getElementById("clear").value = '';
    var a=""
    setText(a)
  }
const copy=()=>{
  console.log('copy the text')
  var text=document.getElementById("copytext")
  text.select();
  text.setSelectionRange(0,999)
  navigator.clipboard.writeText(text.value)
}
 

  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container'  style={{color:props.Mode==='dark'?"white":"black"}}>
      <h1 className='d-inline-block' style={{color:props.Mode==='dark'?"white":"black"}}>{props.Heading}</h1>
      <div class="mb-3">
        
        <textarea className='form-control'id="copytext" value={text} onChange={handleOnChange} name="textform" rows="10" style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==="dark"?'white':"black"}}></textarea>

      </div>
      <button className='btn btn-warning m-2' onClick={handleClick}>Convert to Uppercase</button>
      <button className='btn btn-warning m-2' onClick={handleClick1}>Convert to Lowercase</button>
      <button className='btn btn-warning m-2' onClick={copy}>Copy Text</button>
      <button className='btn btn-danger m-2' id="clear" onClick={clearText}>Clear Text</button>
      

      {/* <button className='btn btn-warning m-2' id="copy" onClick={copyText}>Copy Text</button> */}
    </div>

    <div className="container my-3" style={{color:props.Mode==='dark'?'white':'black'}}>
      <h2>Text summary</h2>
      <p>{text.split("").length} <b>words</b> ; {text.length} <b>characters</b></p>
      <p>It takes an average of {0.009*text.split("").length} minutes to read the text.</p>
      {/* preview section */}
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}



function getName(){
  console.log("namaste Javascript")
}
console.log(getName())

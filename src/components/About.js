import React from 'react'

export default function About(props) {

    let myStyle={
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'#042743':'white'
  };
    
  return (
    <div className="container">
        <h2 style={myStyle}>About Us :</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is TextUtils??
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Analyze Your text</strong> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading speed. <br /><br />
<strong>Free to use</strong> TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. <br /><br />
<strong>Browser Compatible</strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
            </div>
        </div>
        </div>
    </div>
  )
}

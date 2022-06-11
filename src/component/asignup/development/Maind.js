import React from 'react'
import "./dev.css"
import AceEditor from "react-ace";
import Split from 'react-split'

import 'ace-builds/webpack-resolver'


function Maind() {


  return (
      <div className="dev ">
        <Split
        className="split"
        direction="vertical"
        minSize={50}
        maxSize={[2000,500]}
        gutterSize={4}
        sizes={[70,30]}
        style={{height:"100vh"}}
        >
          <div >
          <AceEditor
            className="compiler"
            mode="css"
            theme="cobalt"
            name="blah2"
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
        }}/>
          </div>
        <div className="terminal">
          f
        </div>
      </Split>
    </div> 
  )
}

export default Maind
import React, { useState } from 'react'
import "./dev.css"
import AceEditor from "react-ace";
import Split from 'react-split'

import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/ext-language_tools'
import Nav from '../academics/nav'


function Maind() {

    const [theme, setTheme] = useState("cobalt")
    const [mode, setMode] = useState("python")
    const [fsize, setFsize] = useState(16)
    const [short, setShort] = useState("none")

    const font=(e)=>{
      setFsize(e)
      if(fsize<1)
        setFsize(1)
    }

  return (
    <div className="dev">
      <Nav />
      <div className="dev-opt center ">
        <button className='devBtn'  style={{background:"limegreen"}}> Run </button>
        <button className='devBtn'onClick={()=>setShort("block")} > shortcuts </button>
        <span>Theme : </span>
        <select id="-theme" value={theme} onChange={(e)=>{setTheme(e.target.value)}}>
          <optgroup label="Bright" >
            <option value="chrome">Chrome</option>
            <option value="clouds">Clouds</option>
            <option value="crimson_editor">Crimson Editor</option>
            <option value="dawn">Dawn</option>
            <option value="dreamweaver">Dreamweaver</option>
            <option value="eclipse">Eclipse</option>
            <option value="github">GitHub</option>
            <option value="iplastic">IPlastic</option>
            <option value="solarized_light">Solarized Light</option>
            <option value="textmate">TextMate</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="xcode">XCode</option>
            <option value="kuroir">Kuroir</option>
            <option value="katzenmilch">KatzenMilch</option>
            <option value="sqlserver">SQL Server</option>
          </optgroup>
          <optgroup label="Dark">
            <option value="ambiance">Ambiance</option>
            <option value="chaos">Chaos</option>
            <option value="clouds_midnight">Clouds Midnight</option>
            <option value="dracula">Dracula</option>
            <option value="cobalt">Cobalt</option>
            <option value="gruvbox">Gruvbox</option>
            <option value="gob">Green on Black</option>
            <option value="idle_fingers">idle Fingers</option>
            <option value="kr_theme">krTheme</option>
            <option value="merbivore">Merbivore</option>
            <option value="merbivore_soft">Merbivore Soft</option>
            <option value="mono_industrial">Mono Industrial</option>
            <option value="monokai">Monokai</option>
            <option value="nord_dark">Nord Dark</option>
            <option value="one_dark">One Dark</option>
            <option value="pastel_on_dark">Pastel on dark</option>
            <option value="solarized_dark">Solarized Dark</option>
            <option value="terminal">Terminal</option>
            <option value="tomorrow_night">Tomorrow Night</option>
            <option value="tomorrow_night_blue">Tomorrow Night Blue</option>
            <option value="tomorrow_night_bright">Tomorrow Night Bright</option>
            <option value="tomorrow_night_eighties">Tomorrow Night 80s</option>
            <option value="twilight">Twilight</option>
            <option value="vibrant_ink">Vibrant Ink</option>
          </optgroup>
        </select>
        <span>Language : </span>
        <select id="-theme" value={mode} onChange={(e)=>{setMode(e.target.value)}}>
          <option value="java">Java</option>
          <option value="c_cpp">C</option>
          <option value="python">Python</option>
        </select>
        <span>Font Size : </span>
        <input type="text" value={fsize} onChange={(e)=>{font(parseInt(e.target.value)); console.log(typeof(fsize))}}/>
      </div>
      <div className="dev">
        <Split
          className="split"
          direction="vertical"
          minSize={50}
          maxSize={[2000, 500]}
          gutterSize={4}
          sizes={[70, 30]}
          style={{ height: "94vh", overflow: "hidden" }}
        >
          <div >
            <AceEditor
              className="compiler"
              mode={mode}
              theme={theme}
              name="contentp"
              fontSize= {fsize}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              editorProps={{ $blockScrolling: Infinity }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }} />
          </div>
          <div className="terminal" >
            <h3 style={{fontSize:`${fsize+2}px`}}>Terminal</h3>
            <div className="ter-arr" style={{fontSize:`${fsize}px`}}>
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
            </div>
          </div>
        </Split>
      </div>
      <div className="devShortcut " style={{display:short}}>
        <div className="close" onClick={()=>setShort("none")}>✘</div>
        <h3>Keyboard shortcut</h3> <br />
        showSettingsMenu    <span>☞</span>   Cmd-,
        <br/>goToNextError    <span>☞</span>   F4  <span>„</span> F8  <span>„</span> Alt-F8
        <br/>goToPreviousError    <span>☞</span>   Shift-F4  <span>„</span> Shift-F8  <span>„</span> Alt-Shift-F8
        <br/>selectall    <span>☞</span>   Cmd-A
        <br/>centerselection    <span>☞</span>   Ctrl-L
        <br/>gotoline    <span>☞</span>   Cmd-L  <span>„</span> Ctrl-G
        <br/>fold    <span>☞</span>   Cmd-Alt-L  <span>„</span> Cmd-F1
        <br/>unfold    <span>☞</span>   Cmd-Alt-Shift-L  <span>„</span> Cmd-Shift-F1
        <br/>toggleFoldWidget    <span>☞</span>   F2  <span>„</span> Cmd-Alt-[  <span>„</span> Cmd-Alt-]
        <br/>toggleParentFoldWidget    <span>☞</span>   Alt-F2
        <br/>foldall    <span>☞</span>   Cmd-Ctrl-Alt-0  <span>„</span> Cmd-K cmd-0
        <br/>foldAllComments    <span>☞</span>   Cmd-Ctrl-Alt-0
        <br/>foldOther    <span>☞</span>   Cmd-Alt-0  <span>„</span> Cmd-K cmd-1
        <br/>unfoldall    <span>☞</span>   Cmd-Alt-Shift-0  <span>„</span> Cmd-K cmd-J
        <br/>findnext    <span>☞</span>   Cmd-G  <span>„</span> Cmd-G
        <br/>findprevious    <span>☞</span>   Cmd-Shift-G  <span>„</span> Cmd-Shift-G
        <br/>selectOrFindNext    <span>☞</span>   Ctrl-G  <span>„</span> Cmd-K cmd-D
        <br/>selectOrFindPrevious    <span>☞</span>   Ctrl-Shift-G
        <br/>find    <span>☞</span>   Cmd-F
        <br/>overwrite    <span>☞</span>   Insert
        <br/>selecttostart    <span>☞</span>   Cmd-Shift-Home  <span>„</span> Cmd-Shift-Up
        <br/>gotostart    <span>☞</span>   Cmd-Home  <span>„</span> Cmd-Up
        <br/>selectup    <span>☞</span>   Shift-Up  <span>„</span> Ctrl-Shift-P  <span>„</span> Shift-Up  <span>„</span> Cmd-Shift-Up
        <br/>golineup    <span>☞</span>   Up  <span>„</span> Ctrl-P
        <br/>selecttoend    <span>☞</span>   Cmd-Shift-End  <span>„</span> Cmd-Shift-Down
        <br/>gotoend    <span>☞</span>   Cmd-End  <span>„</span> Cmd-Down
        <br/>selectdown    <span>☞</span>   Shift-Down  <span>„</span> Ctrl-Shift-N  <span>„</span> Shift-Down  <span>„</span> Cmd-Shift-Down
        <br/>golinedown    <span>☞</span>   Down  <span>„</span> Ctrl-N
        <br/>selectwordleft    <span>☞</span>   Alt-Shift-Left
        <br/>gotowordleft    <span>☞</span>   Alt-Left
        <br/>selecttolinestart    <span>☞</span>   Cmd-Shift-Left  <span>„</span> Ctrl-Shift-A
        <br/>gotolinestart    <span>☞</span>   Cmd-Left  <span>„</span> Home  <span>„</span> Ctrl-A
        <br/>selectleft    <span>☞</span>   Shift-Left  <span>„</span> Ctrl-Shift-B
        <br/>beautify    <span>☞</span>   Ctrl-Shift-B
        <br/>gotoleft    <span>☞</span>   Left  <span>„</span> Ctrl-B
        <br/>selectwordright    <span>☞</span>   Alt-Shift-Right
        <br/>gotowordright    <span>☞</span>   Alt-Right
        <br/>selecttolineend    <span>☞</span>   Cmd-Shift-Right  <span>„</span> Shift-End  <span>„</span> Ctrl-Shift-E
        <br/>selectlineend    <span>☞</span>   Shift-End
        <br/>gotolineend    <span>☞</span>   Cmd-Right  <span>„</span> End  <span>„</span> Ctrl-E
        <br/>selectright    <span>☞</span>   Shift-Right
        <br/>gotoright    <span>☞</span>   Right  <span>„</span> Ctrl-F
        <br/>selectpagedown    <span>☞</span>   Shift-Pagedown
        <br/>pagedown    <span>☞</span>   Alt-Pagedown  <span>„</span> Ctrl-Pagedown
        <br/>gotopagedown    <span>☞</span>   Pagedown  <span>„</span> Ctrl-V
        <br/>selectpageup    <span>☞</span>   Shift-Pageup
        <br/>pageup    <span>☞</span>   Alt-Pageup  <span>„</span> Ctrl-Pageup
        <br/>gotopageup    <span>☞</span>   Pageup
        <br/>selectlinestart    <span>☞</span>   Shift-Home
        <br/>togglerecording    <span>☞</span>   Cmd-Alt-E
        <br/>replaymacro    <span>☞</span>   Cmd-Shift-E
        <br/>jumptomatching    <span>☞</span>   Cmd-\  <span>„</span> Cmd-Shift-\
        <br/>selecttomatching    <span>☞</span>   Cmd-Shift-\
        <br/>expandToMatching    <span>☞</span>   Ctrl-Shift-M
        <br/>removeline    <span>☞</span>   Cmd-D  <span>„</span> Cmd-Shift-K
        <br/>duplicateSelection    <span>☞</span>   Cmd-Shift-D
        <br/>sortlines    <span>☞</span>   Cmd-Alt-S
        <br/>togglecomment    <span>☞</span>   Cmd-/
        <br/>toggleBlockComment    <span>☞</span>   Cmd-Shift-/  <span>„</span> Alt-Shift-A
        <br/>modifyNumberUp    <span>☞</span>   Alt-Shift-Up
        <br/>modifyNumberDown    <span>☞</span>   Alt-Shift-Down
        <br/>replace    <span>☞</span>   Cmd-Alt-F
        <br/>undo    <span>☞</span>   Cmd-Z
        <br/>redo    <span>☞</span>   Cmd-Shift-Z  <span>„</span> Cmd-Y
        <br/>copylinesup    <span>☞</span>   Cmd-Alt-Up  <span>„</span> Alt-Shift-Up
        <br/>movelinesup    <span>☞</span>   Alt-Up
        <br/>copylinesdown    <span>☞</span>   Cmd-Alt-Down  <span>„</span> Alt-Shift-Down
        <br/>movelinesdown    <span>☞</span>   Alt-Down
        <br/>del    <span>☞</span>   Delete  <span>„</span> Ctrl-D  <span>„</span> Shift-Delete
        <br/>backspace    <span>☞</span>   Ctrl-Backspace  <span>„</span> Shift-Backspace  <span>„</span> Backspace  <span>„</span> Ctrl-H
        <br/>removetolinestart    <span>☞</span>   Cmd-Backspace
        <br/>removetolineend    <span>☞</span>   Ctrl-K  <span>„</span> Cmd-Delete
        <br/>removewordleft    <span>☞</span>   Alt-Backspace  <span>„</span> Ctrl-Alt-Backspace
        <br/>removewordright    <span>☞</span>   Alt-Delete
        <br/>outdent    <span>☞</span>   Shift-Tab
        <br/>indent    <span>☞</span>   Tab
        <br/>expandSnippet    <span>☞</span>   Tab
        <br/>blockoutdent    <span>☞</span>   Ctrl-[  <span>„</span> Cmd-[
        <br/>blockindent    <span>☞</span>   Ctrl-]  <span>„</span> Cmd-]
        <br/>splitline    <span>☞</span>   Ctrl-O
        <br/>transposeletters    <span>☞</span>   Ctrl-T
        <br/>touppercase    <span>☞</span>   Ctrl-U
        <br/>tolowercase    <span>☞</span>   Ctrl-Shift-U
        <br/>expandtoline    <span>☞</span>   Cmd-Shift-L  <span>„</span> Cmd-L
        <br/>openCommandPallete    <span>☞</span>   F1  <span>„</span> Cmd-Shift-P  <span>„</span> F1
        <br/>openInlineEditor    <span>☞</span>   F3
        <br/>addCursorAbove    <span>☞</span>   Ctrl-Alt-Up
        <br/>addCursorBelow    <span>☞</span>   Ctrl-Alt-Down
        <br/>addCursorAboveSkipCurrent    <span>☞</span>   Ctrl-Alt-Shift-Up
        <br/>addCursorBelowSkipCurrent    <span>☞</span>   Ctrl-Alt-Shift-Down
        <br/>selectMoreBefore    <span>☞</span>   Ctrl-Alt-Left
        <br/>selectMoreAfter    <span>☞</span>   Ctrl-Alt-Right  <span>„</span> Cmd-D
        <br/>selectNextBefore    <span>☞</span>   Ctrl-Alt-Shift-Left
        <br/>selectNextAfter    <span>☞</span>   Ctrl-Alt-Shift-Right
        <br/>toggleSplitSelectionIntoLines    <span>☞</span>   Ctrl-Alt-L
        <br/>alignCursors    <span>☞</span>   Ctrl-Alt-A
        <br/>findAll    <span>☞</span>   Ctrl-Alt-G  <span>„</span> Cmd-Shift-L  <span>„</span> Cmd-F2
        <br/>snippet    <span>☞</span>   Cmd-Alt-C
        <br/>focusCommandLine    <span>☞</span>   Shift-Esc  <span>„</span> Ctrl-`
        <br/>nextFile    <span>☞</span>   Ctrl-Tab
        <br/>previousFile    <span>☞</span>   Ctrl-Shift-Tab
        <br/>execute    <span>☞</span>   Ctrl-Return
        <br/>increaseFontSize    <span>☞</span>   Ctrl-=  <span>„</span> Ctrl-+
        <br/>decreaseFontSize    <span>☞</span>   Ctrl--  <span>„</span> Ctrl-_
        <br/>resetFontSize    <span>☞</span>   Ctrl-0  <span>„</span> Ctrl-Numpad0
        <br/>save    <span>☞</span>   Cmd-S
        <br/>load    <span>☞</span>   Cmd-O
        <br/>startAutocomplete    <span>☞</span>   Ctrl-Space  <span>„</span> Ctrl-Shift-Space  <span>„</span> Alt-Space
        <br/>showKeyboardShortcuts    <span>☞</span>   Cmd-Alt-H  <span>„</span> Cmd-S  <span>„</span> Cmd-K cmd-R  <span>„</span> Cmd-K cmd-S
        <br/>chainKeys    <span>☞</span>   Cmd-K
        <br/>addLineAfter    <span>☞</span>   Cmd-Return
        <br/>addLineBefore    <span>☞</span>   Cmd-Shift-Return
        <br/>toggleWordWrap    <span>☞</span>   Alt-Z
        <br/>selectAllMatches    <span>☞</span>   Alt-Return
        <br/>splitSelectionIntoLines    <span>☞</span>   Alt-Shift-I
        <br/>modeSelect    <span>☞</span>   Cmd-K input-M
        <br/>navigateToLastEditLocation    <span>☞</span>   Cmd-K cmd-Q
        <br/>trimTrailingSpace    <span>☞</span>   Cmd-K cmd-X
        <br/>replaceAll    <span>☞</span>   Cmd-Alt-Return
        <br/>replaceOne    <span>☞</span>   Cmd-Shift-1
        <br/>toggleFindCaseSensitive    <span>☞</span>   Alt-C
        <br/>toggleFindInSelection    <span>☞</span>   Alt-L
        <br/>toggleFindRegex    <span>☞</span>   Alt-R
        <br/>toggleFindWholeWord    <span>☞</span>   Alt-W
        <br/>removeSecondaryCursors    <span>☞</span>   Shift-Esc
      </div>
    </div>
  )
}

export default Maind
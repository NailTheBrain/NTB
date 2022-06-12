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

  return (
    <div className="dev">
      <Nav />
      <div className="dev-opt center ">
        <button className='devBtn' > Run </button>
        <button className='devBtn' > share </button>
        <span>Theme : </span>
        <select id="-theme" value={theme} onClick={(e)=>{setTheme(e.target.value)}}>
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
        <span>Theme : </span>
        <select id="-theme" value={mode} onClick={(e)=>{setMode(e.target.value)}}>
          <option value="java">Java</option>
          <option value="c_cpp">C</option>
          <option value="python">Python</option>
        </select>
        <span>Font Size : </span>
        <input type="number" value={fsize} onChange={(e)=>{setFsize(parseInt(e.target.value)); console.log(typeof(fsize))}}/>
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
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
              hello dosto <br />
            </div>
          </div>
        </Split>
      </div>
    </div>
  )
}

export default Maind



// Keyboard Shortcuts
// showSettingsMenu : Cmd-,
// goToNextError : F4|F8|Alt-F8
// goToPreviousError : Shift-F4|Shift-F8|Alt-Shift-F8
// selectall : Cmd-A
// centerselection : Ctrl-L
// gotoline : Cmd-L|Ctrl-G
// fold : Cmd-Alt-L|Cmd-F1
// unfold : Cmd-Alt-Shift-L|Cmd-Shift-F1
// toggleFoldWidget : F2|Cmd-Alt-[|Cmd-Alt-]
// toggleParentFoldWidget : Alt-F2
// foldall : Cmd-Ctrl-Alt-0|Cmd-K cmd-0
// foldAllComments : Cmd-Ctrl-Alt-0
// foldOther : Cmd-Alt-0|Cmd-K cmd-1
// unfoldall : Cmd-Alt-Shift-0|Cmd-K cmd-J
// findnext : Cmd-G|Cmd-G
// findprevious : Cmd-Shift-G|Cmd-Shift-G
// selectOrFindNext : Ctrl-G|Cmd-K cmd-D
// selectOrFindPrevious : Ctrl-Shift-G
// find : Cmd-F
// overwrite : Insert
// selecttostart : Cmd-Shift-Home|Cmd-Shift-Up
// gotostart : Cmd-Home|Cmd-Up
// selectup : Shift-Up|Ctrl-Shift-P|Shift-Up|Cmd-Shift-Up
// golineup : Up|Ctrl-P
// selecttoend : Cmd-Shift-End|Cmd-Shift-Down
// gotoend : Cmd-End|Cmd-Down
// selectdown : Shift-Down|Ctrl-Shift-N|Shift-Down|Cmd-Shift-Down
// golinedown : Down|Ctrl-N
// selectwordleft : Alt-Shift-Left
// gotowordleft : Alt-Left
// selecttolinestart : Cmd-Shift-Left|Ctrl-Shift-A
// gotolinestart : Cmd-Left|Home|Ctrl-A
// selectleft : Shift-Left|Ctrl-Shift-B
// beautify : Ctrl-Shift-B
// gotoleft : Left|Ctrl-B
// selectwordright : Alt-Shift-Right
// gotowordright : Alt-Right
// selecttolineend : Cmd-Shift-Right|Shift-End|Ctrl-Shift-E
// selectlineend : Shift-End
// gotolineend : Cmd-Right|End|Ctrl-E
// selectright : Shift-Right
// gotoright : Right|Ctrl-F
// selectpagedown : Shift-Pagedown
// pagedown : Alt-Pagedown|Ctrl-Pagedown
// gotopagedown : Pagedown|Ctrl-V
// selectpageup : Shift-Pageup
// pageup : Alt-Pageup|Ctrl-Pageup
// gotopageup : Pageup
// selectlinestart : Shift-Home
// togglerecording : Cmd-Alt-E
// replaymacro : Cmd-Shift-E
// jumptomatching : Cmd-\|Cmd-Shift-\
// selecttomatching : Cmd-Shift-\
// expandToMatching : Ctrl-Shift-M
// removeline : Cmd-D|Cmd-Shift-K
// duplicateSelection : Cmd-Shift-D
// sortlines : Cmd-Alt-S
// togglecomment : Cmd-/
// toggleBlockComment : Cmd-Shift-/|Alt-Shift-A
// modifyNumberUp : Alt-Shift-Up
// modifyNumberDown : Alt-Shift-Down
// replace : Cmd-Alt-F
// undo : Cmd-Z
// redo : Cmd-Shift-Z|Cmd-Y
// copylinesup : Cmd-Alt-Up|Alt-Shift-Up
// movelinesup : Alt-Up
// copylinesdown : Cmd-Alt-Down|Alt-Shift-Down
// movelinesdown : Alt-Down
// del : Delete|Ctrl-D|Shift-Delete
// backspace : Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H
// removetolinestart : Cmd-Backspace
// removetolineend : Ctrl-K|Cmd-Delete
// removewordleft : Alt-Backspace|Ctrl-Alt-Backspace
// removewordright : Alt-Delete
// outdent : Shift-Tab
// indent : Tab
// expandSnippet : Tab
// blockoutdent : Ctrl-[|Cmd-[
// blockindent : Ctrl-]|Cmd-]
// splitline : Ctrl-O
// transposeletters : Ctrl-T
// touppercase : Ctrl-U
// tolowercase : Ctrl-Shift-U
// expandtoline : Cmd-Shift-L|Cmd-L
// openCommandPallete : F1|Cmd-Shift-P|F1
// openInlineEditor : F3
// addCursorAbove : Ctrl-Alt-Up
// addCursorBelow : Ctrl-Alt-Down
// addCursorAboveSkipCurrent : Ctrl-Alt-Shift-Up
// addCursorBelowSkipCurrent : Ctrl-Alt-Shift-Down
// selectMoreBefore : Ctrl-Alt-Left
// selectMoreAfter : Ctrl-Alt-Right|Cmd-D
// selectNextBefore : Ctrl-Alt-Shift-Left
// selectNextAfter : Ctrl-Alt-Shift-Right
// toggleSplitSelectionIntoLines : Ctrl-Alt-L
// alignCursors : Ctrl-Alt-A
// findAll : Ctrl-Alt-G|Cmd-Shift-L|Cmd-F2
// snippet : Cmd-Alt-C
// focusCommandLine : Shift-Esc|Ctrl-`
// nextFile : Ctrl-Tab
// previousFile : Ctrl-Shift-Tab
// execute : Ctrl-Return
// increaseFontSize : Ctrl-=|Ctrl-+
// decreaseFontSize : Ctrl--|Ctrl-_
// resetFontSize : Ctrl-0|Ctrl-Numpad0
// save : Cmd-S
// load : Cmd-O
// startAutocomplete : Ctrl-Space|Ctrl-Shift-Space|Alt-Space
// showKeyboardShortcuts : Cmd-Alt-H|Cmd-S|Cmd-K cmd-R|Cmd-K cmd-S
// chainKeys : Cmd-K
// addLineAfter : Cmd-Return
// addLineBefore : Cmd-Shift-Return
// toggleWordWrap : Alt-Z
// selectAllMatches : Alt-Return
// splitSelectionIntoLines : Alt-Shift-I
// modeSelect : Cmd-K input-M
// navigateToLastEditLocation : Cmd-K cmd-Q
// trimTrailingSpace : Cmd-K cmd-X
// replaceAll : Cmd-Alt-Return
// replaceOne : Cmd-Shift-1
// toggleFindCaseSensitive : Alt-C
// toggleFindInSelection : Alt-L
// toggleFindRegex : Alt-R
// toggleFindWholeWord : Alt-W
// removeSecondaryCursors : Shift-Esc
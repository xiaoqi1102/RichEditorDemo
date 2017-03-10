/**
 * Created by xiaoqi on 2017/3/10.
 */
import React from 'react';
import {render} from 'react-dom';
const rootDocument = document.getElementById('content');
import {Editor,EditorState} from 'draft-js';
import './editor.css'
class App extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            editorState:EditorState.createEmpty()
        }
    }
    handleChange=(editorState)=>{

        this.setState({editorState})
    };
    render(){
        let {
            editorState
        }=this.state;
        return (
            <div className="RichEditor-root">

                <Editor editorState={this.state.editorState} onChange={this.handleChange} />
              {/* <EditorState
                   editorState={editorState}
                   onChange={this.handleChange}
               />*/}
            </div>
        )
    }
}

render(
    <App/>,rootDocument
);
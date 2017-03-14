/**
 * Created by xiaoqi on 2017/3/10.
 */
import React from 'react';
import {render} from 'react-dom';
const rootDocument = document.getElementById('content');
import {Editor,EditorState} from 'draft-js';
import './editor.css';
import LinkEditor from './LinkEditor';
import EntityEditor from './EntityEditor';
import ColorEditor from './ColorEditor';
import MediaEditor from './MediaEditor';
import PlantextEditor from './PlantextEditor';
import RichEditor from './RichEditor';
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
            <div>
               {/* <div className="RichEditor-root">

                    /!*<Editor editorState={this.state.editorState} onChange={this.handleChange} />*!/
                   /!* <LinkEditor/>*!/
                    /!* <EntityEditor/>*!/
                  /!*

                    *!/
                </div>*/}
                <div className="RichEditor-root">
                    <PlantextEditor/>
                </div>
                <div className="RichEditor-root">
                    <ColorEditor/>
                </div>
                <div className="RichEditor-root">
                    <MediaEditor/>
                </div>
                <RichEditor/>
            </div>

        )
    }
}

render(
    <App/>,rootDocument
);
import React from 'react';
import $ from 'jquery';

/**
 * A modal for the new project
 */
class NewProjectModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state={projectname:''};
  }

  updateInputValue(evt){
    console.log("input field updated with "+evt.target.value);
   // this.state.projectname = evt.target.value;
    this.setState({projectname : evt.target.value});
  }

  render() {
    return (
        <div id="new-project-modal">
          <div>
            <p>New Project</p>
            <input type="text" name="project-name" onChange={this.updateInputValue}/><br/>
            <button onClick={()=>this.props.onClick(this.state.projectname)}>Validate</button>
          </div>
        </div>
    );
  }//render()

  
}
export default NewProjectModal;




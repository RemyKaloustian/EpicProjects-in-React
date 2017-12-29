import React from 'react';
import $ from 'jquery';

/**
 * A counter button: tap the button to increase the count.
 */
class NewProjectModal extends React.Component {
  constructor() {
    super();   

  }

  render() {
    return (
        <div id="new-project-modal">
            <p>New Project</p>
            <input type="text" name="project-name"/>
        </div>
    );
  }//render()

  
}
export default NewProjectModal;




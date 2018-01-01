import React from 'react';
import $ from 'jquery';

/**
 * A counter button: tap the button to increase the count.
 */
class Project extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <a>{this.props.name}</a>
    );
  }//render()

  
}
export default Project;




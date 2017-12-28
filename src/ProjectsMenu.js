import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class ProjectsMenu extends React.Component 
{
  constructor() 
  {
    super();
   
  }

  render() 
  {
    return (
    <div className="column">
      <p id="new-project" className="trigger-custom" onClick={()=>this.showNewProjectModal()}>New project</p>
    </div>  
  );
  }//render()

  showNewProjectModal()
  {
    console.log("New project");
  }
}
export default ProjectsMenu;

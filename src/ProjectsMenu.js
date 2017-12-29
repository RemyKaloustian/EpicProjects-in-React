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
      <a id="new-project" className="trigger" onClick={()=>this.showNewProjectModal()}>New project</a>
    </div>  
  );
  }//render()

  showNewProjectModal()
  {
    console.log("New project");
   
  }
}
export default ProjectsMenu;

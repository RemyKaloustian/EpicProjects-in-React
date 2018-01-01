import React from 'react';
import $ from 'jquery';
import Project from './Project';
import NewProjectModal from './NewProjectModal';
/**
 * A projects menu
 */
class ProjectsMenu extends React.Component 
{
  constructor(props) 
  {
    super(props);
    var projects = [];
    this.state = {_projects : projects};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newname) {    
    this.addNewProject(newname);
    $("#new-project-modal").hide();      
  }


  render() 
  {    
    return (
    <div className="column">
      {/*problem here:*/}
      <NewProjectModal onClick={this.handleClick} />   
    
      <a id="new-project" className="trigger" onClick={()=>this.showNewProjectModal()}>New project</a><br/>
      {this.state._projects.map((item,index) => 
        <div key={index}>{item}</div>
      )}
    </div>  
  );
  }//render()

  

  showNewProjectModal()
  {
    $("#new-project-modal").show();      
  }

  addNewProject(projectname)
  {
    var projects = this.state._projects;
    projects.push(<Project name={projectname}/>);
    this.setState({_projects : projects});
  }
}
export default ProjectsMenu;

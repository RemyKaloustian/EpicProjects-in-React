import React from 'react';
import ProjectsMenu from './ProjectsMenu';
import TasksContainer from './TasksContainer';
import NewProjectModal from './NewProjectModal';

/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
   
  }

  render() {
    return (
      <div id="container">
        <h4>Epic Projects by Rémy KALOUSTIAN</h4>
        <div id="main-container" className="columns">
        <ProjectsMenu />
        <TasksContainer/>        
        </div>  
        <NewProjectModal/>   
      </div>
    );
  }
}//
export default App;

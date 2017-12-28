import React from 'react';
import ProjectsMenu from './ProjectsMenu';
import TasksContainer from './TasksContainer';

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
       <div id="main-container">
        <ProjectsMenu />
        <TasksContainer/>
       </div>
      </div>
    );
  }
}
export default App;

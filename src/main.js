console.log(' World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import NewProjectModal from './NewProjectModal';

import $ from 'jquery'; 


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('app')
  );
});

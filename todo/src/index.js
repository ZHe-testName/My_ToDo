import React from 'react';
import ReactDom from 'react-dom';

import ToDoApp from "./components/todo-app";

const root = document.getElementById('root');

ReactDom.render(<ToDoApp/>, root);

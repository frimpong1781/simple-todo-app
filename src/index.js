import React from 'react';
import ReactDom from 'react-dom';
// component file
import TodoContainer from './components/TodoContainer';
import './App.css';

ReactDom.render(
    <TodoContainer />,
     document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';

const title = {
  value: "Formulario Covid 19"
}
ReactDOM.render(
  <React.StrictMode>
    <Form title={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);



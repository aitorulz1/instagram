import * as React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './containers/Auth/Login';

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>    
      </Routes>
    </BrowserRouter>
    );
  }
}



import * as React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed/NewsFeed';
import Profile from './containers/Profile/Profile';


export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>    
            <Route path="/register" element={<Register />}/>                
            <Route path="/app/newsfeed" element={<NewsFeed />}/>    
            <Route path="/app/profile" element={<Profile />}/>    
        </Routes>
    </BrowserRouter>
    );
  }
}



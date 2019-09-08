import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostListView from './PostListView';
import PostDetailView from './PostDetailView';
import UserDetailView from './UserDetailView';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostListView />
        {/* <PostDetailView /> */}
        {/* <UserDetailView /> */}
      </header>      
    </div>
  );
}

export default App;

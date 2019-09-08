import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchablePostListView from './SearchablePostListView';
import PostDetailView from './PostDetailView';
import UserDetailView from './UserDetailView';

function AppRouter() {
    return (
      <Router>
        <div>          
          <Route path="/" exact component={SearchablePostListView} />
          <Route path="/posts" exact component={SearchablePostListView} />
          <Route path="/posts/:id" component={PostDetailView} />
          <Route path="/users/:id" component={UserDetailView} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;
  
import React from 'react';
import PostView from './PostView';
    
function PostListView(props) {           
    return <table>
        <thead>                    
            <th>Title</th>
            <th>User Name</th>
        </thead>
        <tbody>
        {props.posts && props.posts.map(post => (
            <PostView key={post.id} id={post.id} title={post.title} userId={post.userId} username={post.username} /> 
        ))}  
        </tbody>        
    </table> ;        
}

export default PostListView;
  
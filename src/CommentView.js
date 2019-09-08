import React from 'react';

function CommentView(props) {
    return (
    <tr>
        <td>{props.subject}</td>
        <td>{props.body}</td>
        <td>{props.email}</td>    
    </tr>
    );
}
  
export default CommentView;
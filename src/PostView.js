import React from 'react';

function PostView(props) {
    return  <tr>        
        <td>
            <a href={"/posts/" + props.id}>{props.title}</a>        
        </td>
        <td>
            <a href={"/users/"+ props.userId}>{props.username}</a>
        </td>                
    </tr>;
}
  
export default PostView;
import React from 'react';
import CommentView from './CommentView';

class PostDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          post: {}
        };
    }

    componentDidMount() {
        Promise.all([fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id), 
        fetch('https://jsonplaceholder.typicode.com/comments?postId='+this.props.match.params.id)])
        .then(([res1, res2]) => { 
           return Promise.all([res1.json(), res2.json()]) 
        })
        .then(([res1, res2]) => {
            fetch('https://jsonplaceholder.typicode.com/users/'+res1.userId)
            .then(res => res.json())
            .then((res) => {
                var post = {};
                post.title = res1.title;
                post.username = res.username;
                post.comments = res2.map(comment => {
                    var result = {};
                    result.id = comment.id;
                    result.subject = comment.name;
                    result.body = comment.body;
                    result.email = comment.email;
                    return result;
                });
                this.setState({
                    isLoaded: true,
                    post: post
                });
                },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });            
        },(error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        });        
    }

    render() {
        const { error, isLoaded, post } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div>
                <div><a href="/posts">Back to List</a></div>
                <div>Title: {post.title}</div>
                <div>User Name: {post.username}</div>
                <div>Comments:  
                    <table>
                        <thead> 
                            <tr>
                                <th>Subject</th>
                                <th>Comment</th>
                                <th>Email</th>
                            </tr>   
                        </thead>  
                        <tbody>                          
                        {post && post.comments && post.comments.map(comment => (
                            <CommentView 
                                key={comment.id} 
                                id={comment.id} 
                                subject={comment.subject} 
                                body={comment.body} 
                                email={comment.email}>
                            </CommentView>                    
                        ))}  
                    </tbody>  
                    </table>                     
                </div>
            </div>;
        }
    }
}

export default PostDetailView;
import React from 'react';
import PostListView from './PostListView';
import SearchBar from './SearchBar';

class SearchablePostListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: ''          
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
    }

    componentDidMount() {
        Promise.all([fetch('https://jsonplaceholder.typicode.com/posts'), fetch('https://jsonplaceholder.typicode.com/users')])
        .then(([res1, res2]) => { 
           return Promise.all([res1.json(), res2.json()]) 
        })
        .then(([res1, res2]) => {
            var posts = res1.map(item => {
                var result = {};
                result.id = item.id;
                result.title = item.title;
                result.userId = item.userId;
                result.username = res2.find(user => user.id === item.userId).username;
                return result;
            });
            this.setState({
                isLoaded: true,
                posts: posts
            });
        },(error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        });        
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const filterText = this.state.filterText;
            const rows = [];
            posts.forEach((post) => {
                if (post.username.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                    return;
                }   
                rows.push(post);            
            });
            return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}              
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <PostListView posts={rows} />
            </div>
            );
        }
    }
}

export default SearchablePostListView;
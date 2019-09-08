import React from 'react';
import CompanyView from './CompanyView';

class UserDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          user: {}
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
            .then(res => res.json())
            .then((res) => {
                var user = {};
                user.username = res.username;
                user.fullname = res.name;
                user.email = res.email;
                user.website = res.website;
                user.company = res.company;
                this.setState({
                    isLoaded: true,
                    user: user
                });
                },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });  
    }

    render() {
        const { error, isLoaded, user } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div>
                <div><a href="/posts">Back to List</a></div>
                <div>User Name: {user.username}</div>
                <div>Full Name: {user.fullname}</div>
                <div>Email: {user.email}</div>
                <div>Website: {user.website}</div>  
                <CompanyView name={user.company.name} catchPhrase={user.company.catchPhrase} bs={user.company.bs}>
                </CompanyView>                  
            </div>;
        }
    }
}

export default UserDetailView;
import React, {Component} from 'react';

import BlogPost from './BlogPost';



export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Author: "",
            blogPosts: []
        }
    }
    componentDidMount() {
        let x = [];
        fetch('./static/data.json').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                Author: data.Blog.Author,
                blogPosts: data.Blog.Posts
            });
        });
        
        

    }
    render() {
        var posts = this.state.blogPosts;
        return(
            <main className="Blog" role="main">
                {posts.map(function(post) {
                    return (<BlogPost
                        key={post.id}
                        title={post.Title} 
                        subtitle={post.Subtitle} 
                        img={post.HeaderImage} 
                        date={post.Date}  
                        />)
                }.bind(this))}
            </main>
        )
    }
}
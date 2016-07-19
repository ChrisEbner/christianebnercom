import React, {Component} from 'react';

var BlogPostStyle = require("./BlogPost.css");

const BlogPost = (props) => {
        return (
            <article className="BlogPost BlogPost__Short">  
                    <div className="article-content">
                        {props.img ? (
                            <div 
                                className="article-image" 
                                style={
                                    {
                                        backgroundImage: 'url(' + props.img + ')',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'cover'
                                    }
                                }
                                itemProp="image"></div>)
                         : '' }
                        <div className="BlogPost__Title">
                            <h2>{props.title}</h2>
                            <p className="article-date">{props.date}</p>
                        </div>
                    </div>
            </article>
        );
}

export default BlogPost;
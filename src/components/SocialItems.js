import React from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
var socialStyles = require('./SocialItems.css');

const SocialItems = () => {
    return (
        <div>
            <p>Get in Touch:</p>
            <a href="mailto:raebner@gmail.com" className="social-btn socicon socicon-mail"><FaEnvelopeSquare /></a>
            <a href="https://twitter.com/TheChEbner"target="_blank" className="social-btn"><FaTwitterSquare /></a>
            <a href="https://github.com/ChrisEbner" target="_blank" className="social-btn"><FaGithubSquare /></a>
      <a href="https://plus.google.com/u/0/+ChristianEbnerVIE" target="_blank" className="social-btn"><FaGooglePlusSquare /></a>
       
        </div>
    );
};

export default SocialItems;
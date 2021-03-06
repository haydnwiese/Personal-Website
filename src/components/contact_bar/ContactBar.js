import React from 'react';
import './ContactBar.css';

import emailIcon from '../../resources/contact_bar/email.png';
import linkedinLogo from '../../resources/contact_bar/linkedin.png';
import githubLogo from '../../resources/contact_bar/github.png';

import emailRed from '../../resources/contact_bar/emailRed.png';
import linkedinRed from '../../resources/contact_bar/linkedinRed.png';
import githubRed from '../../resources/contact_bar/githubRed.png';

const ContactBar = () => (
    <div id='contactBar'>
        <a href='mailto:hjwiese@uwaterloo.ca'> 
            <img 
                src={emailIcon} 
                onMouseOver={e => (e.currentTarget.src = emailRed)}
                onMouseOut={e => (e.currentTarget.src = emailIcon)}
                className='logo' 
            />
        </a>
        <a href='https://www.linkedin.com/in/haydnwiese' target='_blank'> 
            <img 
                src={linkedinLogo} 
                onMouseOver={e => (e.currentTarget.src = linkedinRed)}
                onMouseOut={e => (e.currentTarget.src = linkedinLogo)}
                className='logo' 
                id='linkedin'
            />
        </a>
        <a href='https://github.com/haydnwiese' target='_blank'> 
            <img 
                src={githubLogo} 
                onMouseOver={e => (e.currentTarget.src = githubRed)}
                onMouseOut={e => (e.currentTarget.src = githubLogo)}
                className='logo' 
                id='github'
            />
        </a>
    </div>
)

export default ContactBar;
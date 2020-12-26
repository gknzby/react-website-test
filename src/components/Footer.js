import React, { Component } from 'react';




class Footer extends Component
{


    render()
    {


        return(
            <div className = "footer">
                <span className = "footerMail">gokhanozbey7@gmail.com</span>
                <a href = "https://www.gknzby.com"><span className = "credit">This site created by Gökhan Özbey</span></a>
            </div>
        );
    }
}

export default Footer;
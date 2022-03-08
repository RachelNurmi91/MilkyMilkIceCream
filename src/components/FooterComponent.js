import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <footer className="footer-design">
            <div className="container">
                <div className="row">             
                    <div className="col-12">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-2x fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-2x fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-2x fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-2x fa-youtube" /></a> 
                    </div>
                </div>  
                <hr />
                <div className="row-sm-12">
                    <small>
                       Copywright Ⓒ 2020 Milky Milk Ice Cream
                    </small>
                </div>  
            </div>
        </footer>
    );
}

export default Footer;
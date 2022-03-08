import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props){
    return(
        <React.Fragment>
            <Breadcrumb>
                 <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    About Us
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="content-container">
                <div className="media">
                    <img src="/images/about-owners.jpg" className="mr-3 about-lg-img" alt="Milky Milk Founders"></img>
                    <div className="media-body align-self-center mx-3">
                        <h5 className="mt-0 about-titles">Who we are</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit est nec tincidunt dapibus. Cras varius commodo felis ac cursus. Praesent metus mi, viverra rhoncus sem quis, rhoncus mattis mi. Praesent quis massa non erat fermentum lacinia ac eget dui. Nunc quis sem vitae nisl finibus pulvinar vitae vitae lorem. Sed ultricies maximus erat, in porttitor massa hendrerit ac. Fusce vestibulum nibh metus, in accumsan nibh elementum a.</p>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac dolor vel leo sollicitudin condimentum. Mauris ornare mattis nibh, feugiat tempor ligula vestibulum a. Pellentesque at magna non dui maximus aliquet. Donec a sagittis tellus. Morbi eget sem non magna molestie tristique sed quis sem. Maecenas a quam luctus tortor tempus fringilla.</p>
                    </div>
                </div>
                <div className="media mt-5">
                    <div className="media-body align-self-center mx-4">
                        <h5 className="mt-0 about-titles">Why we do it</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nunc libero. Etiam feugiat lorem est, molestie cursus neque vulputate a. Proin quam turpis, iaculis id vestibulum eget, imperdiet non felis. Aenean faucibus nisl at enim fringilla, id laoreet lectus tincidunt. Vivamus viverra mi vel est convallis, at tempor lacus euismod. Praesent sed dolor consectetur, elementum nunc et, consequat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eu tellus non nunc imperdiet gravida. Phasellus vel augue interdum lorem sollicitudin pharetra vitae quis ante. Sed et nulla vel enim finibus pretium. Nam dignissim, purus eget consectetur porta, sem lectus dapibus purus, vitae sagittis quam urna ut urna. Proin mollis et enim ut sodales. Nullam eu nisl pellentesque, condimentum mi ut, consectetur urna. Mauris justo ex, ultricies vitae facilisis ac, ornare id sapien. Etiam efficitur accumsan nibh, sit amet sodales nulla dapibus in.</p>
                    </div>
                    <img src="/images/about-customer.jpg" className="mr-3 about-img" alt="Milky Milk Founders"></img>
                </div>
            </div>
 
            
        </React.Fragment>
    );
}

export default About;

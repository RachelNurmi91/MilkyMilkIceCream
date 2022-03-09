import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderFlavorInfo({flavor}) {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-2">
                            <img src={flavor.image} className="flavor-img" width="100%" alt={flavor.name} />
                            <Button className="btn">Login to Download</Button>
                    </div>
                    <div className="col-md-9">
                        <h4>{flavor.name}</h4>
                        <p>{flavor.description}</p>
                    </div>
                </div>
            </div>
    )
}

function FlavorInfo(props) {
    if (props.flavor) {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/artistportal">Artist Portal</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.flavor.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            
                <div className="container">
                    <h2>{props.flavor.name}: SUMMARY</h2>
                    <hr />
                    <div className="row">
                        <RenderFlavorInfo flavor={props.flavor} />
                    </div>
                </div>
            </React.Fragment>
    );
}
    return <div />
}

export default FlavorInfo;
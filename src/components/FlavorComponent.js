import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFlavors({flavor}){
    return (
        <Card>
            <CardImg width="100%" src={flavor.image} alt={flavor.name} />
            <CardTitle><h2 className="flavor-titles mt-3">{flavor.name}</h2></CardTitle>
            <CardBody className="card-body-custom"><p>{flavor.description}</p>
            <Link to={`/flavors/${flavor.id}`} className="card-link" >CLICK HERE FOR INFO</Link>
            </CardBody>
        </Card>
    );
}

function Flavors(props) {
    //Maps through each flavor and add the HTML of RenderFlavors
    const flavorDirectory = props.flavors.map(flavor => {
        return(
            <div key={flavor.id} className="col-md-4 mb-4 mx-auto d-flex align-items-strech">
                <RenderFlavors flavor={flavor}/>
            </div>
        );
    });

    return(
        <React.Fragment>
            <Breadcrumb>
                 <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Flavors
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="container">
                <h1 className="text-center pb-3">Flavors</h1>
                <div className="row">
                    {flavorDirectory}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Flavors;
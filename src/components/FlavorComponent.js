import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <div className="row">
                    {flavorDirectory}
                </div>
            </div>
        </React.Fragment>
    );
}

function RenderFlavors({flavor}){
    return (
        <React.Fragment>
            <div className="content-container">
                <Card>
                    <CardImg width="100%" src={flavor.image} alt={flavor.name} />
                    <CardTitle><h2 className="flavor-titles">{flavor.name}</h2></CardTitle>
                    <CardBody><p>{flavor.description}</p>
                    </CardBody>
                </Card>
            </div>

        </React.Fragment>
    );
}

export default Flavors;
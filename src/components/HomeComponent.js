import React from 'react';

function Home(props){

    return(
        <React.Fragment>
            <div className="intro-container-top">
                <h1 className="home-intro">We are like a pop up shop, but for ice cream! <br></br>You won't want to miss out!</h1>
            </div>
            <div className="intro-container text-center">
                <h1 className="text-white">Deliveries, Markets & Pop Ups...Oh My!</h1>
                <p>Want to get your hands on Milky Milk! We made a chart to show you how!</p>
            </div>
            <div className="content-container">
                <div className="instruction-container">
                    <div className="row">
                        <div className="col-6 instruct-col">
                            <h1 className="text-center">Follow</h1>
                            <p>Milky Milk is a small batch creamery and we make our ice cream in limited batches. Each batch is limited and only available for a short time after it drops. Follow us on Instagram to get the info on drop dates, events and a sneak peek at what flavors we’ll be creating.</p>
                        </div>
                        <div className="col-6 instruct-col">
                            <img src="/images/arrowdown-right.jpg" alt="Follow the path!"></img>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-6 instruct-col">
                            <img src="/images/arrowdown-left.jpg" alt="Follow the path!"></img>
                        </div>
                        <div className="col-6 instruct-col">
                            <h1 className="text-center">PRE-ORDER</h1>
                            <p  className="text-right">When a date has been determined for a batch drop, our online store opens on a Monday and orders will be taken throughout the week.</p>     
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-6 instruct-col">
                            <h1 className="text-center">GET IT!</h1>
                            <p>Deliveries and curbside pickup happen on Saturday afternoons after 1pm. Our delivery zones are neighborhoods in Chicago: Andersonville, Edgewater, Bucktown, Lakeview, Lincoln Park, Lincoln Square, Ravenswood, Wicker Park, etc.</p>
                            <p>Outside of the delivery range? Curbside pickup is also available!</p>
                        </div>
                        <div className="col-6 instruct-col">
                            <img src="/images/arrowdown-right.jpg" alt="Follow the path!"></img>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-6 instruct-col">
                            <img src="/images/arrowdown-left.jpg" alt="Follow the path!"></img>
                        </div>
                        <div className="col-6 instruct-col">
                            <h1 className="text-center">ENJOY!</h1>
                            <p className="text-right">Does this even need an explaination!?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">REPEAT</h1>
                            <p className="text-center">We love to see our customers smiling faces! Look for us around the city! You can find us at the Lakeview Roscoe Village Farmers Market this summer season and at other local pop-up events! Keep an eye out on our Instagram or follow where you can Find Milky!</p>
                        </div>
                    </div>         
                </div>
            
            </div>
        </React.Fragment>
    );
}

export default Home;
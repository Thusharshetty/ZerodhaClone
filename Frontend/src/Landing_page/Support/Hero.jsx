function Hero() {
    return ( 
       <div className="text-white " style={{backgroundColor:"rgb(56,126,209)"}}>
        <div className="container mt-5">
            <div className="mt-5 d-flex justify-content-between" style={{margin:"0 150px"}}>
                    <h5 className="mt-5">Support portal</h5>
                    <a href="" className="mt-5" style={{color:"white"}}>Track tickets</a>
            </div>
            <div className="row  d-flex justify-content-between" style={{margin:"0 100px"}}>
                <div className="col-7 p-5 mt-5">
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." 
                       className="px-5 py-2 form-control"/><br />
                    <a href="" style={{color:"white"}} className="mx-1">Track account opening</a>
                    <a href="" style={{color:"white"}} className="mx-1">Track segment activation</a>
                    <a href="" style={{color:"white"}} className="mx-1">Intraday margins</a>
                    <a href="" style={{color:"white"}} className="mx-1">Kite user manual</a>
                </div>
                <div className="col-5 py-5 ps-5 mt-5">
                    <h4>Featured</h4>
                    <ol>
                        <li><a href="" style={{color:"white"}} className="lh-lg">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" style={{color:"white"}} className="lh-lg">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Hero;
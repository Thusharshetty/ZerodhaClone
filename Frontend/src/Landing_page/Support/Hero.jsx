function Hero() {
    return (
        <div className="text-white" style={{ backgroundColor: "rgb(56,126,209)" }}>
            <div className="container py-5">
                
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 px-md-5">
                    <h5 className="fw-bold">Support portal</h5>
                    <a href="" className="text-white text-decoration-underline mt-2 mt-md-0">Track tickets</a>
                </div>

                <div className="row px-md-5">
                    
                    <div className="col-12 col-md-7 mb-5 mb-md-0">
                        <h4 className="lh-base mb-4">Search for an answer or browse help topics to create a ticket</h4>
                        <div className="position-relative mb-4">
                            <input 
                                type="text" 
                                placeholder="Eg: how do i activate F&O..." 
                                className="form-control form-control-lg border-0 rounded-1 px-4 py-3"
                            />
                        </div>
                        <div className="d-flex flex-wrap gap-3">
                            <a href="" className="text-white border-bottom border-white pb-1 text-decoration-none small">Track account opening</a>
                            <a href="" className="text-white border-bottom border-white pb-1 text-decoration-none small">Track segment activation</a>
                            <a href="" className="text-white border-bottom border-white pb-1 text-decoration-none small">Intraday margins</a>
                            <a href="" className="text-white border-bottom border-white pb-1 text-decoration-none small">Kite user manual</a>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-5 ps-md-5">
                        <h4 className="mb-4">Featured</h4>
                        <ol className="ps-3">
                            <li className="mb-3">
                                <a href="" className="text-white text-decoration-underline">Current Takeovers and Delisting - January 2024</a>
                            </li>
                            <li>
                                <a href="" className="text-white text-decoration-underline">Latest Intraday leverages - MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

function Education() {
    return ( 
        <div className="container mt-4">
        <div className="row ">
            <div className="col-6 p-5">
                <img src="media/images/education.svg" alt="Awards Image" style={{width:"75%"}} />
            </div>
            <div className="col-6 p-5">
                <h1 className="mb-3 fs-3">Free and open market education</h1>
                <p className="mt-5">Varsity, the largest online stock market education book covering everything from the basics to advanced trading.</p>
                 <a href="#" style={{ textDecoration: "none" }}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                 <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
                 <a href="#" style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
     );
}

export default Education;
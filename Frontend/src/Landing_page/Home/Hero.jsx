
function Hero() {
    return (
        <div className="container p-3 p-md-5 text-center mb-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <img src="media/images/homeHero.png" alt="Hero" className="img-fluid mb-5" />
                    <h1 className="mt-3 display-5 fw-medium">Invest in everything</h1>
                    <p className="fs-5 text-muted">Online platform to invest in stocks, mutual funds, derivatives, and more</p>
                    <button className="btn btn-primary fs-5 mt-4 px-5 py-2" style={{ minWidth: "200px" }}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
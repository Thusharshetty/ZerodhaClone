function Team() {
    return (
        <div className="container">
            <div className="row p-3 p-md-5 border-top">
                <h1 className="text-center mt-3">People</h1>
            </div>
            <div className="row px-3 px-md-5 pb-5 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className="col-md-6 px-3 px-md-5 text-center">
                    <img 
                        src="media/images/nithinKamath.jpg" 
                        alt="founder" 
                        className="rounded-circle w-75 w-md-50" 
                    />
                    <h4 className="mt-4">Nithin Kamath</h4>
                    <h6>Founder & CEO</h6>
                </div>
                <div className="col-md-6 px-3 px-md-5 fs-5 mt-4 mt-md-0">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href="#" style={{ textDecoration: "none" }}>Homepage</a> / 
                        <a href="#" style={{ textDecoration: "none" }}> TradingQnA</a> / 
                        <a href="#" style={{ textDecoration: "none" }}> Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
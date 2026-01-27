function Hero() {
    return (
        <div className="container">
           
            <div className="row text-center p-3 p-md-5 border-bottom">
                <h1 className="mt-5 p-2 p-md-3 fs-3">Charges</h1>
                <h3 className="text-muted fs-5">List of all charges and taxes</h3>
            </div>
            
            <div className="row text-center p-3 p-md-5 mt-md-5">
        
                <div className="col-12 col-md-4 p-4 p-md-5">
                    <img src="media/images/pricingEquity.svg" alt="Free equity" className="img-fluid mb-4" style={{maxWidth: "120px"}} />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                
                <div className="col-12 col-md-4 p-4 p-md-5">
                    <img src="media/images/intradayTrades.svg" alt="Intraday" className="img-fluid mb-4" style={{maxWidth: "120px"}} />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                
                <div className="col-12 col-md-4 p-4 p-md-5">
                    <img src="media/images/pricingEquity.svg" alt="Mutual Funds" className="img-fluid mb-4" style={{maxWidth: "120px"}} />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}
export default Hero;
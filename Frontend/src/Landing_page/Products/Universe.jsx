function Universe() {
    return ( 
       <div className="container">
            <div className="row p-5 text-center">
                <h1 className="fs-4 mt-5">The Zerodha Universe</h1>
                <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                     <img src="media/images/smallcaseLogo.png" style={{width:"50%"}} />
                     <p className="text-muted text-small fs-6 mt-2 p-2">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                   <img src="media/images/streakLogo.png"  style={{width:"50%"}}/>
                     <p className="text-muted text-small fs-6 mt-2 p-2">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                     </div>
                <div className="col-4 p-3 mt-5">
                   <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
                     <p className="text-muted text-small fs-6 mt-3 p-2">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                   </div>
                   <div className="col-4 p-3 mt-5">
                     <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}} />
                     <p className="text-muted text-small fs-6 mt-2 p-2">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                   <img src="media/images/goldenpiLogo.png" style={{width:"50%"}} />
                     <p className="text-muted text-small fs-6 mt-2 p-2">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                     </div>
                <div className="col-4 p-3 mt-5 mb-5">
                   <img src="media/images/dittoLogo.png" style={{width:"50%"}} />
                     <p className="text-muted text-small fs-6 mt-2 p-2">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                   </div>
                   <button className="p-3 btn btn-primary fs-5 mb-3"  style={{width:"20%",margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default Universe;
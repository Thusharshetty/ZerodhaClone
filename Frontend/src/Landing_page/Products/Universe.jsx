function Universe() {
    return (
       <div className="container mt-5">
            <div className="row p-3 p-md-5 text-center">
                <h1 className="fs-2">The Zerodha Universe</h1>
                <p className="text-muted mt-3">Extend your trading and investment experience with our partner platforms</p>
                
              
                {[
                    { img: "smallcaseLogo.png", desc: "Thematic investing platform..." },
                    { img: "streakLogo.png", desc: "Systematic trading platform..." },
                    { img: "sensibullLogo.svg", desc: "Options trading platform..." },
                    { img: "zerodhaFundhouse.png", desc: "Our asset management venture..." },
                    { img: "goldenpiLogo.png", desc: "Bonds and debt investment platform..." },
                    { img: "dittoLogo.png", desc: "Insurance personalized advice..." }
                ].map((item, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4 p-4 mt-lg-5">
                        <img src={`media/images/${item.img}`} style={{width: "60%", maxHeight: "60px", objectFit: "contain"}} alt="logo" />
                        <p className="text-muted small mt-3 px-2">{item.desc}</p>
                    </div>
                ))}

                <div className="col-12">
                    <button className="btn btn-primary fs-5 mt-5 px-5 py-2" style={{width: "auto", minWidth: "200px"}}>Sign up Now</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
function Pricing() {
    return (
        <div className="container p-3 p-md-5">
            <div className="row">
                <div className="col-12 col-lg-4 p-3 p-md-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p className="text-muted">Flat fees and no hidden charges. Price transparency at its best.</p>
                    <a href="#" className="text-decoration-none">See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2 d-none d-lg-block"></div>
                <div className="col-12 col-lg-6 p-3 p-md-5">
                    <div className="row text-center">
                        <div className="col border p-4 rounded-1 me-2">
                            <h2 className="mb-3">₹0</h2>
                            <p className="small text-muted">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-4 rounded-1">
                            <h2 className="mb-3">₹20</h2>
                            <p className="small text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
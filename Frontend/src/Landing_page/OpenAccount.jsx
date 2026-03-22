
import {Link} from "react-router-dom";
function OpenAccount() {
    return (
        <div className="container p-3 p-md-5 text-center mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <h1 className="mt-5 display-6">Open a Zerodha account</h1>
                    <p className="text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday trades.</p>
                    <Link to={"/signup"}><button className="btn btn-primary fs-5 mt-4 px-5 py-2" style={{ minWidth: "200px" }}>
                        Sign up Now
                    </button></Link>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
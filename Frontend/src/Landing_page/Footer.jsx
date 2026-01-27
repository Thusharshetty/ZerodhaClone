function Footer() {
    return (
        <footer className="mt-5 border-top bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 mb-4">
                        <img src="media/images/logo.svg" alt="logo" className="mb-3" style={{ width: "50%" }} />
                        <p className="text-muted small">&copy; 2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.</p>
                    </div>

                    <div className="col-lg-3 col-6 mb-4">
                        <h5 className="fs-6 fw-bold mb-3">Company</h5>
                        <div className="d-flex flex-column gap-2">
                            <a href="" className="text-muted text-decoration-none small">About</a>
                            <a href="" className="text-muted text-decoration-none small">Products</a>
                            <a href="" className="text-muted text-decoration-none small">Pricing</a>
                            <a href="" className="text-muted text-decoration-none small">Referral programme</a>
                            <a href="" className="text-muted text-decoration-none small">Careers</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 mb-4">
                        <h5 className="fs-6 fw-bold mb-3">Support</h5>
                        <div className="d-flex flex-column gap-2">
                            <a href="" className="text-muted text-decoration-none small">Contact</a>
                            <a href="" className="text-muted text-decoration-none small">Support portal</a>
                            <a href="" className="text-muted text-decoration-none small">Z-Connect blog</a>
                            <a href="" className="text-muted text-decoration-none small">List of charges</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-12 mb-4">
                        <h5 className="fs-6 fw-bold mb-3">Account</h5>
                        <div className="d-flex flex-column gap-2">
                            <a href="" className="text-muted text-decoration-none small">Open an account</a>
                            <a href="" className="text-muted text-decoration-none small">Fund transfer</a>
                            <a href="" className="text-muted text-decoration-none small">60 day challenge</a>
                        </div>
                    </div>
                </div>

               
                <div className="text-muted mt-5" style={{ fontSize: "12px", lineHeight: "1.6" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services
                        through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
                        Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for
                        DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
                        E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br />
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
                        3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
                        Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
                        Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a
                        SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again
                        when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque.
                        Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment.
                        In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized
                        anyone to trade on behalf of others.
                        If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>

                   
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 border-top pt-3">
                        <a href="" className="text-muted text-decoration-none small">NSE</a>
                        <a href="" className="text-muted text-decoration-none small">BSE</a>
                        <a href="" className="text-muted text-decoration-none small">MCX</a>
                        <a href="" className="text-muted text-decoration-none small">Terms & conditions</a>
                        <a href="" className="text-muted text-decoration-none small">Privacy policy</a>
                        <a href="" className="text-muted text-decoration-none small">Investor charter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
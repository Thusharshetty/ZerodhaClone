

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-7 p-3 p-lg-5 text-center">
                    <img src={imageUrl} alt={productName} className="img-fluid" style={{width: "85%"}}/>
                </div>
                <div className="col-12 col-lg-5 p-3 p-lg-5">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="text-muted fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={tryDemo} className="me-5 text-decoration-none">Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className="text-decoration-none">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4 d-flex gap-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="playstore" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="appstore" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
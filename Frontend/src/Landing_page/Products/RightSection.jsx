function RightSection({ imageUrl, productName, productDescription, link }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                
                <div className="col-12 col-lg-5 p-3 p-lg-5 order-2 order-lg-1">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="text-muted fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={link} className="text-decoration-none">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-12 col-lg-7 p-3 p-lg-5 text-center order-1 order-lg-2">
                    <img src={imageUrl} alt={productName} className="img-fluid" style={{width: "85%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
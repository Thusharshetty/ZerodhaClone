function TicketCategory({ icon, title, links }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 p-4 p-md-5">
            <h4 className="fs-5 mb-4">
                <i className={`fa-solid ${icon} me-2`}></i> {title}
            </h4>
            <div className="d-flex flex-column gap-2">
                {links.map((link, index) => (
                    <a key={index} href="" className="text-decoration-none text-primary mb-1">
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TicketCategory;
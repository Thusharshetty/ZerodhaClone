import TicketCategory from "./TicketCategory";


function CreateTicket() {
    return (
        <div className="container py-5">
            <div className="row">
                <h1 className="fs-3 text-center py-5 fw-normal text-muted">
                    To create a ticket, select a relevant topic
                </h1>
                <TicketCategory 
                    icon="fa-user-plus" 
                    title="Account opening" 
                    links={["Online Account Opening", "Offline Account Opening", "NRI Account Opening", "Charges at Zerodha"]} 
                />
                <TicketCategory 
                    icon="fa-user" 
                    title="Your Zerodha Account" 
                    links={["Login Credentials", "Account Modification", "DP ID and bank details", "Your Profile"]} 
                />
                <TicketCategory 
                    icon="fa-chart-column" 
                    title="Trading and Platforms" 
                    links={["Margin/leverage", "Kite Web and Mobile", "Trading FAQs", "Kite API"]} 
                />
                <TicketCategory 
                    icon="fa-wallet" 
                    title="Funds" 
                    links={["Adding Funds", "Fund Withdrawal", "eMandates", "Adding Bank Accounts"]} 
                />
                <TicketCategory 
                    icon="fa-circle" 
                    title="Console" 
                    links={["Reports", "Ledger", "Portfolio", "IPO", "Referral Program"]} 
                />
                <TicketCategory 
                    icon="fa-coins" 
                    title="Coin" 
                    links={["Understanding Mutual Funds", "About Coin", "Starting an SIP", "Coin App"]} 
                />
            </div>
        </div>
    );
}

export default CreateTicket;
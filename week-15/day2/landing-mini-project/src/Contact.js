function Contact() {
    return (
        <div>
        <h1>Contact Us</h1>

        <div className="contact">
            <div className="details">
            <p>Contact us and we will get back to you within 24 hours.<br></br>
            Company Name<br></br>
            +256 778 800 900<br></br>
            company.gmail.com</p>
            </div>
            <div className="inputs">
                <p>Contact</p>
                <form className="form">
                <input type={"text"} placeholder='Name'></input>
                <input type={"text"} placeholder='Message' className="high"></input>
                <button type="submit">Send</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Contact;
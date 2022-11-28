import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <h1>Contact <span> us</span></h1>
                <div className="contact-row">
                    <div className="contsct-left-col">
                        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.611163712701!2d79.07654642180044!3d21.146316936702878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0952bd995c7%3A0x9fc6471dada94ffa!2sSitabuldi%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1665409612911!5m2!1sen!2sin`} frameBorder="0" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="myMap" ></iframe>
                    </div>
                    <div className="contsct-right-col">
                        <h2>Join with us</h2>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Subject" />
                            <textarea name="" id="" cols="40" rows="10" placeholder="Message"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98c7f052-33d8-4890-836a-0b67c266feba");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
    };
    return (
        <div className='contact'>
            <div className="contact_col">
                <h3>Send us a message <img src={msg_icon} alt="Image" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="Image" />
                        Contact@GreatStack.dev
                    </li>
                    <li>
                        <img src={phone_icon} alt="Image" />
                        +20123456789
                    </li>
                    <li>
                        <img src={location_icon} alt="Image" />
                        77 Massachusetts Ave, Cambridge
                        MA 02139, United States
                    </li>
                    
                </ul>
            </div>
            <div className="contact_col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" placeholder='Enter your phone number'name='phone' required />

                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' />

                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type="submit" className='btn dark_btn'>Submit Now <img src={white_arrow} alt="Image" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
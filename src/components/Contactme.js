import mail from '../images/mail.png';
import phone from '../images/phone.png';
import linkedin from '../images/linkedin.png';
import './Contactme.css';

const Contactme=()=>{

    const handleEmailClick = () => {
        const emailAddress = 'peterdon484@gmail.com';
        const mailtoLink = `mailto:${emailAddress}?`;
        window.location.href = mailtoLink;
    }

    const handlePhoneClick = () => {
        const phoneNumber = '+918606607977';
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
        console.log('hi')
      };

    return(
        <div className="outline" >
            <h1 style={{width:'100%',textAlign:'center',padding:'30px',fontFamily:'sans-serif'}}>Contact me</h1>
            <a className="box" onClick={handleEmailClick}>
                <img src={mail} alt="mail" style={{width:50}}/>
                <h3>Email</h3>
                <h5>peterdon484@gmail.com</h5>
            </a>
            <a className="box" onClick={handlePhoneClick}>
                <img src={phone} alt="phone" style={{width:50}}/>
                <h3>Phone</h3>
                <h5>+91 xxxxxxxx77</h5>
            </a>            
            <a className="box"  href='https://www.linkedin.com/in/don-peter-joseph-bb4b411a7/' target='_blank'>
                <img src={linkedin} alt="linkedin" style={{width:50}}/>
                <h3 style={{textAlign:'center'}}>LinkedIn</h3>
                {/* <h5>peterdon484@gmail.com</h5> */}
            </a>
        </div>
    )
}

export default Contactme;
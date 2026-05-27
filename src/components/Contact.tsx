import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <a
              href="mailto:Mideaa321@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Mideaa321@gmail.com <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>
              PGPWE (MBA), Indian Institute of Management, Lucknow — 2021–2023
            </p>
            <p>
              B.Tech Computer Science, Manav Rachna Educational Institutions —
              2009–2013
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Oyewale Pelumi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
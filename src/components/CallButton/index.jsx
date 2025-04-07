import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Styles } from "./Styles";

export function CallButton() {
  return (
    <Styles>
      <div className="button-container-com">
        {/* Always render both, show/hide with CSS */}
        <a href="tel:647-608-1111" className="call-link-com mobile-call">
          <FaPhoneAlt style={{ marginRight: "8px" }} />
          Call Us
        </a>
        <Link to="/contacts" className="call-link-com desktop-contact">
          <FaPhoneAlt style={{ marginRight: "8px" }} />
          Contact Us
        </Link>
      </div>
    </Styles>
  );
}

import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="error-container">
            <div className="floating-icon" style={{ top: "10%", left: "10%" }}>🎬</div>
            <div className="floating-icon" style={{ bottom: "10%", right: "10%" }}>🍿</div>
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
                Oops! It looks like you've wandered off set. The page you are looking for is either missing or has been cut from the final edit.
            </p>
            <Link to="/" className="home-button">
                Back to Home
            </Link>
        </div>
    );
};
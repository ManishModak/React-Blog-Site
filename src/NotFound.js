import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That Page cannot be Found</p>
            <Link to={"/"}>Go Back To Home Page </Link>
        </div>
    );
}
 
export default NotFound

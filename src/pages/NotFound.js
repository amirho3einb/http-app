import { Link } from "react-router-dom";

const NotFound = (props) => {
    return ( 
        <>
            <p>
                404
                <br />
                the page not found
            </p>
            <Link to="/"></Link>
        </>
    );
}
 
    
export default NotFound;

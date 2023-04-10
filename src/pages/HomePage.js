import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

function HomePage() {
    const auth = useAuth();

    return (
        <div>
            Home Page
            <button onClick={() => auth.signinRedirect()}>LOGIN</button>
            <Link to="userProfile">Go to ProfilePage</Link>
        </div>
    )
}

export default HomePage;
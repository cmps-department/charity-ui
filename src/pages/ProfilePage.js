import { useAuth } from "react-oidc-context";

function ProfilePage() {
    const { user } = useAuth();

    return (
        <div>
            ProfilePage
            <p>token: {user.access_token}</p>
        </div>
    )
}

export default ProfilePage;
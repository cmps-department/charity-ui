import { useAuth } from "react-oidc-context";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      ProfilePage
    </div>
  )
}

export default ProfilePage;
import Title from "../components/Title";
import Uploader from "../components/Uploader";

import hand from "../images/title/hand.png"

function PostCreationPage() {
    return (
        <main className="container max-w-xl mx-auto flex-auto my-15 px-4">
            <Title imageUrl={hand} title="Створити оголошення" />
            <Uploader />
        </main>
    )
}

export default PostCreationPage;
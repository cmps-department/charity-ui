import Title from "../components/Title";
import Uploader from "../components/Uploader";
import FormData from "../components/FormData";

import hand from "../images/title/hand.png";

function PostCreationPage() {
  return (
    <main className="container max-w-xl mx-auto flex-auto my-15 px-4">
      <Title imageUrl={hand} title="Створити оголошення" />
      <form action="">
        <Uploader />
        <FormData />
      </form>
    </main>
  );
}

export default PostCreationPage;

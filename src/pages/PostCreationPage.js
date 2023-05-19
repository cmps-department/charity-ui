import Title from "../components/Title";
import Uploader from "../components/Uploader";
import PostForm from "../components/PostForm";
import ImageDnd from "../components/ImageDnd";

import hand from "../images/title/hand.png";

function PostCreationPage() {
  return (
    <>
      <Title imageUrl={hand} title="Створити оголошення" />
      <form action="">
        <Uploader />
        <ImageDnd />
        <PostForm />
      </form>
    </>
  );
}

export default PostCreationPage;

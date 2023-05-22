import { useSelector } from "react-redux";

import Title from "../components/Title";
import Uploader from "../components/Uploader";
import PostForm from "../components/PostForm";
import ImageDnd from "../components/ImageDnd";

import hand from "../images/title/hand.png";

import useSendApplication from "../hooks/useSendApplication";

function PostCreationPage() {
  const postData = useSelector(state => state.postData);
  const [loading, error, sendApplication] = useSendApplication();

  function handleSubmit(e) {
    e.preventDefault()
    sendApplication(postData);
  }

  return (
    <>
      <Title imageUrl={hand} title="Створити оголошення" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Uploader />
        <ImageDnd />
        <PostForm />
      </form>
    </>
  );
}

export default PostCreationPage;

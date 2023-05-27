import { useSelector, useDispatch } from "react-redux";

import Title from "../components/Title";
import Uploader from "../components/Uploader";
import PostForm from "../components/PostForm";
import ImageDnd from "../components/ImageDnd";

import hand from "../images/title/hand.png";

import useSendApplication from "../hooks/useSendApplication";
import { clearFormData } from "../store/slices/postCreationSlice";

import Spinner from "../components/Spinner";
import SuccesfulCreation from "../components/SuccesfulCreation";
import ErrorCreation from "../components/ErrorCreation";

function PostCreationPage() {
  const postData = useSelector(state => state.postData);
  const [loading, succesful, error, sendApplication] = useSendApplication();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault()
    sendApplication(postData);
    dispatch(clearFormData());
  }

  return (
    <>
      <Title imageUrl={hand} title="Створити оголошення" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Uploader />
        <ImageDnd />
        <PostForm />
        {loading ? <Spinner width={50} padding={10} /> : null}
        {succesful ? <SuccesfulCreation /> : null}
        {error ? <ErrorCreation /> : null}
      </form>
    </>
  );
}

export default PostCreationPage;

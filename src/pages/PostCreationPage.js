import { useSelector, useDispatch } from "react-redux";

import Title from "../components/Title";
import Filters from "../components/Filters";
import Uploader from "../components/Uploader";
import PostForm from "../components/PostForm";
import ImageDnd from "../components/ImageDnd";

import hand from "../images/title/hand.png";

import useSendApplication from "../hooks/useSendApplication";
import { clearFormData, setCategory } from "../store/slices/postCreationSlice";

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

  function handleChange(filter) {
    dispatch(setCategory(filter.value))
  }

  return (
    <>
      <Title imageUrl={hand} title="Створити оголошення" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="font-bold text-xl mb-5 mt-7">Категорія*</h2>
        <Filters placeholder="Категорія" handleChange={handleChange} />
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

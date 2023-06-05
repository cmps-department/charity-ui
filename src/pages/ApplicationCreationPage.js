import { useSelector, useDispatch } from "react-redux";

import Title from "../components/Title";
import Filters from "../components/Filters";
import Uploader from "../components/Uploader";
import ApplicationForm from "../components/ApplicationForm";
import ImageDnd from "../components/ImageDnd";

import hand from "../images/title/hand.png";

import { useCreatePostMutation } from "../store/api/ApplicationApi";
import { clearFormData, setCategory } from "../store/slices/applicationCreationSlice";

import Spinner from "../components/Spinner";
import SuccesfulCreation from "../components/SuccesfulCreation";
import ErrorCreation from "../components/ErrorCreation";

function PostCreationPage() {
  const applicationData = useSelector(state => state.applicationData);
  const [createPost, {isLoading, isError, isSuccess}] = useCreatePostMutation();

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault()
    await createPost(applicationData).unwrap();
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
        <ApplicationForm />
        {isLoading ? <Spinner width={50} padding={10} /> : null}
        {isSuccess ? <SuccesfulCreation /> : null}
        {isError ? <ErrorCreation /> : null}
      </form>
    </>
  );
}

export default PostCreationPage;

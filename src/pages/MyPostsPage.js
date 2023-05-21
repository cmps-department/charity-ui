import noticeboard from "../images/title/noticeboard.png";
import plus from "../images/title/plus.png";
import Title from "../components/Title";
import MyCardList from "../components/MyCardList";
import { Link } from "react-router-dom";

function MyPostsPage() {
  return (
    <>
      <Title imageUrl={noticeboard} alt="heart" title="Мої оголошення" />
      <MyCardList />
      <Link
        to={`/createPost`}
        className="max-w-[300px] bg-primary-400 border accent-200 rounded-3xl p-5 
                 outline outline-3 outline-transparent outline-offset-[-3px]
                 hover:outline-primary-100 ease-in duration-200 cursor-pointer 
                 flex flex-col justify-center items-center"
        style={{ width: "300px", height: "400px", fontSize: "100px" }}
      >
        <img src={plus} alt="plus" />
      </Link>
    </>
  );
}

export default MyPostsPage;

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../store/api/ApplicationApi";
import useUserInfo from "../hooks/useUserInfo";

import { findFilter } from "../filters/filters";

import Title from "../components/Title";
import Spinner from "../components/Spinner";
import Carousel from "../components/Carousel";

import moderation from "../images/title/moderation.png";

function ModeratedApplicationPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id);
  const [updatePost] = useUpdatePostMutation();
  const navigate = useNavigate();
  const user = useUserInfo(data?.authorId);

  async function handleUpdate(newStatus) {
    const application = JSON.parse(JSON.stringify(data));
    application.status = newStatus;
    await updatePost(application);
    navigate("/moderatedApplications");
  }

  if (isLoading) {
    return <Spinner />;
  }

  const category = findFilter(data?.category);

  return (
    <>
      <Title imageUrl={moderation} alt="info" title="Оголошення - модерація" />
      <div className="flex mb-10 mt-10">
        <div className="w-1/2">
          <Carousel images={data?.images} />
        </div>
        <div className="w-1/2 mx-15">
          <h2 className="text-xl font-bold mb-4 mt-4">{`${user?.firstName} ${user?.lastName}`}</h2>
          <p className="text-gray-700 text-base">{data?.fullDescription}</p>
          <h2 className="text-xl font-bold mb-4 mt-4">Реквізити та контакти</h2>
          <h2 className="text-gray-700 text-base">{data?.shortDescription}</h2>
          <h2 className="text-gray-700 text-base">
            <span>Пошта:</span>{" "}
            <a
              href={`mailto:${user?.email}`}
              className="hover:text-primary-300 hover:underline"
            >
              {user?.email}
            </a>
          </h2>
          <h2 className="text-gray-700 text-base mb-10">
            <span>Телефон:</span>{" "}
            <a
              href={`tel:${data?.phoneNumber}`}
              className="hover:text-primary-300 hover:underline"
            >
              {data?.phoneNumber}
            </a>
          </h2>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">Кінцева сума:</p>
            <p className="text-100 text-2xl font-semibold">
              {data?.targetAmount}₴
            </p>
          </div>
          <div className="text-center flex justify-between items-center mb-10">
            {/* TODO - ДОДАТИ НА БЕКЕНДІ, ЩОБ ПРИ СТВОРЕННІ ПУБЛІКАЦІЇ ДОДАВАЛОСЬ ПОЛЕ ДАТИ ЇЇ СТВОРЕННЯ */}
            <p className="font-normal text-100">Дата публікації:</p>
            <p className="text-100 font-normal">29.04.2023</p>
          </div>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">Категорія:</p>
            <p className="font-normal text-primary-300">{category}</p>
          </div>
          <div className="flex justify-between font-bold mb-1">
            <button
              onClick={() => handleUpdate("REJECTED")}
              className="text-reject"
            >
              Відхилити
            </button>
            <button
              onClick={() => handleUpdate("APPROVED")}
              className="text-approve"
            >
              Схвалити
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModeratedApplicationPage;

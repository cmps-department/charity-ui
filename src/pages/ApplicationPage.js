import { useGetPostByIdQuery } from "../store/api/ApplicationApi";
import { useParams } from "react-router-dom";
import useUserInfo from "../hooks/useUserInfo";

import Title from "../components/Title";
import Carousel from "../components/Carousel";
import Mark from "../components/Mark";
import Applications from "../components/Applications";
import Spinner from "../components/Spinner";

import { findFilter } from "../filters/filters";

import info from "../images/title/info.png";
import mark from "../images/title/bookmark.png";

const ApplicationPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id);
  const user = useUserInfo(data?.authorId);

  if (isLoading || !data) {
    return (
      <Spinner />
    )
  }

  const category = findFilter(data?.category);

  return (
    <>
      <Title imageUrl={info} alt="info" title="Додаткова інформація" />
      <div className="flex mb-10 mt-10">
        <div className="w-1/2">
          <Carousel images={data?.images} />
        </div>
        <div className="w-1/2 mx-15">
          <div className="flex items-center gap-x-5">
            <a
              href={data?.donationLink}
              target="_blank"
              rel="noreferrer"
              className="max-w-[300px] w-full box-border ease-in duration-200 
                font-semibold uppercase 
                bg-primary-100 text-center py-3 rounded-xl border-3 border-primary-100 hover:bg-transparent"
            >
              Задонатити
            </a>
            <Mark>
              <img
                className="mx-auto"
                src={mark}
                alt="mark"
                style={{ width: "30px", height: "30px" }}
              />
            </Mark>
          </div>
          <h2 className="text-xl font-bold mb-4 mt-4">{`${user?.firstName} ${user?.lastName}`}</h2>
          <p className="text-gray-700 text-base">
            {data?.fullDescription}
          </p>
          <h2 className="text-xl font-bold mb-4 mt-4">Реквізити та контакти</h2>
          <h2 className="text-gray-700 text-base">{data?.shortDescription}</h2>
          <h2 className="text-gray-700 text-base">
            <span>Пошта:</span> <a href={`mailto:${user?.email}`} className="hover:text-primary-300 hover:underline">{user?.email}</a>
          </h2>
          <h2 className="text-gray-700 text-base mb-10">
            <span>Телефон:</span> <a href={`tel:${data?.phoneNumber}`} className="hover:text-primary-300 hover:underline">{data.phoneNumber}</a>
          </h2>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">Кінцева сума:</p>
            <p className="text-100 text-2xl font-semibold">{data?.targetAmount}₴</p>
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
        </div>
      </div>
      <div><span className="mr-3">Більше з категорії:</span> <span className="text-primary-300">{category}</span></div>
      <Applications />
    </>
  );
};

export default ApplicationPage;

import React from 'react';
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import info from "../images/title/info.png";
import mark from "../images/title/bookmark.png";
import Button from "../components/Button";
import Mark from "../components/Mark";

const PostsPage = () => {
  return (
    <main className="container max-w-xl mx-auto my-15 px-4">
      <Title imageUrl={info} alt="info" title="Додаткова інформація" />
      <div className="flex mb-10 mt-10">
        <div className="w-1/2">
          <Carousel className="z-0" />
        </div>
        <div className="w-1/2 mx-15">
        <div className="flex items-center gap-x-5">
          <Button>Задонатити</Button>
          <Mark><img className="mx-auto" src={mark} alt="mark" style={{ width: '30px', height: '30px' }} /></Mark>
        </div>
          <h2 className="text-xl font-bold mb-4 mt-4">Володимир Андрєєв</h2>
          <p className="text-gray-700 text-base">
            Відкриваємо збір на 5 пікапів для ССО, щоб хлопці ще вправніше та мобільніше нищили ворога
          </p>
          <h2 className="text-xl font-bold mb-4 mt-4">Реквізити та контакти</h2>
          <h2 className="text-gray-700 text-base">Банка: 5375411205288033</h2> 
          <h2 className="text-gray-700 text-base">Приват: 5363542603051781 </h2>
          <h2 className="text-gray-700 text-base mb-10">PayPal: volodymyr.andreev@gmail.com</h2>
          <h2 className="text-gray-700 text-base">Пошта: volodymyr.andreev@gmail.com</h2>
          <h2 className="text-gray-700 text-base mb-10">Телефон: +380 50 45 78 091</h2>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">
              Кінцева сума:
            </p>
            <p className="text-100 text-2xl font-semibold">
              1 000 000₴
            </p>
          </div>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">
              Дата публікації:
            </p>
            <p className="text-100 font-normal">
              29.04.2023
            </p>
          </div>
          <div className="text-center flex justify-between items-center mb-10">
            <p className="font-normal text-100">
              Категорія:
            </p>
            <p className=" font-normal">
              Військовим
            </p>
          </div>
          
        </div>
      </div>
      
      <Filters />
      <CardList />
    </main>
  );
};

export default PostsPage;

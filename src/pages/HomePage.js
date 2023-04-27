import heart from "../images/heart.png";

import funnel from "../images/funnel.png";
import descending from "../images/descending.png";
import welfare from "../images/welfare.png";
import verified from "../images/verified.png";

import CardList from "../components/CardList";
import Title from "../components/Title";

function HomePage() {
  return (
    <main className="container max-w-xl mx-auto my-15 px-4">
      <Title imageUrl={heart} alt="heart" title="Привіт, волонтере!"/>
      <div className="flex justify-between gap-x-4 mt-8">
        <div className="w-full bg-gradient-to-br from-or-300 from-0% to-or-500 to-100% rounded-3xl flex border border-accent-100 p-6">
          <img src={welfare} alt="welfare" />
          <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-xl font-bold mb-2">Заголовок</h2>
            <p className="text-gray-700 text-base">Текст</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-br from-gr-300 from-0% to-gr-500 to-100% rounded-3xl flex border border-accent-100 p-6">
          <img src={verified} alt="verified" />
          <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-xl font-bold mb-2">Заголовок</h2>
            <p className="text-gray-700 text-base">Текст</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-12">
        <button className="space-x-2 py-2 px-4 rounded">
          <img
            src={funnel}
            alt="funnel"
            className="inline-block w-5 h-5 mr-3"
          />
          <span className="font-normal text-sm text-base">Фільтрувати</span>
        </button>
        <button className="space-x-2 py-2 px-4 rounded">
          <img
            src={descending}
            alt="descending"
            className="inline-block w-5 h-5 mr-3"
          />
          <span className="font-normal text-sm text-base">Сортувати</span>
        </button>
      </div>
      <CardList />
    </main>
  );
}

export default HomePage;

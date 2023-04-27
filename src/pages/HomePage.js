import heart from "../images/title/heart.png";

import welfare from "../images/welfare.png";
import verified from "../images/verified.png";

import Title from "../components/Title";
import CardList from "../components/CardList";
import Filters from "../components/Filters";

function HomePage() {
  return (
    <main className="container max-w-xl mx-auto my-15 px-4">
      <Title imageUrl={heart} alt="heart" title="Привіт, волонтере!"/>
      <div className="flex justify-between gap-x-4 my-10">
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
      <Filters />
      <CardList />
    </main>
  );
}

export default HomePage;

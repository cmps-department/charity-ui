import heart from "../images/heart.png";
import funnel from "../images/funnel.png";
import descending from "../images/descending.png";
import top from "../images/top.png";
import done from "../images/done.png";
import CardList from "../components/CardList";

function HomePage() {
  return (
    <main className="container mx-auto my-15 flex-auto">
      <h1 className="font-bold text-3xl flex items-center">
        <img src={heart} alt="Heart" className="inline-block mr-3" />
        Привіт, волонтере!
      </h1>
      <div className="flex justify-between gap-x-4 mt-8">
        <div className="w-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-xl flex border accent-200">
          <img src={top} alt="top" className="h-full object-cover" />
          <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-xl font-bold mb-2">Заголовок</h2>
            <p className="text-gray-700 text-base">Текст</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-green-500 to-green-300 rounded-xl flex border accent-200">
          <img src={done} alt="Done" className="h-full object-cover" />
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

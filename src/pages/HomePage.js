import heart from "../images/heart.png";
import funnel from "../images/funnel.png";
import descending from "../images/descending.png";
import top from "../images/top.png";
import done from "../images/done.png";
import Card from "../components/Card";

function HomePage() {
  return (
    <main>
      <div className="container px-10">
        <h1 className="font-bold text-3xl">
          <img src={heart} alt="Heart" className="inline-block mr-[15px]" />
          Привіт, волонтере!
        </h1>
        </div>

        <div className="container mx-auto px-4">
        <div class="flex justify-between gap-x-4 px-10">
          <div class="w-full  h-96 mx-4 md:mx-0 my-4 md:my-0 bg-gradient-to-b from-or-00 to-or-300 rounded-lg overflow-hidden shadow-lg flex border accent-200">
            <img src={top} alt="Image" class="h-full object-cover" />
            <div class="p-4 flex flex-col justify-center mx-auto">
              <h2 class="text-xl font-bold mb-2">Заголовок</h2>
              <p class="text-gray-700 text-base">Текст</p>
            </div>
          </div>
          <div class="w-full  h-96 mx-4 md:mx-0 my-4 md:my-0 bg-gradient-to-b from-gr-00 to-gr-300 rounded-lg overflow-hidden shadow-lg flex border accent-200">
            <img src={done} alt="Image" class="h-full object-cover" />
            <div class="p-4 flex flex-col justify-center mx-auto">
              <h2 class="text-xl font-bold mb-2">Заголовок</h2>
              <p class="text-gray-700 text-base">Текст</p>
            </div>
          </div>
          </div>

        <div class="flex space-x-4 px-10">
          <button class="flex items-center space-x-2 py-2 px-4 rounded">
            <img src={funnel} alt="funnel" className="inline-block w-5 h-5 mr-5px]" />
            <span class="font-normal text-sm text-base">Фільтрувати</span>
          </button>
          <button class="flex items-center space-x-2 py-2 px-4 rounded">
            <img src={descending} alt="descending" className="inline-block w-5 h-5 mr-[5px]" />
            <span class="font-normal text-sm text-base">Сортувати</span>
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-x-2 px-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

      </div>
    </main>
  );
}

export default HomePage;

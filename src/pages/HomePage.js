import heart from "../images/heart.png";
import funnel from "../images/funnel.png";
import descending from "../images/descending.png";
import Card from "../components/Card";

function HomePage() {
  return (
    <main>
      <div className="container px-6">
        <h1 className="font-bold text-3xl">
          <img src={heart} alt="Heart" className="inline-block mr-[15px]" />
          Привіт, волонтере!
        </h1>


        

        <div class="news-container">
  <div class="newscard bg-gradient-to-b from-orange-300 to-orange-500 rounded-lg overflow-hidden shadow-lg ">
    <img src={heart} alt="Image" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">Заголовок</h2>
      <p class="text-gray-700 text-base">Текст</p>
    </div>
  </div>

  <div class="newscard bg-gradient-to-b from-green-300 to-green-500 rounded-lg overflow-hidden shadow-lg">
    <img src={heart} alt="Image" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">Заголовок</h2>
      <p class="text-gray-700 text-base">Текст</p>
    </div>
  </div>
</div>






        <div class="flex space-x-4">
          <button class="flex items-center space-x-2 py-2 px-4 rounded">
            <img src={funnel} alt="funnel" className="inline-block w-5 h-5 mr-5px]" />
            <span class="font-normal text-sm text-base">Фільтрувати</span>
          </button>
          <button class="flex items-center space-x-2 py-2 px-4 rounded">
            <img src={descending} alt="descending" className="inline-block w-5 h-5 mr-[5px]" />
            <span class="font-normal text-sm text-base">Сортувати</span>
          </button>
        </div>






        <div className="card-container">
          <div className="card-row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="card-row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

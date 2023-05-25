import heart from "../images/title/heart.png";

import welfare from "../images/welfare.png";
import verified from "../images/verified.png";

import Title from "../components/Title";
import CardList from "../components/CardList";
import Filters from "../components/Filters";

function HomePage() {
  return (
    <>
      <Title imageUrl={heart} alt="heart" title="Привіт, волонтере!!!" />
      <div className="flex justify-between gap-x-4 mb-10">
        <div
          className="w-full bg-gradient-to-br from-or-300 from-0% to-or-500
                       to-100% rounded-3xl flex gap-12 border border-accent-100 p-6"
        >
          <div className="w-6/12 flex flex-col justify-center align-center">
            <img width={274} height={274} src={welfare} alt="welfare" />
          </div>
          <div className="w-6/12 p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-xl font-bold mb-4">Допомогати - круто</h2>
            <p className="text-gray-700 text-base">
              Навіть 1 гривня може в купі зібрати мільйон. Не обезцінюй свій
              вклад!
            </p>
          </div>
        </div>
        <div
          className="w-full bg-gradient-to-br from-gr-300 from-0% to-gr-500
                       to-100% rounded-3xl flex gap-12 border border-accent-100 p-6"
        >
          <div className="w-5/12 flex flex-col justify-center align-center">
            <img width={216} height={216} src={verified} alt="verified" />
          </div>
          <div className="w-7/12 p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-xl font-bold mb-4">
              Лише перевірені оголошення
            </h2>
            <p className="text-gray-700 text-base">
              Ми власноруч перевіряємо кожне оголошення на правдивість, тим
              самим забезпечуємо Вам безпечний донат!
            </p>
          </div>
        </div>
      </div>
      <Filters />
      <CardList />
    </>
  );
}

export default HomePage;

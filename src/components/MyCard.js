import car from "../images/car.png";

const MyCard = () => {
  return (
    <div className="max-w-[300px] bg-primary-400 border accent-200 rounded-3xl p-5 outline outline-3 outline-transparent outline-offset-[-3px] hover:outline-primary-100 ease-in duration-200 cursor-pointer">
      <div className="h-[256px] mb-[30px]">
        <img
          src={car}
          alt="car"
          width={256}
          height={256}
          className="inline-block rounded-xl object-cover"
        />
      </div>
      <div>
        <h5 className="max-w-[300px] font-bold uppercase text-xl mb-4">
          "Повернись живим"
        </h5>
        <p className="font-normal text-100 mb-8">
          {"Триває збір коштів на закупівлю дронів для Збройних Сил України".slice(0, 60) + "..."}
        </p>
        <div className="text-center mb-3 flex justify-between items-center">
          <p className="font-normal text-100">
            Кінцева сума:
          </p>
          <p className="text-100 text-2xl font-semibold">
            1 000 000₴
          </p>
        </div>
        <div>
          <div className="text-center mb-3 flex justify-between items-center">
            <button className="font-normal text-100">Редагувати</button>
            <button className="font-normal text-100">Видалити</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;

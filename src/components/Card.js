import React from "react";
import dron from "../images/dron.png";

const Card = () => {
  return (
    <div className="max-w-[300px] bg-primary-400 border accent-200 rounded-xl p-2 mx-3 mt-6">
  <img src={dron} alt="dron" className="inline-block mr-[15px] rounded-xl"/>

  <div className="p-5">
    <h5 className="max-w-[300px] w-full font-bold uppercase text-xl">"Повернись живим"</h5>

    <p className="mb-3 font-normal text-100">Триває збір коштів на закупівлю дронів для Збройних Сил України</p>
    <div className="text-center mb-3">
      <p className="mb-0 font-normal text-100 inline-block mr-[15px]">Кінцева сума:</p>
      <p className="mb-0 font-normal text-100 text-2xl inline-block font-semibold">1 000 000₴</p>
    </div>
    <button className="max-w-[300px] w-full font-semibold uppercase bg-primary-100 text-center py-4 rounded-xl block">Задонатити</button>
  </div>
</div>


  );
};

export default Card;

import car from "../images/car.png";
import { Link } from "react-router-dom";

const Card = () => {
  const item = { id: 1 };
  return (
    <div className="max-w-[300px] bg-primary-400 border accent-200 rounded-3xl p-5 
                    outline outline-3 outline-transparent outline-offset-[-3px]
                    hover:outline-primary-100 ease-in duration-200 cursor-pointer">
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
          {/* Replacing the button with a link */}
          <div>
            <Link
              to={`/posts/${item.id}`}
              className="max-w-[300px] block box-border ease-in duration-200 
                          font-semibold uppercase 
                          bg-primary-100 text-center py-3 rounded-xl border-3 border-primary-100 hover:bg-transparent"
              style={{ fontSize: "12px" }}
            >
              Задонатити
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

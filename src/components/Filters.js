import funnel from "../images/filters/funnel.png";
import descending from "../images/filters/descending.png";

function Filters() {
  return (
    <div className="flex items-center gap-x-5">
      <div>
        <button className="space-x-2 rounded hover:text-primary-300">
          <span className="font-normal text-sm text-base">Фільтрувати</span>
          <img
            src={funnel}
            alt="funnel"
            className="inline-block w-5 h-5 ml-2.5"
          />
        </button>
      </div>

      <div>
        <button className="space-x-2 rounded hover:text-primary-300">
          <span className="font-normal text-sm text-base">Сортувати</span>
          <img
            src={descending}
            alt="descending"
            className="inline-block w-5 h-5 ml-2.5"
          />
        </button>
      </div>
    </div>
  );
}

export default Filters;

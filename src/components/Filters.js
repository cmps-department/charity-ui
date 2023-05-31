import Select from "react-select";

import ARMY from "../images/filters/ARMY.png";
import REFUGEES from "../images/filters/REFUGEES.png";
import ANIMALS from "../images/filters/ANIMALS.png";
import ELDERLY from "../images/filters/ELDERLY.png";
import DISABILITY from "../images/filters/DISABILITY.png";
import ONCOLOGY from "../images/filters/ONCOLOGY.png";
import ORPHANS from "../images/filters/ORPHANS.png";
import HOMELESS from "../images/filters/HOMELESS.png";
import EKOORG from "../images/filters/EKOORG.png";
import COMMORG from "../images/filters/COMMORG.png";
import INTORG from "../images/filters/INTORG.png";

const filters = [
  {
    label: "Військовим",
    value: "ARMY",
    src: ARMY,
  },
  {
    label: "Переселенцям",
    value: "REFUGEES",
    src: REFUGEES,
  },
  {
    label: "Тваринкам",
    value: "ANIMALS",
    src: ANIMALS,
  },
  {
    label: "Літнім людям",
    value: "ELDERLY",
    src: ELDERLY,
  },
  {
    label: "Людям з інвалідністю",
    value: "DISABILITY",
    src: DISABILITY,
  },
  {
    label: "Людям з онкологією",
    value: "ONCOLOGY",
    src: ONCOLOGY,
  },
  {
    label: "Дітям-сиротам",
    value: "ORPHANS",
    src: ORPHANS,
  },
  {
    label: "Бездомним людям",
    value: "HOMELESS",
    src: HOMELESS,
  },
  {
    label: "Еко-організаціям",
    value: "EKOORG",
    src: EKOORG,
  },
  {
    label: "Громадським організаціям",
    value: "COMMORG",
    src: COMMORG,
  },
  {
    label: "Міжнародним організаціям",
    value: "INTORG",
    src: INTORG,
  },
];

function CustomOption({ innerRef, innerProps, data }) {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center gap-x-5 pl-5 hover:text-primary-300 text-base py-3 cursor-pointer"
    >
      <img src={data.src} alt={data.value} />
      <span>{data.label}</span>
    </div>
  );
}

function Filters({ placeholder = "Фільтрувати", handleChange }) {

  return (
    <Select
      options={filters}
      placeholder={placeholder}
      onChange={handleChange}
      noOptionsMessage={() => "Категорію не знайдено..."}
      components={{ Option: CustomOption }}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: "300px",
          borderRadius: "24px"
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          width: "300px",
          borderRadius: "24px"
        }),
      }}
    />
  );
}

export default Filters;

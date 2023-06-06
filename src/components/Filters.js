import Select from "react-select";
import { filters } from "../filters/filters";

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

import {
  $formData,
  countryChanged,
  cityChanged,
  universityTypeChanged,
  accommodationTypeChanged,
  submitForm,
} from "./formStore";
import { useUnit } from "effector-react";
import "./form.css";

const countriesData = [
  {
    name: "РБ",
    cities: ["Минск", "Гомель"],
    accommodationOptions: ["Общага", "Не интересует"],
  },
  {
    name: "РФ",
    cities: ["Москва", "Сочи"],
    accommodationOptions: [
      "Общага",
      "Аренда",
      "Не интересует",
      "Общага + Аренда",
    ],
  },
];

const universityTypes = ["Технический", "Гуманитарный"];

export function Form() {
  const formData = useUnit($formData);
  const handleSubmit = () => {
    submitForm();
  };
  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={formData.country}
        onChange={(e) => countryChanged(e.target.value)}
      >
        <option value="">Выберите страну</option>
        <option value="РБ">РБ</option>
        <option value="РФ">РФ</option>
      </select>

      <select
        value={formData.city}
        onChange={(e) => cityChanged(e.target.value)}
        disabled={!formData.country}
      >
        <option value="">Выберите город</option>
        {countriesData
          .find((elem) => elem.name === formData.country)
          ?.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>

      <select
        value={formData.universityType}
        onChange={(e) => universityTypeChanged(e.target.value)}
      >
        <option value="">Выберите вид ВУЗа</option>
        {universityTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        value={formData.accommodationType}
        onChange={(e) => accommodationTypeChanged(e.target.value)}
        disabled={!formData.country || !formData.city}
      >
        <option value="">Выберите вариант проживания</option>
        {countriesData
          .find((elem) => elem.name === formData.country)
          ?.accommodationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>

      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}

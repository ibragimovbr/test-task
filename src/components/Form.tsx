import { useUnit } from "effector-react";
import { $formData, fieldChanged, submitForm } from "./formStore";
import { data } from "./data";
import { type FormData } from "./types";
import "./form.css";

export function Form() {
  const formData = useUnit($formData);

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      fieldChanged({ field, value: e.target.value });
    };

  const handleSubmit = () => {
    submitForm();
  };

  const selectedCountry = data.countries.find(
    (country) => country.name === formData.country
  );
  const selectedCity = selectedCountry?.cities.find(
    (city) => city.name === formData.city
  );
  const availableFaculties = data.universityTypes.filter((universityType) =>
    selectedCity?.availableUniversityTypes.includes(universityType.name)
  );

  const selectedFaculties = formData.universityType
    ? availableFaculties.find((elem) => elem.name === formData.universityType)
        ?.faculties
    : [];

  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={formData.country} onChange={handleChange("country")}>
        <option value="">Выберите страну</option>
        {data.countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        value={formData.city}
        onChange={handleChange("city")}
        disabled={!formData.country}
      >
        <option value="">Выберите город</option>
        {selectedCountry?.cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <select
        value={formData.universityType}
        onChange={handleChange("universityType")}
        disabled={!formData.city}
      >
        <option value="">Выберите вид ВУЗа</option>
        {selectedCity?.availableUniversityTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        value={formData.accommodationType}
        onChange={handleChange("accommodationType")}
        disabled={!formData.universityType}
      >
        <option value="">Выберите вариант проживания</option>
        {selectedCity?.accommodationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={formData.faculty}
        onChange={handleChange("faculty")}
        disabled={!formData.universityType}
      >
        <option value="">Выберите факультет</option>
        {selectedFaculties?.map((faculty) => (
          <option key={faculty} value={faculty}>
            {faculty}
          </option>
        ))}
      </select>

      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}

import { createStore, createEvent } from "effector";
import { type FormData } from "./types";

const initialFormData: FormData = {
  country: "",
  city: "",
  universityType: "",
  accommodationType: "",
  faculty: "",
};

export const fieldChanged = createEvent<{
  field: keyof FormData;
  value: string;
}>();

// Создание стора с обработкой изменений
export const $formData = createStore<FormData>(initialFormData).on(
  fieldChanged,
  (state, { field, value }) => {
    const newState = { ...state, [field]: value };

    if (field === "country") {
      newState.city = "";
      newState.universityType = "";
      newState.accommodationType = "";
      newState.faculty = "";
    } else if (field === "city") {
      newState.universityType = "";
      newState.accommodationType = "";
      newState.faculty = "";
    } else if (field === "universityType") {
      newState.faculty = "";
    }

    return newState;
  }
);

export const submitForm = createEvent<void>();

submitForm.watch(() => {
  const formData = $formData.getState();
  alert(JSON.stringify(formData, null, 2));
});

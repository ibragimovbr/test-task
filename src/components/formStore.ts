import { createStore, createEvent } from "effector";
import type { FormData } from "./types";

const initialFormData: FormData = {
  country: "",
  city: "",
  universityType: "",
  accommodationType: "",
};

export const countryChanged = createEvent<string>();
export const cityChanged = createEvent<string>();
export const universityTypeChanged = createEvent<string>();
export const accommodationTypeChanged = createEvent<string>();
export const submitForm = createEvent<void>();

export const $formData = createStore<FormData>(initialFormData)
  .on(countryChanged, (_state, country) => ({
    country,
    city: "",
    universityType: "",
    accommodationType: "",
  }))
  .on(cityChanged, (state, city) => ({
    country: state.country,
    city,
    universityType: "",
    accommodationType: "",
  }))
  .on(universityTypeChanged, (state, universityType) => ({
    ...state,
    universityType,
  }))
  .on(accommodationTypeChanged, (state, accommodationType) => ({
    ...state,
    accommodationType,
  }));

submitForm.watch(() => {
  const formData = $formData.getState();
  alert(JSON.stringify(formData, null, 2));
});

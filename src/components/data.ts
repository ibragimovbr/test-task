export const data = {
  countries: [
    {
      name: "РБ",
      cities: [
        {
          name: "Минск",
          availableUniversityTypes: ["Технический", "Гуманитарный"],
          accommodationOptions: ["Общага", "Не интересует"],
        },
        {
          name: "Гомель",
          availableUniversityTypes: ["Технический", "Гуманитарный"],
          accommodationOptions: ["Общага", "Не интересует"],
        },
      ],
    },
    {
      name: "РФ",
      cities: [
        {
          name: "Москва",
          availableUniversityTypes: ["Технический", "Гуманитарный"],
          accommodationOptions: [
            "Общага",
            "Аренда",
            "Не интересует",
            "Общага + Аренда",
          ],
        },
        {
          name: "Сочи",
          availableUniversityTypes: ["Технический"], // Ограничение для Сочи
          accommodationOptions: [
            "Общага",
            "Аренда",
            "Не интересует",
            "Общага + Аренда",
          ],
        },
      ],
    },
  ],
  universityTypes: [
    {
      name: "Технический",
      faculties: ["Математика", "Физика"],
    },
    {
      name: "Гуманитарный",
      faculties: ["История", "Философия"],
    },
  ],
};

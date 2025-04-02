/// <reference types="vite/client" />

export const ENV_VARIABLE = {
  PUBLIC_API_TOKEN: import.meta.env.PUBLIC_API_TOKEN ?? '',
  PUBLIC_VACANCY_ID: import.meta.env.PUBLIC_VACANCY_ID ?? '',
};

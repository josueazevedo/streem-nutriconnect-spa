const BASE_PATH = '/api/public';
export const URL_PUBLIC = {
  PRE_CONSULTATION: (form_id: string) =>
    `${BASE_PATH}/pre-consultation/${form_id}`,
};

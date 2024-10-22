const BASE_PATH = '/api/record';
export const URL_RECORD = {
  CREATE_ASSESMENT: `${BASE_PATH}/assessment`,
  UPDATE: (id: string) => `${BASE_PATH}/${id}`,
  FIND: (id: string) => `${BASE_PATH}/${id}`,
  DELETE: (id: string) => `${BASE_PATH}/${id}`,
  FIND_ALL: `${BASE_PATH}`,

  CREATE_EXTERNAL_FORM: `/api/record/external/pre-consultation`,
};

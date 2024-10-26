const BASE_PATH = '/api/record';
export const URL_RECORD = {
  UPDATE: (id: string) => `${BASE_PATH}/${id}`,
  FIND: (id: string) => `${BASE_PATH}/${id}`,
  DELETE: (id: string) => `${BASE_PATH}/${id}`,
  FIND_ALL: `${BASE_PATH}`,

  CREATE_EXTERNAL_FORM: `/api/record/external/pre-consultation`,
};

export const URL_RECORD_ASSESSMENT = {
  CREATE: `${BASE_PATH}/assessment`,
  UPDATE: `${BASE_PATH}/assessment`,
  DELETE: (id: string) => `${BASE_PATH}/assessment/${id}`,
  FIND: (id: string) => `${BASE_PATH}/assessment/${id}`,
  CURRENT: (id: string) => `${BASE_PATH}/assessment/current/${id}`,
  HISTORY: (id: string) => `${BASE_PATH}/assessment/history/${id}`,
};

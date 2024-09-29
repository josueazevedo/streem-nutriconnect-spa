const BASE_PATH = '/api/patient';
export const URL_PATIENT = {
  CREATE: `${BASE_PATH}`,
  UPDATE: (id: string) => `${BASE_PATH}/${id}`,
  FIND: (id: string) => `${BASE_PATH}/${id}`,
  DELETE: (id: string) => `${BASE_PATH}/${id}`,
  FIND_ALL: `${BASE_PATH}`,
};

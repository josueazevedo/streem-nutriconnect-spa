export function parseToFormData(object: any): FormData {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    if (
      object[key] !== null &&
      object[key] !== undefined &&
      object[key] !== ''
    ) {
      formData.append(key, object[key]);
    }
  });
  return formData;
}

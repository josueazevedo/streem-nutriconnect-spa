export interface Patient {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  date_of_birth: Date;
  gender: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  photo?: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

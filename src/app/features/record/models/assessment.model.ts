export interface Assessment {
  // PhyAssessment fields
  id?: string;
  patient_id: string;
  date_assesssment: string;
  weight: number;
  height: number;
  imc: number;
  body_density?: number;
  fat_percentage?: number;
  obs?: string;

  // PhySkinFolds fields
  peito?: number;
  abdominal?: number;
  coxa?: number;
  triceps?: number;
  subescapular?: number;
  suprailiaca?: number;
  axilar_media?: number;

  // PhyCircumferences fields
  cintura: number;
  quadril: number;
  braco: number;
  panturrilha: number;
}

export interface Assessment {
  // PhyAssessment fields
  tenant_id: string;
  patient_id: string;
  date_assesssment: Date;
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

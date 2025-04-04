import { VacancyStatusText } from '@domain/VacancyStatus';

export interface InputProps {
  label?: string;
  placeholder?: string;
  classes?: string;
  type?: string;
  id?: string;
}

export enum RecruitmentTabs {
  Vacancies = 'Vacantes',
  Candidates = 'Candidatos',
}

export const vacancyStatusCardOutput = {
  [VacancyStatusText.New]: { imgSrc: 'new', color: '#22C55E' },
  [VacancyStatusText.InProgress]: { imgSrc: 'in-progress', color: '#14B8A6' },
  [VacancyStatusText.Offer]: { imgSrc: 'offer', color: '#e65600' },
  [VacancyStatusText.Selected]: { imgSrc: 'selected', color: '#3B82F6' },
  [VacancyStatusText.Discarded]: { imgSrc: 'discarded', color: '#ED6F6F' },
  [VacancyStatusText.Default]: { imgSrc: 'default', color: '#808080' },
};

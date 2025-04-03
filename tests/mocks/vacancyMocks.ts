import type { VacancyStatusInformation } from '@domain/VacancyStatus';

export const mockVacancyStatuses: VacancyStatusInformation[] = [
  {
    id: '1',
    name: 'Open',
    order: 1,
    companyId: '123',
    vacancyId: '456',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-02'),
  },
  {
    id: '2',
    name: 'Closed',
    order: 2,
    companyId: '123',
    vacancyId: '456',
    createdAt: new Date('2023-01-03'),
    updatedAt: new Date('2023-01-04'),
  },
];

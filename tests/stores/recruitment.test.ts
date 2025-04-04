import { describe, test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useRecruitmentStore } from '@stores/recruitment';
import { RecruitmentTabs } from '@typesOrigin/recruitment';
import { VacancyStatusText, type VacancyStatus } from '@domain/VacancyStatus';

describe('useRecruitmentStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('should initialize with default state', () => {
    const store = useRecruitmentStore();

    expect(store.loading).toBe(false);
    expect(store.vacancyStatuses).toBeNull();
    expect(store.vacancyTabs).toEqual({
      [RecruitmentTabs.Vacancies]: true,
      [RecruitmentTabs.Candidates]: false,
    });
  });

  test('should update loading state', () => {
    const store = useRecruitmentStore();

    store.loading = true;
    expect(store.loading).toBe(true);

    store.loading = false;
    expect(store.loading).toBe(false);
  });

  test('should update vacancyStatuses', () => {
    const store = useRecruitmentStore();

    const mockStatuses: VacancyStatus[] = [
      {
        id: '1',
        name: VacancyStatusText.Offer,
        order: 1,
        companyId: '123',
        vacancyId: '456',
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-02'),
      },
    ];

    store.vacancyStatuses = mockStatuses;
    expect(store.vacancyStatuses).toEqual(mockStatuses);
  });

  test('should update vacancyTabs correctly', () => {
    const store = useRecruitmentStore();

    store.vacancyTabs[RecruitmentTabs.Vacancies] = false;
    store.vacancyTabs[RecruitmentTabs.Candidates] = true;

    expect(store.vacancyTabs).toEqual({
      [RecruitmentTabs.Vacancies]: false,
      [RecruitmentTabs.Candidates]: true,
    });
  });
});

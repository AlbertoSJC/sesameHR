import VacanciesTab from '@components/recruitment/vacancies/VacanciesTab.vue';
import VacancyStatusCard from '@components/recruitment/vacancies/VacancyStatusCard.vue';
import { useRecruitmentStore } from '@stores/recruitment';
import { mockVacancyStatuses } from '@tests/mocks/vacancyMocks';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

describe('VacanciesTab', () => {
  let recruitmentStore: ReturnType<typeof useRecruitmentStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    recruitmentStore = useRecruitmentStore();
    recruitmentStore.vacancyStatuses = mockVacancyStatuses;
  });

  test('Should mount correctly', () => {
    const wrapper = mount(VacanciesTab);

    expect(wrapper.exists()).toBe(true);
  });

  test('Renders all VacancyStatusCard components with correct props', () => {
    const wrapper = mount(VacanciesTab);

    const cards = wrapper.findAllComponents(VacancyStatusCard);
    expect(cards.length).toBe(mockVacancyStatuses.length);

    cards.forEach((card, index) => {
      expect(card.props('status')).toEqual(mockVacancyStatuses[index]);
      expect(card.props('index')).toBe(index);
    });
  });
});

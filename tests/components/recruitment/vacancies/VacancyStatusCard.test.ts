import VacancyStatusCard from '@components/recruitment/vacancies/VacancyStatusCard.vue';
import { VacancyStatus, VacancyStatusText } from '@domain/VacancyStatus';
import { useRecruitmentStore } from '@stores/recruitment';
import { mockVacancyStatuses } from '@tests/mocks/vacancyMocks';
import { vacancyStatusCardOutput } from '@typesOrigin/recruitment';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

describe('VacancyStatusCard', () => {
  let recruitmentStore: ReturnType<typeof useRecruitmentStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    recruitmentStore = useRecruitmentStore();
    recruitmentStore.vacancyStatusList = mockVacancyStatuses;
  });

  test('Should mount correctly', () => {
    const wrapper = mount(VacancyStatusCard, { props: { status: null, index: 0 } });

    expect(wrapper).toBeDefined();
  });

  test('Should render with correct background color based on index', () => {
    const wrapperEven = mount(VacancyStatusCard, {
      props: { status: null, index: 0 },
    });

    expect(wrapperEven.classes()).toContain('bg-white');

    const wrapperOdd = mount(VacancyStatusCard, {
      props: { status: null, index: 1 },
    });
    expect(wrapperOdd.classes()).toContain('bg-[#F8FAFC]');
  });

  test('Should render with default status when status is null', () => {
    const wrapper = mount(VacancyStatusCard, {
      props: { status: null, index: 0 },
    });

    const img = wrapper.find('img');
    const span = wrapper.find('span');
    const hr = wrapper.find('hr');

    expect(img.attributes('src')).toContain('default.svg');
    expect(span.text()).toBe('Recruitment');
    expect(hr.attributes('style')).toContain('background-color: #808080;');
  });

  test('Should render with correct status and elements for all statuses', () => {
    mockVacancyStatuses.forEach((status, index) => {
      const wrapper = mount(VacancyStatusCard, {
        props: { status, index },
      });

      const img = wrapper.find('img');
      const span = wrapper.find('span');
      const hr = wrapper.find('hr');

      expect(img.attributes('src')).toContain(`${vacancyStatusCardOutput[status?.name ?? VacancyStatusText.Default].imgSrc}.svg`);

      expect(span.text()).toBe(status.name);

      expect(hr.attributes('style')).toContain(`background-color: ${vacancyStatusCardOutput[status?.name ?? VacancyStatusText.Default].color};`);
    });
  });
});

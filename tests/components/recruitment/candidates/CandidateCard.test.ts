import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CandidateCard from '@components/recruitment/candidates/CandidateCard.vue';
import CandidateOptionsTab from '@components/recruitment/candidates/CandidateOptionsTab.vue';
import { mockCandidateData } from '@tests/mocks/candidateMocks';
import { formatDate } from 'src/utils/dateUtils';
import { Candidate } from '@domain/Candidate';
import { createPinia, setActivePinia } from 'pinia';

describe('CandidateCard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test('renders candidate information correctly', () => {
    const wrapper = mount(CandidateCard, {
      props: {
        candidate: new Candidate(mockCandidateData),
        vacancyIndex: 0,
      },
    });

    const nameSpan = wrapper.find('.ellipsis-text');
    expect(nameSpan.text()).toBe(`${mockCandidateData.firstName} ${mockCandidateData.lastName}`);
    expect(nameSpan.attributes('title')).toBe(`${mockCandidateData.firstName} ${mockCandidateData.lastName}`);

    const atsSpan = wrapper.find('.added-by');
    expect(atsSpan.text()).toBe('Añadido por ATS');

    const dateSpan = wrapper.find('.created-at-text');
    expect(dateSpan.text()).toBe(formatDate(mockCandidateData.createdAt as string));
  });

  test('applies correct background color based on vacancyIndex', () => {
    const wrapperEven = mount(CandidateCard, {
      props: {
        candidate: new Candidate(mockCandidateData),
        vacancyIndex: 0,
      },
    });

    const wrapperOdd = mount(CandidateCard, {
      props: {
        candidate: new Candidate(mockCandidateData),
        vacancyIndex: 1,
      },
    });

    expect(wrapperEven.classes()).toContain('bg-secondary-white');

    expect(wrapperOdd.classes()).toContain('bg-white');
  });

  test('renders CandidateOptionsTab component', () => {
    const wrapper = mount(CandidateCard, {
      props: {
        candidate: new Candidate(mockCandidateData),
        vacancyIndex: 0,
      },
    });

    const optionsTab = wrapper.findComponent(CandidateOptionsTab);
    expect(optionsTab.exists()).toBe(true);
    expect(optionsTab.props('candidate')).toEqual(mockCandidateData);
  });

  test('renders clock icon and formatted date', () => {
    const wrapper = mount(CandidateCard, {
      props: {
        candidate: new Candidate(mockCandidateData),
        vacancyIndex: 0,
      },
    });

    const clockIcon = wrapper.find('img');

    expect(clockIcon.exists()).toBeTruthy();

    const dateSpan = wrapper.find('span.text-primary-grey');
    expect(dateSpan.text()).toBe(formatDate(mockCandidateData.createdAt as string));
  });
});

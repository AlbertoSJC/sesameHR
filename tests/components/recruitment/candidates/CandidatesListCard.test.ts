import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CandidatesListCard from '@components/recruitment/candidates/CandidatesListCard.vue';
import CandidateInformationCard from '@components/recruitment/candidates/CandidateInformationCard.vue';
import { Candidate } from '@domain/Candidate';

describe('CandidatesListCard.vue', () => {
  const mockCandidate = new Candidate({
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123456789',
    linkedInURL: 'https://linkedin.com/in/johndoe',
    createdAt: '2025-03-01',
    updatedAt: '2025-03-15',
    vacancyId: 'vacancy-123',
    statusId: 'status-456',
  });

  test('renders candidate information correctly', () => {
    const wrapper = mount(CandidatesListCard, {
      props: {
        candidate: mockCandidate,
        index: 0,
      },
    });

    const nameSpan = wrapper.find('.text-secondary-blue.font-bold');
    expect(nameSpan.text()).toBe('John Doe');
    expect(nameSpan.attributes('title')).toBe('John Doe');
  });

  test('applies correct background color based on index', () => {
    const wrapperEven = mount(CandidatesListCard, {
      props: {
        candidate: mockCandidate,
        index: 0,
      },
    });

    const wrapperOdd = mount(CandidatesListCard, {
      props: {
        candidate: mockCandidate,
        index: 1,
      },
    });

    expect(wrapperEven.classes()).toContain('bg-white');
    expect(wrapperOdd.classes()).toContain('bg-secondary-white');
  });

  test('renders CandidateInformationCard component', () => {
    const wrapper = mount(CandidatesListCard, {
      props: {
        candidate: mockCandidate,
        index: 0,
      },
    });

    const informationCard = wrapper.findComponent(CandidateInformationCard);
    expect(informationCard.exists()).toBe(true);
    expect(informationCard.props('candidate')).toEqual(mockCandidate);
  });

  test('does not render CandidateInformationCard when candidate is null', () => {
    const wrapper = mount(CandidatesListCard, {
      props: {
        candidate: null,
        index: 0,
      },
    });

    const informationCard = wrapper.findComponent(CandidateInformationCard);
    expect(informationCard.exists()).toBe(false);
  });
});

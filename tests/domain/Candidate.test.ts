import { Candidate } from '@domain/Candidate';
import { mockCandidateData, mockPartialCandidateData } from '@tests/mocks/candidateMocks';
import { describe, expect, test } from 'vitest';

describe('Candidate', () => {
  test('should create a Candidate instance with all properties', () => {
    const candidate = new Candidate(mockCandidateData);

    expect(candidate.firstName).toBe(mockCandidateData.firstName);
    expect(candidate.lastName).toBe(mockCandidateData.lastName);
    expect(candidate.email).toBe(mockCandidateData.email);
    expect(candidate.phone).toBe(mockCandidateData.phone);
    expect(candidate.linkedinURL).toBe(mockCandidateData.linkedinURL);
    expect(candidate.desiredSalary).toBe(mockCandidateData.desiredSalary);
    expect(candidate.startWorkDate).toBe(mockCandidateData.startWorkDate);
    expect(candidate.web).toBe(mockCandidateData.web);
    expect(candidate.location).toBe(mockCandidateData.location);
    expect(candidate.vacancyId).toBe(mockCandidateData.vacancyId);
    expect(candidate.statusId).toBe(mockCandidateData.statusId);
  });

  test('should handle optional properties being undefined', () => {
    const candidate = new Candidate(mockPartialCandidateData);

    expect(candidate.firstName).toBe(mockPartialCandidateData.firstName);
    expect(candidate.lastName).toBe(mockPartialCandidateData.lastName);
    expect(candidate.email).toBe(mockPartialCandidateData.email);
    expect(candidate.phone).toBeUndefined();
    expect(candidate.linkedinURL).toBeUndefined();
    expect(candidate.desiredSalary).toBeUndefined();
    expect(candidate.startWorkDate).toBeUndefined();
    expect(candidate.web).toBeUndefined();
    expect(candidate.location).toBeUndefined();
    expect(candidate.vacancyId).toBe(mockPartialCandidateData.vacancyId);
    expect(candidate.statusId).toBe(mockPartialCandidateData.statusId);
  });
});

import { Candidate, type CandidateInformation } from './Candidate';

export class AllCandidates {
  candidates: Candidate[];

  constructor(data?: CandidateInformation[]) {
    this.candidates = data ? data.map((candidate) => new Candidate(candidate)) : [];
  }

  findCandidateById(id: string): Candidate | void {
    return this.candidates.find((candidate) => candidate.id === id);
  }

  findCandidateIndex(candidate: Candidate): number {
    return this.candidates.findIndex((indexCandidate) => indexCandidate.id === candidate.id) ?? -1;
  }

  addCandidate(candidate: Candidate) {
    this.candidates.push(candidate);
  }

  editCandidate(candidate: Candidate) {
    if (this.findCandidateIndex(candidate) !== -1) {
      this.candidates[this.findCandidateIndex(candidate)] = candidate;
    }
  }
}

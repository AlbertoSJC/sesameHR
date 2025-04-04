export interface CandidateInformation {
  firstName: string;
  lastName: string;
  vacancyId: string;
  statusId: string;
  email: string;
  phone?: string;
  linkedinURL?: string;
  desiredSalary?: string;
  startWorkDate?: string;
  web?: string;
  location?: string;
}

export class Candidate implements CandidateInformation {
  firstName: string;
  lastName: string;
  vacancyId: string;
  statusId: string;
  email: string;
  phone?: string;
  linkedinURL?: string;
  desiredSalary?: string;
  startWorkDate?: string;
  web?: string;
  location?: string;

  constructor(data: CandidateInformation) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.phone = data.phone;
    this.linkedinURL = data.linkedinURL;
    this.desiredSalary = data.desiredSalary;
    this.startWorkDate = data.startWorkDate;
    this.web = data.web;
    this.location = data.location;
    this.vacancyId = data.vacancyId;
    this.statusId = data.statusId;
  }
}

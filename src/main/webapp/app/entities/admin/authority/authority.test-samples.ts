import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '10eac477-ba9b-4b18-9a75-1da1bdb52014',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e4a9f794-770a-4e43-81d5-c740622a035f',
};

export const sampleWithFullData: IAuthority = {
  name: '3f9a0e05-69df-4c7a-9fc5-d2bfd28c131e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

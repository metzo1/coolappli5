import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 15253,
  login: '49iQY1',
};

export const sampleWithPartialData: IUser = {
  id: 2570,
  login: 'EtcN',
};

export const sampleWithFullData: IUser = {
  id: 18485,
  login: 'MN@NG\\CNp\\Vi\\mW2ga\\#XTv',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

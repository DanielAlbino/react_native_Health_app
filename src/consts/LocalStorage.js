import {AsyncStorage} from '@react-native-async-storage/async-storage';
export const reset = async () => {
  await AsyncStorage.setItem('HydrateProgress', 0);
  /*   AsyncStorage.setItem('HydrateProgress_Date', []);
  AsyncStorage.setItem('StepCounter', 0);
  AsyncStorage.setItem('StepCounter_Date', []);
  AsyncStorage.setItem('Diabetes', 0);
  AsyncStorage.setItem('Diabetes_Date', []); */
};

/* HYDRATE */
export const setHydrateProgress = async progress => {
  await AsyncStorage.setItem('HydrateProgress', progress);
};

export const getHydrateProgress = async _ => {
  return await AsyncStorage.getItem('HydrateProgress');
};

export const getHydrateProgressBy = async () => {
  await AsyncStorage.getItem('HydrateProgress');
};

export const setHydrateProgressBy = async progress => {
  await AsyncStorage.setItem('HydrateProgress_Date', progress);
};

/* STEP COUNTER */

export const setStepCounter = async steps => {
  await AsyncStorage.setItem('StepCounter', steps);
};

export const getStepCounter = async _ => {
  return await AsyncStorage.getItem('StepCounter');
};

export const setStepCounterBy = async (time, steps) => {
  await AsyncStorage.setItem('StepCounter_Date', steps);
};

export const getStepCounterBy = async () => {
  return await AsyncStorage.getItem('StepCounter_Date');
};

/* DIABETES */

export const setDiabetesValue = async diabetesValue => {
  await AsyncStorage.setItem('Diabetes', diabetesValue);
};

export const getDiabetesValue = async _ => {
  return await AsyncStorage.getItem('Diabetes');
};

export const setDiabetesValueBy = async steps => {
  await AsyncStorage.setItem('Diabetes_Date', steps);
};

export const getDiabetesValueBy = async () => {
  return await AsyncStorage.getItem('Diabetes_Date');
};

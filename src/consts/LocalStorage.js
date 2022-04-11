const localStorage = window.localStorage();

export const setHydrateProgress = progress => {
  localStorage.setItem('HydrateProgress', progress);
};

export const getHydrateProgress = _ => {
  return localStorage.getItem('HydrateProgress');
};

export const setStepCounter = steps => {
  localStorage.setItem('StepCounter', steps);
};

export const getStepCounter = _ => {
  return localStorage.getItem('StepCounter');
};

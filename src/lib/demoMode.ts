export const shouldUseDemoMode = (): boolean => {
  return false;
};

export const removeDemoKey = (): void => {
  // Remove demo key from localStorage
  localStorage.removeItem('demoKey');
}; 
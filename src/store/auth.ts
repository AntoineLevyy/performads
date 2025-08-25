interface User {
  id: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  logout: () => void;
}

// Simple auth store without external dependencies
export const useAuthStore = (): AuthStore => {
  return {
    user: null,
    logout: () => {
      // Simple logout implementation
      console.log('User logged out');
    },
  };
}; 
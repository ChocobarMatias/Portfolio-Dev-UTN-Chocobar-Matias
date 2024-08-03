import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      userRole: null,
      setToken: (token) => set({ token }),
      setUserRole: (Rol) => set({ userRole: Rol }),
      clearAuth: () => set({ token: null, userRole: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;


'use client';
import { createContext, useContext } from 'react';

export const UserContext = createContext<{ name: string } | null>(null);

export function useUser(): { name: string } | null {
  return useContext(UserContext);
}

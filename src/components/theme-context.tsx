'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeChangeEvent = 'themechange';

const getPreferredTheme = (): Theme => {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const getServerTheme = (): Theme => 'light';

const setStoredTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
  window.dispatchEvent(new Event(themeChangeEvent));
};

const subscribeToThemeChanges = (callback: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener('storage', callback);
  mediaQuery.addEventListener('change', callback);

  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener('storage', callback);
    mediaQuery.removeEventListener('change', callback);
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getPreferredTheme, getServerTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setStoredTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

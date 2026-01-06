'use client';                //this will render on browser ,not on server 

import React, { createContext, useContext, useEffect, useState } from 'react';    //importing these from react library

type Theme = 'light' | 'dark';   //making a type that stores light and dark 

interface ThemeContextType {          //declare a interface for typesafety
  theme: Theme;                        //theme → current theme  
  toggleTheme: () => void;             //toggleTheme → function to switch theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);       //A global storage box for your app

export function ThemeProvider({ children }: { children: React.ReactNode }) {              //Wraps your entire app //Provides theme data to all children


  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
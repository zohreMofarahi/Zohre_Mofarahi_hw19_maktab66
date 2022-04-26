import React,{createContext} from 'react'

export const themes = {
    light: {
     bg: '#ffffff',
     fg: '#111517',
     bgelememt: '#ffffff'
    },
    dark: {
        bg: '#202c37',
        fg: '#ffffff',
        bgelememt: '#2b3945'
       },
  };
  
  export const ThemeContext = React.createContext();
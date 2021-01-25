import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getTheme from './base'

type Props = {
    children: React.ReactNode
}

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(
  {
    currentTheme: 'light',
    setTheme: (str:string) => console.log("setTheme function is null"),
  },
)

const CustomThemeProvider = (props:Props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props

  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem('appTheme') || 'light'

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme)

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName)
  // console.log(theme)

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name:string) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
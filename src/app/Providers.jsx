'use client'

import { ThemeProvider } from "next-theme";

export default function Providers( { children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-grey-700 dark:text-grey-200 dark:bg-grey-700 min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}

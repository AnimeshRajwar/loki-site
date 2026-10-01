'use client'

import { useEffect } from 'react'

export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    try {
      localStorage.setItem('theme', 'dark')
    } catch {
      // ignore
    }
  }, [])

  return { isDark: true, toggleTheme: () => {}, mounted: true }
}
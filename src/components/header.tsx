'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, LightMode, DarkMode } from '@/components/ui/icons'
import { useTheme } from '@/hooks/use-theme'

export function Header() {
  const [searchFocus, setSearchFocus] = useState(false)
  const { isDark, toggleTheme, mounted } = useTheme()

  // Show a placeholder during SSR/hydration to avoid mismatch
  if (!mounted) {
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-10">
              <img src="/Vector.png" alt="loki logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em]">loki</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#documentation">Documentation</a>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#downloads">Downloads</a>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#community">Community</a>
          </nav>
        </div>

        <div className="flex flex-1 justify-end gap-3 sm:gap-6 items-center">
          <label className={`hidden sm:flex flex-col min-w-40 h-10! max-w-64 rounded transition-all`}>
            <div className="flex w-full flex-1 items-stretch rounded h-full">
              <div className="text-muted-foreground flex border-none bg-secondary items-center justify-center pl-4 rounded-l border-r-0">
                <Search className="size-5" />
              </div>
              <Input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-foreground focus:outline-0 focus:ring-0 border-none bg-secondary focus:border-none h-full placeholder:text-muted-foreground px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                placeholder="Search documentation..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
            </div>
          </label>

          <div className="w-10 h-10"></div>

          <Button className="min-w-21 max-w-120 h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            Sign In
          </Button>
        </div>
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-10 py-3 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-10">
            <img src="/Vector.png" alt="loki logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em]">loki</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-9">
          <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#documentation">Documentation</a>
          <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#downloads">Downloads</a>
          <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#community">Community</a>
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-3 sm:gap-6 items-center">
        <label className={`hidden sm:flex flex-col min-w-40 h-10! max-w-64 rounded transition-all search-focus ${searchFocus ? 'shadow-lg' : ''}`}>
          <div className="flex w-full flex-1 items-stretch rounded h-full">
            <div className="text-muted-foreground flex border-none bg-input! items-center justify-center pl-4 rounded-l border-r-0">
              <Search className="size-5" />
            </div>
            <Input 
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-foreground focus:outline-0 focus:ring-0 border-none bg-input! focus:border-none h-full placeholder:text-muted-foreground px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
              placeholder="Search documentation..."
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
          </div>
        </label>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-muted-foreground hover:bg-secondary transition-colors"
          title="Toggle theme"
        >
          {isDark ? <LightMode className="size-5" /> : <DarkMode className="size-5" />}
        </Button>

        <Button className="min-w-21 max-w-120 h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          Sign In
        </Button>
      </div>
    </header>
  )
}
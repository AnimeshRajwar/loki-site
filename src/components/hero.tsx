import { Button } from '@/components/ui/button'
import { Download } from '@/components/ui/icons'

export function Hero() {
  return (
    <div className="mx-auto max-w-300 px-6 py-12 @container">
      <div className="flex flex-col gap-10 @[864px]:flex-row @[864px]:items-center mb-20">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-foreground text-5xl font-black leading-tight tracking-[-0.033em] @[1200px]:text-6xl">
              Control Your <br /><span className="text-primary">Workflow</span> with Ease
            </h1>
            <p className="text-foreground/80 text-lg font-normal leading-relaxed max-w-125">
              Loki is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="min-w-40 h-12 px-6 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <Download className="size-5 mr-2" />
              Download for Windows
            </Button>
            
            <Button variant="secondary" className="min-w-40 h-12 px-6 bg-secondary text-secondary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/80 transition-colors">
              Mac / Linux
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-card rounded-xl p-4 shadow-2xl border border-border font-mono text-sm leading-6">
            <div className="flex gap-2 mb-4 border-b border-border pb-2">
              <div className="size-3 rounded-full bg-[#ff5f56]"></div>
              <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="size-3 rounded-full bg-[#27c93f]"></div>
            </div>
            
            <div className="text-card-foreground">
              <p className="flex gap-2">
                <span className="text-primary">$</span> loki status
              </p>
              <p className="text-muted-foreground">On branch main</p>
              <p className="text-muted-foreground">Your branch is up to date with 'origin/main'.</p>
              <p className="mt-2">Changes not staged for commit:</p>
              <p className="text-destructive ml-4">modified:   src/main.rs</p>
              <p className="text-destructive ml-4">modified:   ui/components.html</p>
              <p className="mt-2 text-success">Untracked files:</p>
              <p className="text-success ml-4">tests/new_feature.test.js</p>
              <p className="mt-4 flex gap-2">
                <span className="text-primary">$</span> 
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
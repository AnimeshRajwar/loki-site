"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { NewReleases } from '@/components/ui/icons'


export function NewsAndBook() {
  const [commits, setCommits] = useState<Array<{ date: string; title: string; description: string }>>([])
  // TODO: Change owner/repo to your actual repo if needed
  const owner = 'AnimeshRajwar'
  const repo = 'loki'

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`)
        const data = await res.json()
        if (Array.isArray(data)) {
          setCommits(
            data.map((commit: any) => ({
              date: new Date(commit.commit.author.date).toLocaleDateString(undefined, {
                year: 'numeric', month: 'short', day: 'numeric'
              }),
              title: commit.commit.message.split('\n')[0],
              description: commit.commit.message.split('\n').slice(1).join(' ').slice(0, 120)
            }))
          )
        }
      } catch (e) {
        // fallback or error handling
      }
    }
    fetchCommits()
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
          <NewReleases className="text-primary size-6" />
          Recent Commits
        </h2>
        <div className="flex flex-col gap-6">
          {commits.length === 0 ? (
            <p className="text-muted-foreground">Loading recent commits...</p>
          ) : (
            commits.map((item, index) => (
              <div key={index}>
                <div className="group cursor-pointer">
                  <p className="text-sm text-primary font-bold mb-1">{item.date}</p>
                  <h4 className="text-xl font-bold group-hover:underline underline-offset-4 decoration-primary text-foreground">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  )}
                </div>
                {index < commits.length - 1 && (
                  <hr className="border-border mt-6" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-foreground text-xl font-bold mb-4">Build with us</h2>
        <div 
          className="w-full aspect-3/4 bg-cover bg-center rounded shadow-lg mb-4"
          style={{
            backgroundImage: `url("/poster.png")`
          }}
        />
        <p className="text-sm text-muted-foreground mb-4">
          Loki is open source — you can contribute, collaborate, and build with us!
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full py-2 border-2 border-primary dark:border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:border-primary transition-all"
        >
          <a
            href="https://github.com/AnimeshRajwar/loki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </a>
        </Button>
      </div>
    </div>
  )
}
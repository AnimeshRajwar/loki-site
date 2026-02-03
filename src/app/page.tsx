import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { NewsAndBook } from '@/components/news-and-book'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex-1">
          <Hero />
          <div className="mx-auto max-w-300 px-6 pb-12">
            <NewsAndBook />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
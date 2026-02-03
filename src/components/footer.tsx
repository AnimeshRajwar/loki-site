export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-10 mt-auto">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <div className="size-10">
              <img src="/Vector.png" alt="loki logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl font-bold text-foreground">loki</h2>
          </div>
        </div>

      </div>
    </footer>
  )
}
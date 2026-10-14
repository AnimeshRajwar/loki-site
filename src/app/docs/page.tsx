import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const implementedCommands = [
	{
		name: 'init',
		usage: 'loki init',
		description: 'Initialize a new Loki repository in the current working directory.',
	},
	{
		name: 'add',
		usage: 'loki add <files...>',
		description: 'Stage one or more files so they are ready to be committed.',
	},
	{
		name: 'commit',
		usage: 'loki commit -m "message"',
		description: 'Create a commit from the current staged snapshot and attach author metadata.',
	},
	{
		name: 'status',
		usage: 'loki status',
		description: 'Display tracked, staged, modified, deleted, and untracked files for the repo.',
	},
	{
		name: 'diff',
		usage: 'loki diff [--staged]',
		description: 'Show changes between the working tree and index, or between the index and HEAD.',
	},
	{
		name: 'log',
		usage: 'loki log',
		description: 'Show the commit history stored in the repository.',
	},
	{
		name: 'checkout',
		usage: 'loki checkout <target>',
		description: 'Switch to a branch, tag, or commit reference.',
	},
	{
		name: 'branch',
		usage: 'loki branch [name]',
		description: 'Create or list branches in the repository.',
	},
	{
		name: 'merge',
		usage: 'loki merge <branch>',
		description: 'Merge another branch into the current branch, including fast-forward and 3-way merge flows.',
	},
	{
		name: 'reset',
		usage: 'loki reset [target]',
		description: 'Reset HEAD, index, or working tree to a target commit or branch state.',
	},
	{
		name: 'rm',
		usage: 'loki rm <files...>',
		description: 'Remove files from the index and working tree.',
	},
	{
		name: 'revert',
		usage: 'loki revert <commit>',
		description: 'Create a new commit that reverses the selected earlier commit.',
	},
	{
		name: 'tag',
		usage: 'loki tag [options]',
		description: 'Create, list, delete, or annotate tags for release points.',
	},
	{
		name: 'config',
		usage: 'loki config [key] [value]',
		description: 'Read or write repository configuration values.',
	},
	{
		name: 'help',
		usage: 'loki help',
		description: 'Print usage information for the CLI and its implemented commands.',
	},
]

export const metadata = {
	title: 'Loki Documentation',
	description: 'Install Loki on Linux, macOS, and Windows and browse the implemented command reference.',
}

export default function DocumentationPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
			<Header />

			<main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 lg:px-8">
				<section className="mb-8 rounded-2xl border border-border bg-card/60 p-6 shadow-lg shadow-primary/5">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Overview</p>
							<h2 className="mt-2 text-2xl font-bold">Download the Loki presentation</h2>
							<p className="mt-2 text-muted-foreground">
								Open the overview deck for a quick introduction to Loki and its CLI features.
							</p>
						</div>
						<a
							href="/overview.pptx"
							download
							className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
						>
							Download PPTX
						</a>
					</div>
				</section>

				<section className="mb-12 rounded-2xl border border-border bg-card/60 p-8 shadow-lg shadow-primary/5">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-3xl">
							<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Documentation</p>
							<h1 className="text-4xl font-black tracking-[-0.05em] text-foreground md:text-5xl">
								Install Loki and use the implemented command set
							</h1>
							<p className="mt-4 max-w-2xl text-lg text-muted-foreground">
								Loki is a lightweight Git-style version control system built in Go. This page covers
								installation on Linux, macOS, and Windows and lists the commands implemented in the CLI.
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<Link href="/">
								<Button variant="secondary">Back to home</Button>
							</Link>
						</div>
					</div>
				</section>

				<section id="installation" className="mt-14">
					<div className="mb-6">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Installation</p>
						<h2 className="mt-2 text-3xl font-bold">Loki installation process for all 3 OS</h2>
					</div>

					<div className="space-y-8">
						<article className="rounded-2xl border border-border bg-card p-6">
							<h3 className="text-2xl font-bold text-primary">Linux</h3>
							<p className="mt-3 text-muted-foreground">
								The recommended install is to download the matching release asset and run the project installer script for your channel.
							</p>
							<pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-sm text-foreground/90">
{`# User install (default: $HOME/.local/bin)
curl -fsSL https://raw.githubusercontent.com/AnimeshRajwar/loki/master/scripts/install.sh | bash -s stable

# System install (requires sudo)
curl -fsSL https://raw.githubusercontent.com/AnimeshRajwar/loki/master/scripts/install-system.sh | bash -s stable /usr/local/bin

loki --help`}
							</pre>
						</article>

						<article className="rounded-2xl border border-border bg-card p-6">
							<h3 className="text-2xl font-bold text-primary">macOS</h3>
							<p className="mt-3 text-muted-foreground">
								Use the same release installer flow as Linux. The scripts detect the platform automatically and download the correct macOS binary.
							</p>
							<pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-sm text-foreground/90">
{`# User install
curl -fsSL https://raw.githubusercontent.com/AnimeshRajwar/loki/master/scripts/install.sh | bash -s stable

# System install
curl -fsSL https://raw.githubusercontent.com/AnimeshRajwar/loki/master/scripts/install-system.sh | bash -s stable /usr/local/bin

loki --help`}
							</pre>
						</article>

						<article className="rounded-2xl border border-border bg-card p-6">
							<h3 className="text-2xl font-bold text-primary">Windows</h3>
							<p className="mt-3 text-muted-foreground">
								PowerShell installs the Windows release asset and adds the install folder to your user PATH automatically.
							</p>
							<pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-sm text-foreground/90">
{`powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest https://raw.githubusercontent.com/AnimeshRajwar/loki/master/scripts/install.ps1 -OutFile install-loki.ps1; .\install-loki.ps1 -Channel stable"

# or from PowerShell directly:
# .\install-loki.ps1 -Channel latest

loki --help`}
							</pre>
						</article>
					</div>
				</section>

				<section id="commands" className="mt-16">
					<div className="mb-6">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Command reference</p>
						<h2 className="mt-2 text-3xl font-bold">Loki commands currently implemented</h2>
					</div>

					<div className="grid gap-5 md:grid-cols-2">
						{implementedCommands.map((command) => (
							<article key={command.name} className="rounded-xl border border-border bg-card p-6">
								<div className="flex items-center justify-between gap-3">
									<h3 className="text-xl font-bold text-primary">{command.name}</h3>
									<span className="rounded-full border border-border bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
										implemented
									</span>
								</div>
								<p className="mt-3 text-sm font-mono text-foreground/85">{command.usage}</p>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">{command.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className="mt-16 rounded-2xl border border-border bg-card p-6">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Quick example</p>
					<h2 className="mt-2 text-3xl font-bold">Basic Loki workflow</h2>
					<pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-sm text-foreground/90">
{`./loki init
./loki add README.md main.go
./loki commit -m "Initial commit"
./loki status
./loki log`}
					</pre>
				</section>
			</main>

			<Footer />
		</div>
	)
}

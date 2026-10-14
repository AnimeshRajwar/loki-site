"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as pdfjs from 'pdfjs-dist'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

type PresentationViewerProps = {
	source: string
}

export function PresentationViewer({ source }: PresentationViewerProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [pdfDocument, setPdfDocument] = useState<pdfjs.PDFDocumentProxy | null>(null)
	const [pageNumber, setPageNumber] = useState(1)
	const [pageCount, setPageCount] = useState(0)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const canGoPrevious = pageNumber > 1
	const canGoNext = pageCount > 0 && pageNumber < pageCount

	const goPrevious = useCallback(() => {
		setPageNumber((currentPage) => Math.max(1, currentPage - 1))
	}, [])

	const goNext = useCallback(() => {
		setPageNumber((currentPage) => Math.min(pageCount || currentPage + 1, currentPage + 1))
	}, [pageCount])

	useEffect(() => {
		let isMounted = true
		const controller = new AbortController()

		setLoading(true)
		setError(null)
		setPageNumber(1)
		setPageCount(0)
		setPdfDocument(null)

		pdfjs.getDocument({ url: source, signal: controller.signal }).promise
			.then((document) => {
				if (!isMounted) {
					return
				}

				setPdfDocument(document)
				setPageCount(document.numPages)
			})
			.catch((loadError: unknown) => {
				if (isMounted) {
					setError(loadError instanceof Error ? loadError.message : 'Failed to load presentation.')
				}
			})
			.finally(() => {
				if (isMounted) {
					setLoading(false)
				}
			})

		return () => {
			isMounted = false
			controller.abort()
		}
	}, [source])

	useEffect(() => {
		if (!pdfDocument || !canvasRef.current) {
			return
		}

		let isActive = true
		const canvas = canvasRef.current

		const renderPage = async () => {
			const page = await pdfDocument.getPage(pageNumber)
			const baseViewport = page.getViewport({ scale: 1 })
			const containerWidth = canvas.parentElement?.clientWidth ?? baseViewport.width
			const scale = Math.min(1.5, containerWidth / baseViewport.width)
			const outputScale = window.devicePixelRatio || 1
			const viewport = page.getViewport({ scale: scale * outputScale })
			const context = canvas.getContext('2d')

			if (!context || !isActive) {
				return
			}

			canvas.width = Math.floor(viewport.width)
			canvas.height = Math.floor(viewport.height)
			canvas.style.width = `${Math.floor(viewport.width / outputScale)}px`
			canvas.style.height = `${Math.floor(viewport.height / outputScale)}px`
			context.clearRect(0, 0, canvas.width, canvas.height)

			await page.render({ canvasContext: context, viewport }).promise
		}

		void renderPage().catch((renderError: unknown) => {
			if (isActive) {
				setError(renderError instanceof Error ? renderError.message : 'Failed to render the current page.')
			}
		})

		return () => {
			isActive = false
		}
	}, [pageNumber, pdfDocument])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				goPrevious()
			}

			if (event.key === 'ArrowRight') {
				goNext()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [goNext, goPrevious])

	const statusLabel = useMemo(() => {
		if (loading) {
			return 'Loading presentation...'
		}

		if (error) {
			return error
		}

		return `Page ${pageNumber} of ${pageCount || 0}`
	}, [error, loading, pageCount, pageNumber])

	return (
		<div className="overflow-hidden rounded-2xl border border-border bg-card/60 p-4 shadow-lg shadow-primary/5">
			<div className="mb-4 flex items-center justify-between gap-3">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">Presentation</p>
					<p className="mt-1 text-sm text-muted-foreground">Use the arrows or keyboard keys to move between pages.</p>
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={goPrevious}
						disabled={!canGoPrevious || loading || Boolean(error)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
						aria-label="Previous page"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={goNext}
						disabled={!canGoNext || loading || Boolean(error)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
						aria-label="Next page"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>

			<div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
				<span>{statusLabel}</span>
				{!loading && !error ? <span>{pageCount > 0 ? `${Math.round((pageNumber / pageCount) * 100)}%` : '0%'}</span> : null}
			</div>

			<div className="overflow-x-auto rounded-xl border border-border bg-background p-3">
				<div className="flex justify-center">
					{error ? (
						<div className="flex min-h-112 w-full max-w-4xl items-center justify-center rounded-lg border border-dashed border-border px-6 py-16 text-center text-sm text-muted-foreground">
							{error}
						</div>
					) : (
						<canvas ref={canvasRef} className="max-w-full rounded-lg bg-white shadow-sm" />
					)}
				</div>
			</div>
		</div>
	)
}
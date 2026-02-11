import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	const isEven = count % 2 === 0

	return (
		<main className="grid min-h-screen place-items-center p-6 sm:p-10">
			<section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-10">
				<div className="flex flex-wrap items-center gap-3">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
						React Onboard
					</p>
					<span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
						Tailwind v4
					</span>
				</div>
				<h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
					Tailwind is live
				</h1>
				<p className="mt-3 max-w-xl text-slate-300">
					This screen is styled with utility classes and custom theme tokens from{' '}
					<code>src/index.css</code>.
				</p>

				<div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						<p className="text-xs uppercase tracking-wide text-slate-400">Framework</p>
						<p className="mt-1 font-semibold text-white">React 19</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						<p className="text-xs uppercase tracking-wide text-slate-400">Bundler</p>
						<p className="mt-1 font-semibold text-white">Vite 8</p>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						<p className="text-xs uppercase tracking-wide text-slate-400">Styling</p>
						<p className="mt-1 font-semibold text-white">Tailwind CSS 4</p>
					</div>
				</div>

				<div className="mt-8 flex flex-wrap items-center gap-4">
					<button
						type="button"
						onClick={() => setCount((value) => value + 1)}
						className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
					>
						Count is {count}
					</button>
					<span
						className={`rounded-lg px-3 py-2 text-sm font-medium ${isEven ? 'bg-emerald-500/15 text-emerald-200' : 'bg-amber-500/15 text-amber-200'}`}
					>
						{isEven ? 'Even count' : 'Odd count'}
					</span>
				</div>
				<p className="mt-4 text-sm text-slate-400">Edit `src/App.tsx` and save to test HMR.</p>
			</section>
		</main>
	)
}

export default App

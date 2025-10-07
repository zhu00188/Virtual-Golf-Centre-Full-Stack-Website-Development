import Link from 'next/link'
export default function ReadyToPlay() {
	return (
		<section className="full-bleed px-0 pt-8 pb-16">
			<div className="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col lg:flex-row items-center justify-center gap-6">
				<div className="w-full lg:w-auto lg:transform lg:-rotate-2 text-center text-2xl font-bold text-emerald-900 tracking-widest lg:mb-0">⛳ READY TO PLAY? ⛳</div>
				<div className="w-full lg:w-auto text-center font-semibold text-emerald-900 tracking-widest">Find your way to Celtic Virtual Golf</div>
				<div className="w-full lg:w-auto flex justify-center lg:justify-start">
					<Link href="/dashboard" className="rounded-md bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-emerald-600 hover:shadow-md">Book Now</Link>
				</div>
			</div>
		</section>
	)
}


import Link from 'next/link';

// Add your timeline dates here
const timelineDates = [
	'2021-01-10',
	'2021-03-30',
	'2021-08-12',
	'2022-07-20',
	'2023-08-07',
	'2024-12-20',
	'2025-07-03',
	'2026-01-09',
];

function getTimelineItems() {
	return timelineDates
		.filter((dateStr) => /^\d{4}-\d{2}-\d{2}$/.test(dateStr))
		.map((dateStr) => {
			const date = new Date(`${dateStr}T13:00:00.000Z`);
			return {
				date: dateStr,
				path: `/now/${dateStr}`,
				displayDate: date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
				}),
			};
		})
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export default function TimelineNavigation() {
	const items = getTimelineItems();

	if (items.length === 0) {
		return (
			<div className="flex items-center justify-center p-8 text-zinc-500">
				No timeline items found
			</div>
		);
	}

	return (
		<div className="mx-auto w-full py-12">
			{/* Desktop Timeline - Horizontal */}
			<div className="hidden md:block">
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 transform bg-zinc-500" />

					{/* Timeline items */}
					<div className="relative flex items-center justify-between">
						{items.map((item) => (
							<div
								key={item.date}
								className="relative flex flex-col items-center"
							>
								<Link href={item.path} className="group relative z-10">
									{/* Marker - stays fixed on the line */}
									<div className="h-4 w-4 rounded-full border-4 border-zinc-300 bg-international-orange-600 shadow-lg transition-transform duration-200 ease-out group-hover:scale-125" />

									{/* Date label - scales on hover */}
									<div className="absolute top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
										<div className="rounded-lg border bg-zinc-50 px-2 py-0.5 shadow-md transition-transform duration-200 ease-out group-hover:scale-110 dark:bg-zinc-900">
											<span className="font-medium text-[0.75rem] text-zinc-700 leading-[0.8rem] group-hover:text-international-orange-600 dark:text-zinc-50">
												{item.displayDate}
											</span>
										</div>
									</div>
								</Link>
							</div>
						))}
						<div key="latest" className="relative flex flex-col items-center">
							<Link href="/now" className="group relative z-10">
								{/* Marker */}
								<div className="h-4 w-4 rounded-full border-4 border-zinc-300 bg-international-orange-600 shadow-lg transition-transform duration-200 ease-out group-hover:scale-125" />

								{/* Date label */}
								<div className="absolute top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
									<div className="rounded-lg border border-international-orange-500 bg-zinc-50 px-3 py-1 shadow-md transition-transform duration-200 ease-out group-hover:scale-110 dark:bg-zinc-900">
										<span className="font-medium text-xs text-zinc-700 group-hover:text-international-orange-600 dark:text-zinc-50">
											Latest
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Timeline - Vertical */}
			<div className="md:hidden">
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute top-0 bottom-0 left-2 w-0.5 bg-zinc-300" />

					{/* Timeline items */}
					<div className="space-y-6">
						{items.map((item) => (
							<div key={item.date} className="relative flex items-center">
								<Link
									href={item.path}
									className="group relative z-10 flex items-center"
								>
									<div className="h-4 w-4 rounded-full border-4 border-zinc-50 bg-international-orange-600 shadow-lg" />

									<div className="ml-6">
										<div className="rounded-lg border bg-zinc-50 px-4 py-2 shadow-md transition-shadow duration-200 group-hover:shadow-lg">
											<span className="font-medium text-sm text-zinc-700 group-hover:text-international-orange-600">
												{item.displayDate}
											</span>
										</div>
									</div>
								</Link>
							</div>
						))}
						<div key="latest" className="relative flex items-center">
							<Link
								href="/now"
								className="group relative z-10 flex items-center"
							>
								<div className="h-4 w-4 rounded-full border-4 border-zinc-50 bg-international-orange-600 shadow-lg" />

								<div className="ml-6">
									<div className="rounded-lg border bg-zinc-50 px-4 py-2 shadow-md transition-shadow duration-200 group-hover:shadow-lg">
										<span className="font-medium text-sm text-zinc-700 group-hover:text-international-orange-600">
											Latest
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

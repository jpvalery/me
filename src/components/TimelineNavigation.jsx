import Link from 'next/link';

// Add your timeline dates here
const timelineDates = [
	'2021-01-10',
	'2021-03-30',
	'2021-08-12',
	'2022-07-20',
	'2023-08-07',
	'2024-12-20',
];

function getTimelineItems() {
	return timelineDates
		.filter((dateStr) => /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) // Validate YYYY-MM-DD format
		.map((dateStr) => {
			const date = new Date(`${dateStr}T13:00:00.000Z`);
			return {
				date: dateStr,
				path: `/now/${dateStr}`,
				displayDate: date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
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
						{items.map((item, index) => (
							<div
								key={item.date}
								className="relative flex flex-col items-center"
							>
								{/* Marker */}
								<Link href={item.path} className="group relative z-10">
									<div className="bg-international-orange-600 group-hover:bg-international-orange-600 h-4 w-4 rounded-full border-4 border-zinc-300 shadow-lg transition-all duration-200 group-hover:scale-110" />

									{/* Date label */}
									<div className="absolute top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
										<div className="rounded-lg border bg-zinc-50 px-2 py-0.5 shadow-md transition-shadow duration-200 group-hover:shadow-lg dark:bg-zinc-900">
											<span className="group-hover:text-international-orange-600 text-[0.75rem] leading-[0.8rem] font-medium text-zinc-700 dark:text-zinc-50">
												{item.displayDate}
											</span>
										</div>
									</div>
								</Link>
							</div>
						))}
						<div key="latest" className="relative flex flex-col items-center">
							{/* Marker */}
							<Link href="/now" className="group relative z-10">
								<div className="bg-international-orange-600 group-hover:bg-international-orange-600 h-4 w-4 rounded-full border-4 border-zinc-300 shadow-lg transition-all duration-200 group-hover:scale-110" />

								{/* Date label */}
								<div className="absolute top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
									<div className="border-international-orange-500 rounded-lg border bg-zinc-50 px-3 py-1 shadow-md transition-shadow duration-200 group-hover:shadow-lg dark:bg-zinc-900">
										<span className="group-hover:text-international-orange-600 text-xs font-medium text-zinc-700 dark:text-zinc-50">
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
						{items.map((item, index) => (
							<div key={item.date} className="relative flex items-center">
								{/* Marker */}
								<Link
									href={item.path}
									className="group relative z-10 flex items-center"
								>
									<div className="bg-international-orange-600 group-hover:bg-international-orange-600 h-4 w-4 rounded-full border-4 border-zinc-50 shadow-lg transition-all duration-200 group-hover:scale-110" />

									{/* Date label */}
									<div className="ml-6">
										<div className="rounded-lg border bg-zinc-50 px-4 py-2 shadow-md transition-shadow duration-200 group-hover:shadow-lg">
											<span className="group-hover:text-international-orange-600 text-sm font-medium text-zinc-700">
												{item.displayDate}
											</span>
										</div>
									</div>
								</Link>
							</div>
						))}
						<div key="latest" className="relative flex items-center">
							{/* Marker */}
							<Link
								href="/now"
								className="group relative z-10 flex items-center"
							>
								<div className="bg-international-orange-600 group-hover:bg-international-orange-600 h-4 w-4 rounded-full border-4 border-zinc-50 shadow-lg transition-all duration-200 group-hover:scale-110" />

								{/* Date label */}
								<div className="ml-6">
									<div className="rounded-lg border bg-zinc-50 px-4 py-2 shadow-md transition-shadow duration-200 group-hover:shadow-lg">
										<span className="group-hover:text-international-orange-600 text-sm font-medium text-zinc-700">
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

import DashboardShowsAndMovies from '@/components/dashboard/showsandmovies';
import DashboardUnsplash from '@/components/dashboard/unsplash';

export const metadata = {
	title: 'Dashboard',
	description:
		'Some personal metrics—mostly for the fun of connecting APIs',
};

export default function Dashboard() {
	return (
		<div className="grid grid-flow-row gap-8 pt-16">
			<DashboardUnsplash />
			<DashboardShowsAndMovies />
		</div>
	);
}

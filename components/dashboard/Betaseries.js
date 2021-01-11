import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';
import MetricCard from './Card';

export default function Betaseries() {
  const { data } = useSWR('/api/betaseries', fetcher);
  const episodes = format(data);
  const link = 'https://www.betaseries.com/membre/jpvalery';

  return (
      <MetricCard header="Betaseries - Episodes seen" link={link} metric={episodes} />
  );
}

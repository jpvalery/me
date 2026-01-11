import { Photos } from '@/components/Photos';

export function useMDXComponents(components) {
	return {
		...components,
		Photos,
	};
}

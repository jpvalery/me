import clsx from 'clsx';
import Image from 'next/image';
import avatar from '@/images/avatar.jpg';
import photoAerobatics from '@/images/photos/jp-valery-aerobatics.jpg';
import photoAerobatics2 from '@/images/photos/jp-valery-aerobatics-2.jpg';
import photoPizzaBaking from '@/images/photos/jp-valery-baking-pizza.jpg';
import photoCamera from '@/images/photos/jp-valery-camera.jpg';
import photoCockpit from '@/images/photos/jp-valery-cockpit.jpg';
import photoReactConf from '@/images/photos/jp-valery-event.jpg';
import photoGuitar from '@/images/photos/jp-valery-guitar.jpg';
import photoLemonMeringuePie from '@/images/photos/jp-valery-lemon-meringue-pie.jpg';
import photoMacarons from '@/images/photos/jp-valery-macarons.jpg';
import photoPilot1 from '@/images/photos/jp-valery-pilot-1.jpg';
import photoPilot2 from '@/images/photos/jp-valery-pilot-2.jpg';
import photoPilot3 from '@/images/photos/jp-valery-pilot-3.jpg';
import photoPilot4 from '@/images/photos/jp-valery-pilot-4.jpg';
import photoPilot5 from '@/images/photos/jp-valery-pilot-5.jpg';
import photoPizza from '@/images/photos/jp-valery-pizza-1.jpg';
import photoSelfie from '@/images/photos/jp-valery-selfie.jpg';

const imageSets = {
	home: [photoPilot1, photoCamera, photoPilot2, photoPizzaBaking, photoPilot3],
	date: [photoPilot4, avatar, photoPizzaBaking],
	cooking: [photoPizza, photoLemonMeringuePie, photoMacarons],
	aviation: [photoAerobatics2, photoCockpit, photoPilot5],
	aerobatics: [photoAerobatics, photoAerobatics2],
	hobbies: [photoPizza, photoGuitar, photoLemonMeringuePie],
	work: [photoCamera, photoReactConf, photoSelfie],
};

export function Photos({ set = 'home' }) {
	const images = imageSets[set] || imageSets.home;
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex flex-col items-center gap-5 py-4 sm:flex-row sm:justify-center sm:gap-8 sm:overflow-hidden">
				{images.map((image) => (
					<div
						key={image.src}
						className={clsx(
							'relative aspect-9/10 w-64 flex-none overflow-hidden rounded-sm bg-zinc-100 sm:w-72 dark:bg-zinc-900',
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

'use client';

import { Fragment, useState } from 'react';

import { SimpleLayout } from '@/components/SimpleLayout';

import { Spinner } from '@/components/Spinner';
import { Dialog, Transition } from '@headlessui/react';

import { useForm } from 'react-hook-form';

export default function Contact() {
	// Modal management
	let [isSuccessOpen, setIsSuccessOpen] = useState(false);
	let [isFailureOpen, setIsFailureOpen] = useState(false);

	function closeSuccessModal() {
		setIsSuccessOpen(false);
		reset({
			name: '',
			email: '',
			reason: '',
			message: '',
			checked: '',
			_type: '',
		});
	}

	function openSuccessModal() {
		setIsSuccessOpen(true);
	}

	function closeFailureModal() {
		setIsFailureOpen(false);
	}

	function openFailureModal() {
		setIsFailureOpen(true);
	}

	// react-hook-form
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		// Logging for debugging
		console.log(JSON.stringify(data));

		try {
			// Sending the data to the backend
			const backend = await fetch(`/api/send`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			// If fetch doesn't return a 200, we throw an error
			if (backend.status != 200) {
				throw new Error('Backend encountered an error');
			}

			// then we display the modal
			setIsSuccessOpen(true);
		} catch (error) {
			// then we display the modal
			setIsFailureOpen(true);
		}
	};

	return (
		<SimpleLayout title="Get in touch about photography">
			<div className="prose pb-12 text-gray-600 dark:text-gray-200">
				<p>
					I&apos;m available for editorial, commercial, and documentary
					projects.
				</p>
				<p>
					While I&apos;m currently favoring more in-depth editorial and
					documentary projects, I&apos;m happy to discuss other projects if they
					match my vision or move me.
				</p>
				<p>Please fill out the form below and let&apos;s get started. </p>
			</div>
			<div className="mx-auto h-min w-full overflow-hidden">
				<div className="mx-auto h-min overflow-hidden">
					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<dl>
							{/* form type */}
							<input
								name="_type"
								type="hidden"
								{...register('_type')}
								value="photography"
							/>

							{/* name */}
							<div className="grid grid-flow-row gap-3 p-4">
								<dt className="w-full font-medium text-gray-500 dark:text-gray-200">
									What&apos;s your name?
								</dt>
								<dd className="w-full text-gray-900">
									<div className="mt-1">
										<input
											type="text"
											placeholder="Your name"
											name="name"
											id="name"
											className="focus:border-form-500 focus:ring-form-500 sm: block w-full rounded border-gray-300 text-gray-900 shadow-sm"
											{...register('name', { required: true, maxLength: 80 })}
										/>
									</div>
								</dd>
							</div>

							{/* email */}
							<div className="grid grid-flow-row gap-3 p-4">
								<dt className="w-full font-medium text-gray-500 dark:text-gray-200">
									Where can I write back to you?
								</dt>
								<dd className="w-full text-gray-900">
									<input
										type="text"
										name="email"
										id="email"
										className="focus:border-form-500 focus:ring-form-500 sm: block w-full rounded border-gray-300 text-gray-900 shadow-sm"
										placeholder="you@example.com"
										aria-describedby="email-description"
										{...register('email', { required: true, maxLength: 80 })}
									/>
								</dd>
							</div>

							{/* topic */}
							<div className="grid grid-flow-row gap-3 p-4">
								<dt className="w-full font-medium text-gray-500 dark:text-gray-200">
									What can I help you with?
								</dt>
								<dd className="w-full text-gray-900">
									<select
										id="reason"
										name="reason"
										className="focus:border-form-500 focus:ring-form-500 sm: mt-1 block w-full rounded border-gray-300 py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none"
										{...register('reason', {
											required: true,
										})}
									>
										<option key="project" value="project-pitch" selected>
											You want to collaborate on a project
										</option>
										<option key="hire" value="hire-me">
											You&apos;d like to hire/commission me
										</option>
										<option key="general" value="general-chat">
											You&apos;d like to chat about photography in general
										</option>
										<option key="specific" value="specific-chat">
											You&apos;d like to chat about one of my series/projects
										</option>
										<option key="other" value="other">
											Something else
										</option>
									</select>
								</dd>
							</div>

							{/* message */}
							<div className="grid grid-flow-row gap-3 p-4">
								<dt className="w-full font-medium text-gray-500 dark:text-gray-200">
									Can you add more details?
								</dt>
								<dd className="w-full text-gray-900">
									<textarea
										type="text"
										name="message"
										id="message"
										rows="3"
										className="focus:border-form-500 focus:ring-form-500 block w-full rounded border-gray-300 text-gray-900 shadow-sm"
										aria-describedby="message"
										{...register('message', { required: true, maxLength: 280 })}
									/>
								</dd>
							</div>

							{/* proofread */}
							<div className="grid grid-flow-col items-center justify-start gap-3 p-4">
								<dt className="w-full font-medium text-gray-500 dark:text-gray-200">
									Have you proofread everything?
								</dt>
								<dd className="w-full text-gray-900">
									<input
										type="checkbox"
										id="checked"
										name="checked"
										{...register('checked', { required: true })}
										className="order-first h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
								</dd>
							</div>
						</dl>
						<div className="grid grid-flow-col items-center justify-start py-5">
							<button
								type="submit"
								className="sm: inline-flex w-full cursor-pointer justify-center rounded border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-green-500 hover:text-white focus:bg-green-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto"
							>
								{isSubmitting && <Spinner />}
								Send now
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Success Modal */}
			<Transition appear show={isSuccessOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeSuccessModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-2 dark:border-zinc-50 dark:bg-zinc-950">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
									>
										Your message has been sent!
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-gray-500 dark:text-gray-200">
											I&apos;ll be in touch soon
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded border border-transparent bg-zinc-100 px-4 py-2 font-medium text-blue-900 hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-internationalOrange-400 focus-visible:ring-offset-2 dark:focus-visible:ring-internationalOrange-500"
											onClick={closeSuccessModal}
										>
											Got it!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			{/* Failure Modal */}
			<Transition appear show={isFailureOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeFailureModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-2 dark:border-zinc-50 dark:bg-zinc-950">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
									>
										Oopsie {':('}
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-gray-500 dark:text-gray-200">
											Something went wrong. Please try again
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded border border-transparent bg-red-100 px-4 py-2 font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											onClick={closeFailureModal}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</SimpleLayout>
	);
}

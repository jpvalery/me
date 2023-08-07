import { NextResponse } from 'next/server';

export async function POST(request) {
	const req = await request.json();
	console.log(`Received a request`);
	console.log(req);

	const toEmail =
		req._type == 'photography'
			? process.env.EMAIL_CONTACT_PHOTO
			: process.env.EMAIL_CONTACT_GENERIC;

	const sendResponse = await fetch(`https://api.customer.io/v1/send/email`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.CIO_APP_APIKEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			transactional_message_id: 'form_jpvaleryme',
			to: `${toEmail}`,
			identifiers: {
				email: `${req.email}`,
			},
			message_data: req,
		}),
	});

	console.log(await sendResponse.json());

	return NextResponse.json({ result: 'Success' }, { status: 200 });
}

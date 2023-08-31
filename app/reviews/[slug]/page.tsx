import React from 'react';
import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import Image from 'next/image';

import { getReview, getSlugs } from '@/lib/reviews';
import ShareButtons from '@/components/ShareButtons';

interface ReviewPageProps {
	params: { slug: string };
}

// Generate static paths from the dynamic ones.
export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs.map((slug) => ({ slug }));

	// return [{ slug: 'hollow-knight' }, { slug: 'hellblade' }];
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
	const review = await getReview(slug);
	return {
		title: review.title,
	};
}

async function ReviewPage({ params: { slug } }: ReviewPageProps) {
	const review = await getReview(slug);
	return (
		<>
			<Heading>{review.title}</Heading>
			<div className="flex gap-3 items-baseline max-w-screen-sm justify-between">
				<p className="italic pb-2">{review.date}</p>
				<ShareButtons />
			</div>
			<Image
				src={review.image}
				alt={review.title}
				width="640"
				height="360"
				className=" mb-2 rounded"
			/>
			<article
				dangerouslySetInnerHTML={{ __html: review.body }}
				className="max-w-screen-sm prose prose-slate"
			/>
		</>
	);
}

export default ReviewPage;

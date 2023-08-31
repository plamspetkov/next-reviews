import React from 'react';
import Heading from '@/components/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedReview } from '@/lib/reviews';

async function HomePage() {
	const review = await getFeaturedReview();
	return (
		<>
			<Heading>Indie Gamer</Heading>
			<p className="pb-3">Only the best indie games, reviewed for you.</p>
			<div className="bg-white border w-80 hover:shadow-xl sm:w-full max-w-screen-sm">
				<Link
					href="reviews/hollow-knight"
					className="flex flex-col sm:flex-row"
				>
					<Image
						src={review.image}
						alt="Hollow Knight"
						width="320"
						height="180"
						className=" rounded-t sm:rounded-l sm:rounded-r-none max-w-screen-sm"
					/>
					<h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
						{review.title}
					</h2>
				</Link>
			</div>
		</>
	);
}

export default HomePage;

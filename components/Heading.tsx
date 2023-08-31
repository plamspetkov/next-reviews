import React, { ReactNode } from 'react';
// import { orbitron } from '@/app/fonts';
export interface HeadingProps {
	children: ReactNode;
}
function Heading({ children }: HeadingProps) {
	return (
		<h1 className={`font-bold font-orbitron pb-3 text-2xl `}>
			{/* <h1
			className={`font-bold  pb-3 text-2xl ${orbitron.className}`} adding the font as expression
		></h1> */}
			{children}
		</h1>
	);
}

export default Heading;

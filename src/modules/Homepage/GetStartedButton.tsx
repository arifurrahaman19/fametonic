"use client";
import Button from "@/components/ui/button";
import Image from "next/image";

const GetStartedButton = ({ className }: { className?: string | undefined }) => {
	return (
		<div className={className}>
			<Button className='min-w-[313px] flex items-center justify-center px-10 py-1.5 box-shadow-cyan font-figtree text-xl font-bold bg-[#FC004E] hover:bg-[#FC004E]/90 text-white rounded-[10px] uppercase'>
				Get Started <Image src='/arrow-right.svg' alt='Arrow Right' width={20} height={20} className='w-2 h-[13px] ml-2.5' />
			</Button>
			<p className='text-white text-center font-normal text-xs mt-2.5'>1-minute quiz for personalized Insights</p>
		</div>
	);
};

export default GetStartedButton;

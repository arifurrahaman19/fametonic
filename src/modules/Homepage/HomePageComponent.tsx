import Image from "next/image";
import GetStartedButton from "./GetStartedButton";

const Herosection = () => {
	return (
		<div className='container flex flex-col lg:flex-row'>
			<div className='grow basis-0 -mt-[208px] lg:mt-[22px] order-1 lg:order-0'>
				<h1 className='text-[25px] lg:text-8.75 text-center lg:text-left font-bold text-white font-urbanist leading-[normal]'>
					Want to Turn Social Media Into a Profitable Career?
				</h1>
				<h2 className='text-[25px] lg:text-8.75 text-center lg:text-left text-[#00E7F9] font-bold font-urbanist text-shadow-pink leading-[normal]'>
					Discover your way to success with Fametonic:
				</h2>
				<ul className='text-white text-base font-figtree font-semibold mt-[22px] lg:mt-4 space-y-2.5 leading-normal'>
					<li className='flex items-center gap-2.5'>
						<span>✨</span>
						<span>Start growing your influence right away—no waiting required!</span>
					</li>
					<li className='flex items-center gap-2.5'>
						<span>✨</span>
						<span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
					</li>
					<li className='flex items-center gap-2.5'>
						<span>✨</span>
						<span>Use a Personal AI Worker to boost your content</span>
					</li>
					<li className='flex items-center gap-2.5'>
						<span>✨</span>
						<span>Learn from expert-led courses designed for aspiring influencers</span>
					</li>
				</ul>
				<GetStartedButton className='hidden lg:flex flex-col justify-center items-center w-fit my-[28px]' />
				<p className='text-[#ABABAB] font-figtree text-center lg:text-left mt-[22px] lg:mt-0 text-xs font-medium leading-[normal]'>{`By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms`}</p>
				<p className='text-[#ABABAB] font-figtree text-center lg:text-left text-[10px] font-medium leading-[normal] mt-3'>Fametonic 2025 ©All Rights Reserved.</p>
				<GetStartedButton className='flex lg:hidden flex-col justify-center items-center w-fit my-[28px]' />
			</div>
			<div className='relative grow basis-0 order-0 lg:order-1'>
				<div className='w-full h-auto lg:w-[666px] lg:h-[679px] relative lg:absolute -top-[118px] lg:-top-[66px] lg:-right-[114px] -z-10 flex items-center justify-center overflow-hidden max-w-[unset]'>
					<Image src='/hero-section.png' priority alt='Featured Image' width={666} height={679} />
				</div>
			</div>
		</div>
	);
};

export default Herosection;

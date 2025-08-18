import Image from "next/image";

const Herosection = () => {
	return (
		<div className='mb-4'>
			<div className='container flex '>
				<div className='grow basis-0 mt-[22px]'>
					<h1 className='text-8.75 font-bold text-white font-urbanist leading-[normal]'>Want to Turn Social Media Into a Profitable Career?</h1>
					<h2 className='text-8.75 text-[#00E7F9] font-bold font-urbanist text-shadow-pink leading-[normal]'>Discover your way to success with Fametonic:</h2>
					<ul className='text-white text-base font-figtree font-semibold mt-4 space-y-3'>
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
					<div className='flex flex-col justify-center items-center w-fit my-[30px]'>
						<button className='min-w-[313px] flex items-center justify-center cursor-pointer mt-4 px-10 py-1.5 box-shadow-cyan font-figtree text-xl font-bold bg-[#FC004E] hover:bg-[#FC004E]/90 text-white rounded-[10px] uppercase'>
							Get Started <Image src='/arrow-right.svg' alt='Arrow Right' width={20} height={20} className='w-[13px] h-[8px] ml-2.5' />
						</button>
						<p className='text-white text-center font-normal text-xs mt-2.5'>1-minute quiz for personalized Insights</p>
					</div>
					<p className='text-[#ABABAB] font-figtree text-xs font-medium leading-normal'>{`By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms`}</p>
				</div>
				<div className='relative grow basis-0'>
					<div className='w-[666px] h-[679px] -top-[66px] flex items-center justify-center overflow-hidden absolute max-w-[unset]'>
						<Image src='/hero-section.png' alt='Featured Image' width={666} height={679} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Herosection;

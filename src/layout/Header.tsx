"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const menuItems = [
		{ label: "About us", href: "#" },
		{ label: "Contact", href: "#" },
	];
	return (
		<header>
			<div className='container py-9 hidden lg:flex'>
				<div className='text-2xl font-bold'>
					<Link href='/'>
						<Image src='/fametonic-logo.svg' alt='Fametonic Logo' width={173} height={74} />
					</Link>
				</div>
				<nav className='ml-auto'>
					<ul className='flex gap-11'>
						{menuItems.map((item) => (
							<li key={item.label}>
								<a href={item.href} className='text-[#A9A9A9] text-[18px] font-semibold font-figtree'>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='flex justify-end lg:hidden text-white container py-9 gap-[93px]'>
				<div className='text-2xl font-bold'>
					<Link href='/'>
						<Image src='/fametonic-logo.svg' alt='Fametonic Logo' width={173} height={74} />
					</Link>
				</div>
				<Drawer direction='right'>
					<DrawerTrigger className='relative'>
						<Image src='/hamburger-icon.svg' alt='Menu' width={24} height={24} className='cursor-pointer' />
					</DrawerTrigger>
					<DrawerContent className='w-[310px] flex bg-white'>
						<nav className='p-8'>
							<ul className='flex flex-col gap-4'>
								{menuItems.map((item) => (
									<li key={item.label}>
										<a href={item.href} className='text-[#A9A9A9] text-[18px] font-semibold font-figtree'>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	);
};

export default Header;

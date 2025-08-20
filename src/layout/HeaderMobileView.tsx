"use client";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

const HeaderMobileView = ({ menuItems }: { menuItems: { label: string; href: string }[] }) => {
	return (
		<div className='flex justify-end lg:hidden text-white container py-9 gap-[93px]'>
			<div className='text-2xl font-bold'>
				<Link href='/'>
					<Image src='/fametonic-logo.svg' alt='Fametonic Logo' width={173} height={74} className='w-[105px] lg:w-[173px]' />
				</Link>
			</div>
			<Drawer direction='right'>
				<DrawerTrigger className='relative'>
					<Image src='/hamburger-icon.svg' alt='Menu' loading='lazy' width={24} height={24} className='cursor-pointer' />
				</DrawerTrigger>
				<DrawerContent className='w-[310px] flex bg-white'>
					<div className='w-full'>
						<DrawerHeader className='py-6 px-8 border-b border-b-gray-100 mb-4'>
							<DrawerTitle className='text-left'>Menu</DrawerTitle>
						</DrawerHeader>
						<NavigationMenu menuItems={menuItems} />
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default HeaderMobileView;

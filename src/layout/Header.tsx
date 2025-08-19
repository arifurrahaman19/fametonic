import Image from "next/image";
import Link from "next/link";
import HeaderMobileView from "./HeaderMobileView";
import NavigationMenu from "./NavigationMenu";

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
				<NavigationMenu className='ml-auto' menuItems={menuItems} />
			</div>
			<HeaderMobileView menuItems={menuItems} />
		</header>
	);
};

export default Header;

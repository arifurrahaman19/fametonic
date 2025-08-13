import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const menuItems = [
		{ label: "About us", href: "#" },
		{ label: "Contact", href: "#" },
	];
	return (
		<header>
			<div className='container py-9 flex items-center'>
				<div className='text-2xl font-bold'>
					<Link href='/'>
						<Image src='/fametonic-logo.svg' alt='Fametonic Logo' width={173} height={74} />
					</Link>
				</div>
				<nav className='ml-auto'>
					<ul className='flex space-x-4'>
						{menuItems.map((item) => (
							<li key={item.label}>
								<a href={item.href} className='text-[#A9A9A9]'>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

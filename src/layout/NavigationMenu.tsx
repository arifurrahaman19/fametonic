const NavigationMenu = ({ menuItems, className }: { menuItems: { label: string; href: string }[]; className?: string | undefined }) => {
	return (
		<nav className={className}>
			<ul className='flex flex-col gap-4 px-8'>
				{menuItems.map((item) => (
					<li key={item.label}>
						<a href={item.href} className='text-[18px] font-semibold font-figtree'>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationMenu;

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import TopBanner from "@/layout/TopBanner";
import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
	variable: "--font-figtree",
	subsets: ["latin"],
});

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fametonic",
	description: "Turn social media into a profitable career with Fametonic.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${figtree.variable} ${urbanist.variable} antialiased`}>
				<TopBanner />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

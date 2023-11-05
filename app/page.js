"use client";
import { Header } from "./components/Header";
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { FaBeer } from "react-icons/fa";

export default function Home() {
	return (
		<div>
			<Header />
			<section className="bg-[#F8F9FA] pb-10 px-10">
				<div className="max-w-3xl mx-auto">
					<div className="flex items-center justify-between py-6">
						<h2 className="text-gray-700 text-lg">Start a new Document</h2>
						<IconButton
							color="gray"
							variant="text"
							className="rounded ml-5 md:ml-20 h-20 border-0"
						>
							<FaBeer size={"lg"} />
						</IconButton>
					</div>
					<div>
						<div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700  shadow-lg">
							<Image src={"https://links.papareact.com/pju"} layout="fill" />
						</div>
						<p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
							Blank
						</p>
					</div>
				</div>
			</section>
			<section className="bg-white px-10 md:px-0">
				<div className="max-w-3xl mx-auto py-8">
					<div className="flex items-center justify-between pb-5 text-gray-700">
						<h2 className="font-medium flex-grow">My Documents</h2>
						<p className="mr-12">Date Created</p>
						<FaBeer />
					</div>
				</div>
			</section>
		</div>
	);
}

"use client";

import { AuthContextProvider, UserAuth } from "./context/AuthContext";

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Login from "./components/Login";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	const { user } = UserAuth() || {};

	return (
		<html lang="en">
			<body className={inter.className}>
				<Head>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
				</Head>
				<AuthContextProvider>
					{!user ? (
						<Login />
					) : (
						<div>
							<Header />
							{children}
						</div>
					)}
				</AuthContextProvider>
			</body>
		</html>
	);
}

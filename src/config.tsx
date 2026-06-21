import { GithubIcon } from "@/components/icons/github";
import { EmailIcon } from "@/components/icons/email";
import type React from "react";

export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type Social = {
	platform: string;
	link: string;
	icon: React.ReactNode;
};

export type Category = {
	title: string;
	page: string | undefined;
	href: string;
};

export type Meta = {
	title: string;
	description: string;
	image: Image;
};

export type SiteConfig = {
	meta: Meta;
	name: string;
	headshot: string;
	title: string;
	description: string;
	socials: Array<Social>;
	categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
	meta: {
		title: "Hartface",
		description: "This is my portfolio.",
		image: {
			src: "/pfp.jpg",
			alt: "Hartface",
		},
	},
	name: "Hartface",
	headshot: "/pfp.jpg",
	title: "Add-on Developer & Aspiring Technical Artist",
	description: `I'm Hartface, an add-on developer and aspiring technical artist.
	I enjoy helping others and this is the home to my work and some things I write.`,
	socials: [
		{
			platform: "GitHub",
			link: "https://github.com/hartface",
			icon: <GithubIcon />,
		},
		{
			platform: "Email",
			link: "mailto:hartfacedev@gmail.com",
			icon: <EmailIcon />,
		}
	],
	categories: [
		{
			title: "All",
			page: undefined,
			href: "/posts",
		},
		{
			title: "Projects",
			page: "projects",
			href: "/posts/projects",
		},
		{
			title: "Add-ons",
			page: "add-ons",
			href: "/posts/add-ons",
		},
		{
			title: "Blog",
			page: "blog",
			href: "/posts/blog",
		},
		{
			title: "Other",
			page: "other",
			href: "/posts/other",
		}
	]
};

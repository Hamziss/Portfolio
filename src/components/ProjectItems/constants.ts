/* eslint-disable import/prefer-default-export */
import chat from "public/images/Projects/Chat.png"
import Laptop from "public/images/Projects/Laptop.png"
import bgdrawilio from "public/images/Projects/bgdrawilio.png"
import bgtimer from "public/images/Projects/bgtimer.png"
import bgtrinity from "public/images/Projects/bgtrinity.png"
import bmks from "public/images/Projects/bmks.gif"
import certif from "public/images/Projects/certif.png"
import dragon from "public/images/Projects/dragon.png"
import drawilio from "public/images/Projects/drawilio.png"
import folder from "public/images/Projects/folder.png"
import folder2 from "public/images/Projects/folder2.png"
import girafe from "public/images/Projects/girafe.png"
import KimerLite from "public/images/Projects/kimerLite.png"
import labs from "public/images/Projects/labs.png"
import link from "public/images/Projects/link.png"
import location from "public/images/Projects/location.png"
import medarus from "public/images/Projects/medarus.png"
import notesbook from "public/images/Projects/notesbook.png"
import panier from "public/images/Projects/panier.png"
import peinture from "public/images/Projects/peinture.png"
import pen from "public/images/Projects/pen.png"
import redbox from "public/images/Projects/redbox.png"
import spet from "public/images/Projects/spet.png"
import timerrImage from "public/images/Projects/timerr.png"
import tree from "public/images/Projects/tree.png"
import trinity from "public/images/Projects/trinity.png"
import { IprojectItem } from "./types"

export const Projects: IprojectItem[] = [
	{
		side: "normal",
		name: "Timerr",
		description:
			"timerr is a free web app that help you be productive and focus on any task you are working on, it can be anything , for example studying, writing, or coding. Timerr will give you rewards for your work and help you to get more productive.",
		techStack: [
			{
				name: "ReactJS",
				color: "#61dafb",
				docLink: "https://fr.reactjs.org/",
			},
			{
				name: "TypeScript",
				color: "#007acc",
				docLink: "https://www.typescriptlang.org/",
			},
			{
				name: "NextJS",
				color: "rgb(217 217 217)",
				docLink: "https://nextjs.org/",
			},
			{
				name: "MongoDB",
				color: "#4caf50",
				docLink: "https://fr.wikipedia.org/wiki/MongoDB",
			},
			{
				name: "Zustand",
				color: "#ffc107",
				docLink: "https://zustand-demo.pmnd.rs/",
			},
			{
				name: "Next-auth",
				color: "rgb(174 44 217)",
				docLink: "https://next-auth.js.org/",
			},
		],
		image: timerrImage,
		link: "https://timerr-dev.vercel.app/",
		linkRepo: "https://www.github.com/Hamziss/timerr",
		itemImages: [
			{
				url: tree,
				imageTitle: "tree",
			},
			{
				url: girafe,
				imageTitle: "girafe",
			},
			{
				url: dragon,
				imageTitle: "dragon",
			},
		],
		bg: bgtimer,
	},
	{
		side: "inverse",
		name: "Drawilio",
		description:
			"Drawilio is a draw and guess multiplayer game that you can play with your friends. it built with web sockets each room has a unique id, you can join or create rooms. You also can choose a skin to play with it, the points system is based on how fast you get the correct answers.",
		techStack: [
			{
				name: "Socket.io",
				color: "#007acc",
				docLink: "https://socket.io/",
			},
			{
				name: "NodeJS",
				color: "#4caf50",
				docLink: "https://nodejs.org/",
			},

			{
				name: "ExpressJS",
				color: "#7deb69",
				docLink: "https://expressjs.com/",
			},
			{
				name: "Redis",
				color: "#f44336",
				docLink: "https://redis.io/",
			},
			{
				name: "ReactJS",
				color: "#61dafb",
				docLink: "https://fr.reactjs.org/",
			},
		],
		image: drawilio,
		link: "https://drawilio.netlify.app",
		linkRepo: "https://www.github.com/Hamziss/drawilio",
		itemImages: [
			{
				url: pen,
				imageTitle: "pen",
			},
			{
				url: chat,
				imageTitle: "chat",
			},
			{
				url: peinture,
				imageTitle: "peinture",
			},
		],
		bg: bgdrawilio,
	},
	{
		side: "normal",
		name: "Dark Theme Trinity",
		description:
			"Dark Theme Trinity is a VSCode dark theme Extension with a nice and modern syntax colors for better logic understanding. each color is choosen wisely to make you focus on the right things.",
		techStack: [
			{
				name: "VSCode",
				color: "#61dafb",
				docLink: "https://code.visualstudio.com/",
			},
			{
				name: "JSON",
				color: "#f44336",
				docLink: "https://www.json.org/",
			},
			{
				name: "VSCE",
				color: "#4caf50",
				docLink: "https://marketplace.visualstudio.com/",
			},
		],
		image: trinity,
		link: "https://marketplace.visualstudio.com/items?itemName=HamzaChebbah.theme-dark-modern",
		linkRepo: "https://github.com/Hamziss/Theme-Dark-Modern",
		itemImages: [
			{
				url: Laptop,
				imageTitle: "laptop",
			},
		],
		bg: bgtrinity,
	},
	{
		side: "inverse",
		name: "Medarus",
		description:
			"Medarus is a french startup that helps medical students in their journey, it's a platform that contains a lot of courses and exams, and content targeted for medical students.",
		techStack: [
			{
				name: "ReactJS",
				color: "rgb(217 217 217)",
				docLink: "https://nextjs.org/",
			},
			{
				name: "Tailwind",
				color: "#38BDF8",
				docLink: "https://tailwindcss.com/",
			},
			{
				name: "Typescript",
				color: "#2438cc",
				docLink: "https://www.typescriptlang.org/",
			},
			{
				name: "NestJS",
				color: "#4caf50",
				docLink: "https://nestjs.com/",
			},
			{
				name: "PostgreSQL",
				color: "#1298cc",
				docLink: "https://www.postgresql.org/",
			},
			// {
			// 	name: "Cypress E2E",
			// 	color: "#1298cc",
			// 	docLink: "https://www.postgresql.org/",
			// },
		],
		image: medarus,
		link: "https://medarus.fr/",
		linkRepo: "",
		itemImages: [
			{
				url: spet,
				imageTitle: "laptop",
			},
			{
				url: certif,
				imageTitle: "chat",
			},
		],
		bg: bgtrinity,
	},
	{
		side: "normal",
		name: "MC Labs",
		description:
			"A web app that helps Micro club members manage workshops, memories, members, ressources and more.",
		techStack: [
			{
				name: "NextJS",
				color: "rgb(217 217 217)",
				docLink: "https://nextjs.org/",
			},
			{
				name: "tRPC",
				color: "#6cbbf7",
				docLink: "https://trpc.io/",
			},
			{
				name: "Prisma",
				color: "#f47429",
				docLink: "https://www.prisma.io/",
			},

			{
				name: "ExpressJS",
				color: "#7deb69",
				docLink: "https://expressjs.com/",
			},
			{
				name: "Radix UI",
				color: "#ffc107",
				docLink: "https://material-ui.com/",
			},
		],
		image: labs,
		link: "https://labs.microclub.tech/",
		linkRepo: "",
		bg: bgdrawilio,
		itemImages: [
			{
				url: folder,
				imageTitle: "folder",
			},
			{
				url: folder2,
				imageTitle: "folder2",
			},
		],
	},
	{
		side: "inverse",
		name: "Bmks",
		description:
			"A web app for managing your bookmarks, has a lot of features like accounts, tags, categories, search, and more.",
		techStack: [
			{
				name: "NextJS",
				color: "rgb(217 217 217)",
				docLink: "https://nextjs.org/",
			},
			{
				name: "tRPC",
				color: "#6cbbf7",
				docLink: "https://trpc.io/",
			},
			{
				name: "MySQL",
				color: "#f47429",
				docLink: "https://www.prisma.io/",
			},
		],
		image: bmks,
		link: "https://bmks.tech/",
		linkRepo: "",
		bg: bgtimer,
		itemImages: [
			{
				url: link,
				imageTitle: "linkbmks",
			},
			{
				url: location,
				imageTitle: "location",
			},
		],
	},

	{
		side: "normal",
		name: "Kimberlite",
		description:
			"Kimberlite is an e-commerce website for selling shoes, with full admin features for managing products and website, intuitive design and fast load. ",
		techStack: [
			{
				name: "ReactJS",
				color: "#61dafb",
				docLink: "https://fr.reactjs.org/",
			},
			{
				name: "Redux",
				color: "#764abc",
				docLink: "https://redux.js.org/",
			},
			{
				name: "MongoDB",
				color: "#4caf50",
				docLink: "https://fr.wikipedia.org/wiki/MongoDB",
			},
			{
				name: "ExpressJS",
				color: "#7deb69",
				docLink: "https://expressjs.com/",
			},

			{
				name: "MUI",
				color: "#ffc107",
				docLink: "https://material-ui.com/",
			},
		],
		image: KimerLite,
		link: "http://kimberlitedz.com/",
		linkRepo: "http://kimberlitedz.com/",
		itemImages: [
			{
				url: redbox,
				imageTitle: "redbox",
			},
			{
				url: panier,
				imageTitle: "panier",
			},
		],
	},
	{
		side: "inverse",
		name: "Notes Book",
		description:
			"Notes Book is a simple notes app that you can use to save your notes, it's built with NextJS ,tRPC, Typescript and tailwind, it's a fullstack app with RPC API.",
		techStack: [
			{
				name: "NextJS",
				color: "rgb(217 217 217)",
				docLink: "https://nextjs.org/",
			},
			{
				name: "tRPC",
				color: "#6cbbf7",
				docLink: "https://trpc.io/",
			},
			{
				name: "Prisma",
				color: "#f47429",
				docLink: "https://www.prisma.io/",
			},
			{
				name: "Tailwind",
				color: "#38BDF8",
				docLink: "https://tailwindcss.com/",
			},
			{
				name: "Typescript",
				color: "#2438cc",
				docLink: "https://www.typescriptlang.org/",
			},
		],
		image: notesbook,
		link: "https://notes-book.vercel.app/",
		linkRepo: "https://github.com/Hamziss/note-book",
	},
]

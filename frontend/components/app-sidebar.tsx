"use client";

import * as React from "react";
import { Command, Inbox } from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { Label } from "@/components/ui/label";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { IconGmail } from "@/public/gmail";
import { LogosWhatsappIcon } from "@/public/whatsapp";
import { OutlookIcon } from "@/public/outlook";
import { useRouter, useSearchParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

// This is sample data
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "https://img.wattpad.com/d3ef97f6d5010608fa0d710b37edbcfd0f1470d6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6c655a6a51305f66376e745a513d3d2d3837353734393234392e313630613632383064323739353436343134393432383433363337372e6a7067?s=fit&w=720&h=720",
	},
	navMain: [
		{
			title: "Inbox",
			url: "/inbox/unifiedinbox",
			icon: Inbox,
			isActive: true,
		},
	],
	mails: [
		{
			id: "1",
			typePlatform: "email",
			name: "William Smith",
			email: "williamsmith@example.com",
			subject: "Meeting Tomorrow",
			date: "09:34 AM",
			teaser: "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
			timestamp: "Yesterday",
			status: "offline",
			platform: "Gmail",
			newMessages: [],
		},
		{
			id: "2",
			typePlatform: "whatsapp",
			name: "Alice Smith",
			email: "alicesmith@example.com",
			subject: "Re: Project Update",
			date: "Yesterday",
			teaser: "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
			timestamp: "Yesterday",
			status: "offline",
			platform: "WhatsApp",
			newMessages: [],
		},
		{
			id: "3",
			typePlatform: "email",
			name: "Bob Johnson",
			email: "bobjohnson@example.com",
			subject: "Weekend Plans",
			date: "2 days ago",
			teaser: "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
			timestamp: "Yesterday",
			status: "offline",
			platform: "Gmail",
			newMessages: [],
		},
		{
			id: "4",
			typePlatform: "whatsapp",
			name: "Emily Davis",
			email: "emilydavis@example.com",
			subject: "",
			date: "2 days ago",
			teaser: "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			status: "offline",
			newMessages: [],
		},
		{
			id: "5",
			typePlatform: "whatsapp",
			name: "Michael Wilson",
			email: "michaelwilson@example.com",
			subject: "",
			date: "1 week ago",
			teaser: "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			status: "online",
			newMessages: [],
		},
		{
			id: "6",
			typePlatform: "whatsapp",
			name: "Sarah Brown",
			email: "sarahbrown@example.com",
			subject: "",
			date: "1 week ago",
			teaser: "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			newMessages: [],
		},
		{
			id: "7",
			typePlatform: "whatsapp",
			name: "David Lee",
			email: "davidlee@example.com",
			subject: "",
			date: "1 week ago",
			teaser: "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			newMessages: [],
		},
		{
			id: "8",
			typePlatform: "whatsapp",
			name: "Olivia Wilson",
			email: "oliviawilson@example.com",
			subject: "",
			date: "1 week ago",
			teaser: "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			status: "online",
			newMessages: [],
		},
		{
			id: "9",
			typePlatform: "whatsapp",
			name: "James Martin",
			email: "jamesmartin@example.com",
			subject: "Re: Conference Registration",
			date: "1 week ago",
			teaser: "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			newMessages: [],
		},
		{
			id: "10",
			typePlatform: "whatsapp",
			name: "Sophia White",
			email: "sophiawhite@example.com",
			subject: "Team Dinner",
			date: "1 week ago",
			teaser: "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
			timestamp: "Yesterday",
			platform: "WhatsApp",
			status: "online",
			newMessages: [
				{
					id: "1",
					content: "Hey there! How are you doing?",
					sender: "other",
					timestamp: new Date(Date.now() - 1000 * 60 * 5),
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	// Note: I'm using state to show active item.
	// IRL you should use the url/router.
	const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
	const [mails, setMails] = React.useState(data.mails);
	const [navMains, setNavMains] = React.useState(data.navMain);
	const [searchSidebar, setSearchSideBar] = React.useState("");
	const activeMessage = useSearchParams().get("id");

	const { setOpen } = useSidebar();
	const router = useRouter();

	React.useEffect(() => {
		const navsIntegrated = [
			{
				title: "Gmail",
				url: "/inbox/email",
				icon: IconGmail,
				isActive: false,
			},
			{
				title: "WhatsApp",
				url: "/inbox/whatsapp",
				icon: LogosWhatsappIcon,
				isActive: false,
			},
			{
				title: "Outlook",
				url: "/inbox/email",
				icon: OutlookIcon,
				isActive: false,
			},
		];
		setNavMains((nav) => [...nav, ...navsIntegrated]);
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchSideBar(e.target.value);
		const search = e.target.value.toLowerCase();
		setMails(data.mails.filter((mail) => mail.name.toLowerCase().includes(search) || mail.subject.toLowerCase().includes(search)));
	};

	return (
		<Sidebar collapsible="icon" className="overflow-hidden *:data-[sidebar=sidebar]:flex-row" {...props}>
			{/* This is the first sidebar */}
			{/* We disable collapsible and adjust width to icon. */}
			{/* This will make the sidebar appear as icons. */}
			<Sidebar collapsible="none" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
								<a href="#">
									<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
										<Command className="size-4" />
									</div>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">Acme Inc</span>
										<span className="truncate text-xs">Enterprise</span>
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent className="px-1.5 md:px-0">
							<SidebarMenu>
								{navMains.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											tooltip={{
												children: item.title,
												hidden: false,
											}}
											onClick={() => {
												setActiveItem(item);
												const mail = data.mails.sort(() => Math.random() - 0.5);
												if (item.title !== "Inbox") {
													setMails(mail.filter((mail) => mail.platform === item.title));
												} else {
													setMails(mail);
												}
												if (item.url && item.url !== "#") {
													router.push(item.url);
												}
												setOpen(true);
											}}
											isActive={activeItem?.title === item.title}
											className="px-2.5 md:px-2">
											<item.icon />
											<span>{item.title}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<NavUser user={data.user} />
				</SidebarFooter>
			</Sidebar>

			{/* This is the second sidebar */}
			{/* We disable collapsible and let it fill remaining space */}
			<Sidebar collapsible="none" className="hidden flex-1 md:flex">
				<SidebarHeader className="gap-3.5 border-b p-4">
					<div className="flex w-full items-center justify-between">
						<div className="text-foreground text-base font-medium">{activeItem?.title}</div>
						<Label className="flex items-center gap-2 text-sm">
							<span>Unreads</span>
							<Switch className="shadow-none" />
						</Label>
					</div>
					<SidebarInput placeholder="Type to search..." onChange={handleSearch} value={searchSidebar} />
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup className="px-0">
						<SidebarGroupContent>
							{mails.map((item) => (
								<Link
									href={`/inbox/${item.typePlatform.toLowerCase()}?id=${item.id}`}
									key={item.id}
									className={`flex flex-row items-start gap-2 whitespace-nowrap border-b p-4 py-4 text-sm leading-tight last:border-b-0 
  hover:bg-sidebar-accent hover:text-sidebar-accent-foreground 
  transition-colors duration-300
  ${activeMessage === item.id ? "bg-sidebar-accent-foreground/10" : ""}`}>
									<div
										className={`avatar ${
											item.status === "online" && item.typePlatform === "whatsapp"
												? "avatar-online before:outline-emerald-500 before:outline-1 "
												: ""
										}`}>
										<Avatar className="h-12 w-12 flex-shrink-0 rounded-4xl">
											<AvatarImage src={"https://github.com/shadcn.png"} alt={item.name} />
											<AvatarFallback>{item.name.substring(0, 2).toUpperCase()}</AvatarFallback>
										</Avatar>
									</div>

									<div className="flex flex-col min-w-0 flex-1 gap-1">
										<div className="flex flex-row items-center justify-between">
											<span className="font-semibold text-sm truncate ">{item.typePlatform === "email" ? item.subject : item.name}</span>
											<span className="text-xs text-muted-foreground shrink-0">{item.timestamp}</span>
										</div>
										<div className="flex flex-1 flex-row justify-between items-center">
											<span
												className={`text-xs ${
													item.newMessages.length > 0 ? "font-semibold" : "text-muted-foreground"
												} truncate text-sm  line-clamp-1 w-[140px] whitespace-break-spaces`}>
												{item.teaser}
											</span>
											<div>{item.newMessages.length > 0 && <div className="rounded-full bg-emerald-500 w-2 h-2 flex-1"></div>}</div>
										</div>
									</div>
								</Link>
							))}
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</Sidebar>
	);
}

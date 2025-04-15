"use client";

import EmailThreadAccordion from "@/components/inbox/emailDefault";
import UnifiedInbox from "@/components/inbox/UnifiedInbox";
import ChatInterfaceWhatsapp from "@/components/inbox/whatsapp-chat";
import { usePathname, useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";

export default function Page() {
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();
	const platform = pathname.split("/")[2];
	const id = useSearchParams().get("id");

	const returnPlatforms: { [key: string]: JSX.Element } = {
		whatsapp: <ChatInterfaceWhatsapp />,
		email: <EmailThreadAccordion />,
		unifiedinbox: <UnifiedInbox />,
	};

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Boa prática: limpar o timer
	}, [id]);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-full w-full text-muted-foreground text-sm">
				<span className="loading loading-spinner w-12 text-primary"></span>
			</div>
		);
	}

	return returnPlatforms[platform as keyof typeof returnPlatforms] || <div className="text-red-500 p-4">Plataforma inválida: {platform}</div>;
}

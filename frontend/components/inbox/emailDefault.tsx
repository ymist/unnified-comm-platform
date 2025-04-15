"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, List, ListOrdered, Underline as UnderlineIcon } from "lucide-react";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

// ============================== //
// Types
// ============================== //
type EmailMessage = {
	id: string;
	sender: {
		name: string;
		email: string;
		avatarUrl?: string;
	};
	contentPreview: string;
	fullContent: string;
	date: string;
};

// ============================== //
// Editor Component
// ============================== //
const Editor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
	const [editorUpdated, setEditorUpdated] = useState(0); // só para re-render
	const editor = useEditor({
		extensions: [StarterKit.configure({ heading: { levels: [1, 2, 3] } }), Underline, BulletList, ListItem, OrderedList],
		content: value,
		editorProps: {
			attributes: {
				class: "min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring prose prose-sm",
			},
		},

		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
			setEditorUpdated((prev) => prev + 1); // força update dos botões
		},
	});

	if (!editor) return null;

	console.log(editor);

	return (
		<div className="space-y-2">
			<ToggleGroup type="multiple" className="mb-2 border-b pb-2 sticky top-0 bg-background z-10">
				<ToggleGroupItem value="bold" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
					<Bold className="h-4 w-4" />
				</ToggleGroupItem>

				<ToggleGroupItem
					value="italic"
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={editor.isActive("italic") ? "is-active" : ""}>
					<Italic className="h-4 w-4" />
				</ToggleGroupItem>

				<ToggleGroupItem
					value="underline"
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					className={editor.isActive("underline") ? "is-active" : ""}>
					<UnderlineIcon className="h-4 w-4" />
				</ToggleGroupItem>

				<ToggleGroupItem
					value="bulletList"
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive("bulletList") ? "is-active" : ""}>
					<List className="h-4 w-4" />
				</ToggleGroupItem>

				<ToggleGroupItem
					value="orderedList"
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive("orderedList") ? "is-active" : ""}>
					<ListOrdered className="h-4 w-4" />
				</ToggleGroupItem>
			</ToggleGroup>

			<EditorContent editor={editor} />
		</div>
	);
};

// ============================== //
// Main Component
// ============================== //
export default function EmailThreadAccordion() {
	const [editorContent, setEditorContent] = useState("");

	const messages: EmailMessage[] = [
		{
			id: "1",
			sender: {
				name: "Lainey Davidson",
				email: "aditya.greenfelder31@gmail.com",
			},
			contentPreview: "Non rerum modi. Accusamus voluptatem...",
			fullContent:
				"Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.",
			date: "07 Abr 2025, 04:09",
		},
		{
			id: "2",
			sender: {
				name: "Bruno Coleraus",
				email: "brunorufattocoleraus@gmail.com",
			},
			contentPreview: "Olá bom dia Coordenador Albano...",
			fullContent:
				"Sou da turma de ADS 4 Semestre e meu estágio acabou, vou precisar que assine meu contrato de rescisão de estágio, quando você estará na Faculdade no campus de Salto?",
			date: "10 Set 2024, 08:00",
		},
	];

	return (
		<div className="space-y-6 w-6xl mx-auto py-10 px-4">
			<Accordion type="single" collapsible className="w-full">
				{messages.map((msg) => (
					<AccordionItem key={msg.id} value={msg.id} className="rounded-md">
						<AccordionTrigger className="flex items-start px-4 py-4 hover:bg-muted rounded-md transition-colors">
							<div className="flex flex-1 gap-4 items-start">
								<Avatar className="w-12 h-12">
									<AvatarImage src={msg.sender.avatarUrl} alt={msg.sender.name} />
									<AvatarFallback>{msg.sender.name[0]}</AvatarFallback>
								</Avatar>
								<div className="text-left">
									<div className=" flex gap-2">
										<span className="text-sm text-secondary-foreground">{msg.sender.name}</span>
										<span className="text-sm text-muted-foreground">{`<${msg.sender.email}>`}</span>
									</div>
									<p className="text-sm mt-1 text-muted-foreground line-clamp-2 max-w-xs">{msg.contentPreview}</p>
								</div>
							</div>
							<p className="text-sm text-muted-foreground whitespace-nowrap">{msg.date}</p>
						</AccordionTrigger>
						<AccordionContent className="pl-[70px] pr-4 pb-4">
							<Separator className="mb-4" />
							<p className="text-base leading-relaxed whitespace-pre-wrap text-secondary-foreground">{msg.fullContent}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<div className="pt-4">
				<Separator className="mb-4" />
				<div className="flex gap-4 items-start">
					<Avatar className="w-12 h-12">
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="flex-1 space-y-3">
						<Editor value={editorContent} onChange={setEditorContent} />
						<div className="flex justify-end">
							<Button className="text-base px-6">Enviar</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

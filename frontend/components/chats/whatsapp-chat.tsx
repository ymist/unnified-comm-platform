// components/chat/types.ts
"use client"

export type MessageType = {
    id: string;
    content: string;
    sender: "user" | "other";
    timestamp: Date;
  };
  
  // components/chat/ChatHeader.tsx
  import { Avatar } from "@/components/ui/avatar";
  
  type ChatHeaderProps = {
    contactName: string;
    status: string;
    avatarUrl?: string;
  };
  
  export function ChatHeader({ contactName, status }: ChatHeaderProps) {
    return (
      <header className="flex items-center px-4 py-3 bg-primary-foreground text-primary-foreground sticky top-0 z-10 border-b w-full">
        <div className="flex items-center gap-4">
                <Avatar >
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight max-w-full">
                <span className="truncate font-medium text-secondary-foreground">{contactName}</span>
                <span className="truncate text-xs text-secondary-foreground / 70">{status}</span>
              </div>
        </div>
      </header>
    );
  }
  
  // components/chat/MessageBubble.tsx
  type MessageBubbleProps = {
    message: MessageType;
  };
  
  export function MessageBubble({ message }: MessageBubbleProps) {
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
  
    return (
      <div 
        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
      >
        <div 
          className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
            message.sender === "user" 
              ? "bg-primary text-primary-foreground" 
              : "bg-background"
          }`}
        >
          <p className="text-sm">{message.content}</p>
          <span className={`text-xs ${message.sender === "user" ? "text-primary-foreground/50" : "text-secondary-foreground/50"} block text-right mt-1`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    );
  }
  
  // components/chat/ChatBody.tsx
  import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useRef } from "react";


  type ChatBodyProps = {
    messages: MessageType[];
  };
  
  export function ChatBody({ messages }: ChatBodyProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      // Wait for the DOM to update with new messages
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }, [messages]);

    React.useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
      }
    }, [messages]) 
    

    return (
      <ScrollArea className="flex-1 p-4 bg-primary-foreground ">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} className="scroll-smooth" />
        </div>
      </ScrollArea>
    );
  }
  
  // components/chat/ChatFooter.tsx
  import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImagePlus, Mic, Paperclip, Smile } from "lucide-react";
import { useState } from "react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

  
  type ChatFooterProps = {
    onSendMessage: (message: string) => void;
  };
  
  export function ChatFooter({ onSendMessage }: ChatFooterProps) {
    const [newMessage, setNewMessage] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newMessage.trim() === "") return;
      
      onSendMessage(newMessage);
      setNewMessage("");
    };
    
    return (
      <footer className="border-t sticky bottom-0 w-full z-10">
        <form className="flex items-center justify-evenly gap-2 bg-background p-2" onSubmit={handleSubmit}>
          <Button size="icon" className="bg-background hover:bg-secondary-foreground/5 !ring-0 !outline-none !shadow-none !border-none focus:!ring-0 focus:!outline-none focus:!shadow-none">
            <Smile className="h-5 w-5 text-secondary-foreground " />
          </Button>
          <Input
            type="text"
            placeholder="Type a message"
            className="!ring-0 !outline-none !shadow-none !border-none focus:!ring-0 focus:!outline-none focus:!shadow-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="flex flex-1 items-center justify-between gap-2">
          <Button 
            type="submit" 
            size="icon" 
            className="bg-background hover:bg-secondary-foreground/5 !ring-0 !outline-none !shadow-none !border-none focus:!ring-0 focus:!outline-none focus:!shadow-none"
          >
            <ImagePlus className="h-5 w-5 text-secondary-foreground " />
            </Button>
            <Button 
            type="submit" 
            size="icon" 
            className="bg-background hover:bg-secondary-foreground/5 !ring-0 !outline-none !shadow-none !border-none focus:!ring-0 focus:!outline-none focus:!shadow-none"
            
          >
            <Paperclip  className="h-5 w-5 text-secondary-foreground " />
          </Button>
          <Button 
            type="submit" 
            size="icon" 
            className="bg-background hover:bg-secondary-foreground/5 !ring-0 !outline-none !shadow-none !border-none focus:!ring-0 focus:!outline-none focus:!shadow-none"
            
          >
            <Mic  className="h-5 w-5 text-secondary-foreground " />
          </Button>
          </div>
        </form>
      </footer>
    );
  }
  
  // components/chat/ChatInterface.tsx
  

  
  export default function ChatInterfaceWhatsapp() {
    const [messages, setMessages] = useState<MessageType[]>([
      {
        id: "1",
        content: "Hey there! How are you doing?",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
      },
      {
        id: "2",
        content: "I'm good, thanks for asking! How about you?",
        sender: "user",
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
      },
      {
        id: "3", 
        content: "Doing well! Just working on some new projects.",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 1),
      },
    ]);


    
    const handleSendMessage = (content: string) => {
      const message: MessageType = {
        id: Date.now().toString(),
        content,
        sender: "user",
        timestamp: new Date(),
      };
      
      setMessages([...messages, message]);
    };

    
    
    return (
      <div className="flex flex-col h-full pb-[5%] bg-secondary">
        <ChatHeader 
          contactName="John Doe"
          status="Online" 
        />
        <ChatBody messages={messages} />
        <ChatFooter onSendMessage={handleSendMessage} />
      </div>
    );
  }
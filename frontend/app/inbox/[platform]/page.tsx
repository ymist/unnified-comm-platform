"use client"
import ChatInterfaceWhatsapp from "@/components/chats/whatsapp-chat"
import EmailInterface from "@/components/emailsInterface/emailDefault"
import { usePathname } from "next/navigation"
import { JSX } from "react"

export default function Page() {
  const platform = usePathname().split("/")[2]


  const returnPlatforms: { [key: string]: JSX.Element } = {
    "whatsapp": <ChatInterfaceWhatsapp />,
    "email": <EmailInterface /> 
  }


  return returnPlatforms[platform as keyof typeof returnPlatforms]



}
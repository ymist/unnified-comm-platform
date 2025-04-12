import React from 'react';
import { 
  Star, 
  Archive, 
  AlertCircle, 
  Trash2, 
  MoreHorizontal, 
  Reply, 
  CornerUpLeft, 
  CornerUpRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link2,
  FileCode,
  Image,
  Type,
  Paperclip,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

export default function EmailInterface() {
  return (
    <div className="flex h-screen">
      {/* Email content area */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Email header with navigation and actions */}
        <div className="py-3 px-4 border-b border-border flex items-center justify-between bg-card shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Back</span>
              </Button>
              <Separator orientation="vertical" className="mx-2 h-5" />
              <span>All Inboxes</span>
              <span className="mx-2">›</span>
              <span>Inbox</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Email subject line and actions */}
        <div className="p-4 bg-background border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-medium">Re: The Future of Renewable Energy: Innovations and Challenges Ahead</h2>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent">
              <AlertCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Email content */}
        <div className="flex-1 overflow-auto bg-background">
          <div className="p-5 max-w-4xl mx-auto">
            {/* Date info */}
            <div className="text-right text-sm text-muted-foreground mb-4">
              08 Apr 2025 7:43 pm
            </div>
            
            {/* Sender info with smooth background */}
            <div className="p-4 rounded-lg bg-accent/20 mb-6">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-4 border border-border">
                  <div className="bg-primary/10 w-full h-full flex items-center justify-center text-primary font-medium">
                    JS
                  </div>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-medium">Jayvion Simon</span>
                    <span className="ml-2 text-muted-foreground text-sm">&lt;nannie.abernathy70@yahoo.com&gt;</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    To: demo@minimals.cc, tyrel.greenholt@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Email body with smooth background */}
            <div className="p-5 rounded-lg bg-card border border-border shadow-sm">
              <p className="text-foreground leading-relaxed">
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.
              </p>
            </div>

            {/* Reply actions bar */}
            <div className="flex justify-center py-6">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <CornerUpLeft className="h-4 w-4 mr-2" />
                  Reply All
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <CornerUpRight className="h-4 w-4 mr-2" />
                  Forward
                </Button>
              </div>
            </div>

            {/* Divider with label */}
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-muted-foreground text-sm">Your reply</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            {/* Rich text editor with smooth styling */}
            <div className="mt-4">
              <Card className="border border-border overflow-hidden shadow-sm">
                {/* Toolbar */}
                <div className="flex items-center p-2 border-b border-border bg-accent/10">
                  <select className="h-8 rounded-md border border-border bg-background mr-2 px-2 text-sm">
                    <option>Paragraph</option>
                  </select>
                  <Separator orientation="vertical" className="mx-2 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Underline className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Strikethrough className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-2 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-2 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <AlignCenter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <AlignRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <AlignJustify className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-2 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Link2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <FileCode className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-2 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Type className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent hover:text-accent-foreground">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Text area */}
                <div className="p-3 bg-background">
                  <Textarea 
                    placeholder="Write something awesome..." 
                    className="border-0 focus-visible:ring-0 resize-none min-h-32" 
                  />
                </div>
              </Card>
              
              {/* Actions with improved styling */}
              <div className="flex justify-between mt-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
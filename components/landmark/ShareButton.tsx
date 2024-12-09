'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Share2 } from 'lucide-react';
import { Button } from "../ui/button";

import { TwitterShareButton,TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share'


type Props = {
    landmarkId: string;
    name: string;
}
export default function ShareButton({ landmarkId, name }: Props) {
    const sharelink = process.env.NEXT_PUBLIC_WEBSITE_URL + '/landmark/' + landmarkId
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline'>
                <Share2/>
                </Button>
            </PopoverTrigger>
            <PopoverContent
            side="top"
            align="end"
            className="w-full"
            >
                <div className="flex space-x-2">
                  <FacebookShareButton url={sharelink} name={name}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton url={sharelink} name={name}>
                    <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </div>
            </PopoverContent>
        </Popover>

    )
}
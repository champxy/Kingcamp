'use client'
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle, Star, ThumbsUp } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";

type SubmitbuttonProps = {
    classname?: string
    size?: BTNSize
    text?: string
}

type BTNSize = 'sm' | 'lg' | 'default'

export const Submitbutton = (props
    : SubmitbuttonProps
) => {
    const { classname, size, text } = props
    const { pending } = useFormStatus()
    return (
        <Button
            disabled={pending}
            type="submit"
            className={`${classname} capitalize`} size={size}>
            {
                pending ? <>
                    <LoaderCircle
                        className="animate-spin"
                    />
                    <span className="lowercase">wating...</span>
                </>
                    : <p>{text}</p>
            }
        </Button>
    )
}


export const SignInCardButton = () => {
    return (
        <SignInButton mode="modal">
            <Button size='icon' variant='outline'>
                <ThumbsUp size={18} />
            </Button>
        </SignInButton>
    )
}


export const CardSubmitButton = ({isFavorite}:{isFavorite:boolean}) => {
    // console.log('is',isFavorite)
    const {pending} = useFormStatus()
    return (
        <Button type="submit" size='icon'  variant="outline">
            {
                pending ? <>
                    <LoaderCircle
                        className="animate-spin"
                    />
                </>
                    : isFavorite ? <ThumbsUp fill="#007BFF"  size={18} /> : <ThumbsUp size={18} />
            }
        </Button>
    )
}






export const SignInRaingButton = () => {
    return (
        <SignInButton mode="modal">
            <Button size='icon' variant='outline'>
                <Star size={18} />
            </Button>
        </SignInButton>
    )
}
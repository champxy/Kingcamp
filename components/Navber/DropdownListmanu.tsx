    import React from 'react'
    import { User } from 'lucide-react';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    import { Button } from '../ui/button';
    import Link from 'next/link';
    import { links } from '@/utils/links';
    import SignoutLink from './SignoutLink';
    import { SignedIn, SignedOut, SignUpButton, SignInButton } from '@clerk/nextjs'

    const DropdownListmanu = () => {
        return (
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>
                            <User />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />


                        <SignedOut>
                            <DropdownMenuItem>
                                <SignInButton mode='modal'>
                                    <button>Sign in</button>
                                </SignInButton>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SignUpButton mode='modal'>
                                    <button>Sign up</button>
                                </SignUpButton>
                            </DropdownMenuItem>

                        </SignedOut>

                        <SignedIn>
                            {links.map((link, index) => (
                                <DropdownMenuItem key={index}>
                                    <Link href={link.href}> {link.label} </Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <SignoutLink />
                        </SignedIn>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    export default DropdownListmanu

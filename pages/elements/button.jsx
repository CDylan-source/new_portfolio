import React from 'react';
import Link from 'next/link';

export default function Button({children, href}){
    return(
        <Link href={href}>
            <a class="button orange"><span>{children}</span></a>
        </Link>
    )
}
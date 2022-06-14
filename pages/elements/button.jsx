import React from 'react';
import Link from 'next/link';

export default function Button({children, href}){
    return(
        <Link href={href}>
            <a className="button orange"><span>{children}</span></a>
        </Link>
    )
}
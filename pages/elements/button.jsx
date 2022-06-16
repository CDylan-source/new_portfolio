import React from 'react';
import Link from 'next/link';

export default function Button({children, href, target = "_self"}){
    return(
        <Link href={href}>
            <a className="button orange" target={target}><span>{children}</span></a>
        </Link>
    )
}
import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </nav>
     <div>{children}</div>    
    </>   
  )
}

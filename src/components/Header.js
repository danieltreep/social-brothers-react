import React from 'react'

import Logo from './Logo'
import Nav from './Nav'

export default function Header({page}) {
    return (
        <header className="mainHeader">
            
                <Logo />
                
                <Nav page={page}/>

                {page === 'blog' ? <h1>Blog</h1> : null}

        </header>
    )
}

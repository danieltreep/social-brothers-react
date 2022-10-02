import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({page}) {
    return (
        <nav>
            <Link to="/social-brothers-react" className={page === 'home' ? "active" : null}>Home</Link>
            <Link to="/blog-archief.html" className={page === 'blog' ? "active" : null}>Blog</Link>
        </nav>
    )
}

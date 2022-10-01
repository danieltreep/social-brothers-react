import React from 'react'
import Blogpost from './Blogpost'

export default function BlogpostContainer({blogposts, page}) {
    return (
        <div className={page === 'blog' ? "blogpostContainer archiefContainer" : "blogpostContainer"}>
            {blogposts.map(blogpost => <Blogpost key={blogpost.id} {...blogpost}/>)}
        </div>
    )
}

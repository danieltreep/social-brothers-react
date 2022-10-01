import React from 'react'

export default function Blogpost(props) {

    const day = props.created_at.slice(8, 10);
    const month = props.created_at.slice(5, 7);
    const year = props.created_at.slice(0, 4);

    return (
        <article className="blogpost">
            <header className="blogpostHeader">
                <img src={props.img_url} alt='blogpost header'></img>
                <p><time dateTime={props.created_at}>{day}-{month}-{year}</time></p>
                <p>{props.category.name}</p>
            </header>
            <div className="blogpostContent">
                <h2>{props.title}</h2>
                <p>{props.content} </p>    
            </div>
        </article>
    )
}

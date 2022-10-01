import React, { useEffect, useState } from 'react'

import BlogpostContainer from '../components/BlogpostContainer'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'

export default function HomePage() {

    const [url, setUrl] = useState(`https://frontend-case-api.sbdev.nl/api/posts?page=`);
    const [blogposts, setBlogposts] = useState([]);
    const [nextUrl, setNextUrl] = useState('');

    useEffect(() => {
        fetch(`${url}&perPage=4`, {
            headers: {
                token: 'pj11daaQRz7zUIH56B9Z'
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlogposts(data.data);
            setNextUrl(data.next_page_url);
        })
        .catch(err => console.error('Er is iets mis gegaan', err))
    }, [url])

    return (
        <>
            <Header page={'home'}/>

            <main className="mainHome">
                
                <Form />
                
                <section className="blogpostSection">

                    <BlogpostContainer blogposts={blogposts}/>

                    <button className="btn" onClick={() => setUrl(nextUrl)}>Meer laden</button>
                    
                </section>
            </main>

            <Footer />
        </>
    )
}

import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer';
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import BlogpostContainer from '../components/BlogpostContainer';

export default function BlogPage() {

    const [url, setUrl] = useState(`https://frontend-case-api.sbdev.nl/api/posts?page=`);
    const [blogposts, setBlogposts] = useState([]);
    const [pageLinks, setPageLinks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(null);

    useEffect(() => {
        fetch(`${url}&perPage=8`, {
            headers: {
                token: 'pj11daaQRz7zUIH56B9Z'
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlogposts(data.data);
            setPageLinks(data.links);
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
        })
        .catch(err => console.error('Er is iets mis gegaan', err))
    }, [url])

    function handleClick(newUrl) {
        setUrl(newUrl);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Header page={'blog'} />

            <main className="mainArchief">
                <section className="blogpostSection">
                    
                    <BlogpostContainer blogposts={blogposts} page={"blog"}/>

                    <Pagination pageLinks={pageLinks} handleClick={handleClick} currentPage={currentPage} lastPage={lastPage}/>
                    
                </section>
            </main>

            <Footer />
        </>
    )
}

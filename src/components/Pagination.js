import React from 'react'

export default function Pagination({pageLinks, handleClick, currentPage, lastPage}) {

    const newPageLinks = [...pageLinks]
    newPageLinks.pop()
    newPageLinks.shift()
    

    return (
        <div className="pagination">

            {currentPage > 1 ? <p onClick={() => handleClick(pageLinks[0].url)} className={'prev'}>&larr; Vorige pagina</p> : null}
            <div className='pageNumbers'>
                {newPageLinks.map((link, index) => 
                    <p 
                        key={index} 
                        onClick={() => handleClick(link.url)} 
                        className={link.active ? 'active' : null}
                        >{link.label}
                    </p>
                )}
            </div>
            
            
            {currentPage < lastPage ? <p onClick={() => handleClick(pageLinks[14].url)} className={'next'}>Volgende pagina &rarr;</p> : null}
        </div>
    )
}

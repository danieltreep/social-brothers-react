import React, { useEffect, useState } from 'react'

export default function Form() {

    const [categories, setCategories] = useState([]);
    let formData = new FormData();
    
    useEffect(() => {
        fetch('https://frontend-case-api.sbdev.nl/api/categories', {
            headers: {
                token: "pj11daaQRz7zUIH56B9Z"
            }
        })
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err))
    }, [])

    const requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
            token: 'pj11daaQRz7zUIH56B9Z'
        },
        redirect: 'follow'
    };

    function handleSubmit(e) {
        
        let image = document.querySelector('#image');
        let title = document.querySelector('#title');
        let category = document.querySelector('#category');
        let content = document.querySelector('#content');

        formData.append("title", title.value);
        formData.append("content", content.value);
        formData.append("category_id", category.value);
        formData.append("image", image.files[0]);

        fetch("https://frontend-case-api.sbdev.nl/api/posts", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .finally(() => {
            alert('Uw blogpost is geupload.');
            title.value = '';
            content.value = '';
            category.value = 'Geen categorie';
        })
        
        e.preventDefault();
    }    
    
    return (
        <section>
            <h2>Plaats een blog bericht</h2>

            <form onSubmit={handleSubmit}>
                <label>Berichtnaam</label>
                <input type="text" name="title" id="title" placeholder="Geen titel" required/>
                
                <label>Categorie</label>
                <select name="category_id" id='category' defaultValue={'Geen categorie'} required>
                    <option value="Geen categorie" disabled>Geen categorie</option>
                    {categories.map(categorie => <option key={categorie.id} value={categorie.id}>{categorie.name}</option>)}
                </select>

                <label>Header afbeelding</label>
                <div className="uploadField">
                    <svg className="cameraIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>
                    <input type="file" accept=".jpg, .png" id="image" name="image" hidden required/>
                    <label htmlFor="image" className="uploadButton">Kies bestand</label>
                </div>
                
                    
                <label>Bericht</label>
                <textarea name="content" id='content' rows="10" required/>

                <button className="btn" type="submit" >Bericht aanmaken</button>
            </form>
        </section>
        
    )
}

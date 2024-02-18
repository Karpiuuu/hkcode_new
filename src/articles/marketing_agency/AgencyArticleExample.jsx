import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function AgencyArticleExample() {
  return (
    <div className='px-4 wfull'>
    <Navbar />
    {/* content */}
    <Footer />  
    </div>
  )
}

export default AgencyArticleExample


/* 

Articles.json:
    {
        "id" : 23,
        "article_name": "Tytuł",
        "article_snippet": "opis",
        "article_href": "/agencyexample" (unique)
    }

    <Route path ="/agencyexample" element={<AgencyArticleExample/>}/>



*/
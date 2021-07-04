import React from 'react'

function Sidebar({ topAnime }) {
    return (
       <aside>
           <nav>
               <h3>
                   Top anime
                  
               </h3>
               {topAnime.map(topanime =>(<a href={topanime.url} target="_blank" key={topanime.mal_id} rel="noreferrer">{topanime.title}</a>))}
               
              
           </nav>
       </aside>
    )
}

export default Sidebar

import React from 'react';
import '../scss/Navigation.scss'


 function Navigation(){
     return(
         <header>
             <div className = 'title'>
                <h2>Brewdog Beer Recipes</h2>
             </div>
             <nav>
                <p>Beers</p>
                <p>FindBeer</p>
                </nav>
         </header>
     )
 }

 export default Navigation;
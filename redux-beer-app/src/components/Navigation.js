import React from 'react';
import '../scss/Navigation.scss'
import {Link} from 'react-router-dom'


 function Navigation(){
     return(
         <header>
             <div className = 'title'>
                <Link to='/'><h2>Brewdog Beer Recipes</h2></Link>
             </div>
             <nav>
                <Link to='/beers'><p>Beers</p></Link>
                <Link to='/beer'><p>FindBeer</p></Link>
                </nav>
         </header>
     )
 }

 export default Navigation;
import React, { Component } from 'react';
import './HeaderComponent.css'
class HeaderComponent extends Component{
    render(){
      
        return (
            <header>
                <nav class="topnav">
                    <h2 class="active" href="#home">Welcome To My Website</h2>
                    <input type="text" placeholder="Search by name"/>
                </nav>
                
            </header>

            
        )
    }
}
  
   
export default HeaderComponent
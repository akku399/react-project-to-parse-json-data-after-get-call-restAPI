import React, { Component } from 'react';
import './ConferenceDetails.css'


class ConferenceDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
        .then( response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div className="grid-container">

                        {posts.paid.map(function (paidServices, i) { 
						return <div className="grid-item" key={i}>
                           <div className="div-img">
                            <img src={paidServices.imageURL}  alt="" width="300" height="300" />
                            </div>
                            <div className="div-body">
						    <h5><b>{paidServices.confName}</b></h5>
                            <p>Start date: <span>{paidServices.confStartDate}</span></p>
							<p>End date: <span>{paidServices.confEndDate}</span></p>
                            <p>Entry Type: <span>{paidServices.entryType}</span></p>
                            <p><b>Venue: </b> <span>{paidServices.venue}</span></p>
                            </div>
                            <div className="div-link">
                            <a href={paidServices.confUrl}>Visit our Conference website</a>
                            </div>
				            </div>
					})}    
                {posts.free.map(function (freeServices, i) { 
                     return <div className="grid-item" key={i}>
                        <div className="div-img">
                         <img src={freeServices.imageURL}  alt="" width="300" height="300" />
                         </div>
                         <div className="div-body">
                         <h5>{freeServices.confName}</h5>
                         <p>Start date: <span>{freeServices.confStartDate}</span></p>
                         <p>End date: <span>{freeServices.confEndDate}</span></p>
                         <p>Entry Type: <span>{freeServices.entryType}</span></p>
                         <p><b>Venue: </b> <span>{freeServices.venue}</span></p>
                         </div>
                         <div className="div-link">
                         <a href={freeServices.confUrl}>Visit our Conference website</a>
                         </div>
                         </div>
                 })}

                        
        
             </div>


                
                
            );
        }
      
    }
  }
  
  export default ConferenceDetails;
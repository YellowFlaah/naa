import React, { Component } from 'react'
import { Map ,GoogleApiWrapper } from "google-maps-react";
class Maps extends Component{
  render(){
 return (
  <>
      <Map
        google={this.props.google}
        style = {{width: '20px' , outerHeight: '-20vh', height: '20px'}}
        zoom = {10}
        initialCenter = {
        {
          lat: 49.613270,
          lng: 6.139850
        }
        }
        /> 
       </>
       )
  
     }
    }
  
export default GoogleApiWrapper({
  apiKey: "AIzaSyB7w9JM2R6gW16XpV_K1Y_26ac6SDggXIo"
})(Maps)

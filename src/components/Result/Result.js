import React, { Component} from 'react';

//  this is basically a table that contains the songs from whatever album that they click on 
//  cuz that would be cool right?
//  or, even better, pull results from Spotify API and display on table -round two 

//  setting to empty array so we can push info there and map over it to rend to screen 

class Result extends Component {
    state = {
        results: [],
        albumName: {

        },
        trackName: []
    }
}

//  life cycle methods 

//  set state 

export default Result;
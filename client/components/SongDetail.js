import React, { Component } from "react";
import fetchSong from "../queries/fetchSong";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetails extends Component{
    render(){
        const {song} = this.props.data;
        debugger;
        if (!song) 
            { 
                return <div>Loading...</div>; 
            }  
            return(
                <div>
                    <Link to="/">Back</Link>
                    <h3>{song.title}</h3>
                    <LyricList lyric={song.lyrics}/>
                    <LyricCreate songId={song.id}/>
                </div>
                )
    }
}

export default graphql(fetchSong,{
    options: (props) => { return {variables : { id : props.params.id } } }
})(SongDetails);
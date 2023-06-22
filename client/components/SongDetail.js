import React, { Component } from "react";
import fetchSong from "../queries/fetchSong";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";

class SongDetails extends Component{

    renderSongDetails(){
        const song = this.props.data.song;
        const lyrics = song.lyrics.map(({id, content}) => {
            return (
                <li key= {id}>{content}</li>
            )
        });
        return (
            <div>
                <h3>{song.title}</h3>
                <ul>{lyrics}</ul>
            </div>
            );
    }

    render(){
        const { loading } = this.props.data;
        const song = this.props.data.song ? this.props.data.song : null;
        if(loading || song === null){
            return(
                <div>
                    <h3>Loading</h3> 
                </div>
            )
        }
        else{   
            return(
                <div>
                    <Link to="/">Back</Link>
                    {this.renderSongDetails()}
                    <LyricCreate songId={song.id}/>
                </div>
                )
            }
    }
}

export default graphql(fetchSong,{
    options: (props) => { return {variables : { id : props.params.id } } }
})(SongDetails);
import React, { Component }  from "react";
import { graphql } from "react-apollo";
import { Link  } from "react-router";
import gql from 'graphql-tag';
import query from "../queries/fetchSongs";
import mutation from "../queries/deleleSong";

class SongList extends Component{

    onSongDelete(id){
        // debugger;
        this.props.mutate({ variables : { id : id} })
             .then(() => this.props.data.refetch());

    }

    renderSongs(){
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
                </li>
            );
        });
    }


    render(){
        if(this.props.data.loading){
            return <div>Loading Songs..!!</div>;
        }
        return(
            <div>
                <ul className="collection"> 
                    {this.renderSongs()}
                </ul>
                <Link 
                to="songs/new"
                className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

export default graphql(mutation)(
    graphql(query)(SongList)
);
// render component -> Query issued/executed -> Query completed -> Rerender Component
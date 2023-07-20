import React,{ Component} from "react";
import UpdateLikes from "../queries/UpdateLikes";
import { graphql } from "react-apollo";
import { optimistic } from "apollo-client/optimistic-data/store";

class LyricList extends Component{
    onLike(id,likes){
        this.props.mutate(
            { 
                variables : {id},
                optimisticResponse : {
                    __typename : 'Mutation',
                    likeLyric:{
                        id,
                        __typename : 'LyricType',
                        likes : likes + 1
                    }
                }
             });
    }

    renderLyrics(){
        return (this.props.lyric.map( ({id, content, likes}) => {
            return(
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                    <i 
                    className="material-icons"
                    onClick={ () => this.onLike(id,likes)}
                    >
                    thumb_up
                    </i>
                    {likes}
                    </div>
                </li>
            );
        }));
    }

    render(){
        return(
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(UpdateLikes)(LyricList);
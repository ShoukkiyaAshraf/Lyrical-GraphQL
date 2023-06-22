import React,{ Component} from "react";
import mutation from "../queries/CreateLyrics";
import { graphql } from 'react-apollo';



class LyricCreate extends Component{
    constructor(props){
        super(props);

        this.state = { content: '', songId : props.songId ? props.songId : null};

    }

    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables : { 
                songId : this.state.songId,
                content : this.state.content
            }
        })
        .then(() => this.props.data.refetch());
    }

    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input 
                    value={this.state.content}
                    onChange={ event => this.setState({ content: event.target.value})}
                />
            </form>
        );
    }
}

export default graphql(mutation)(LyricCreate);
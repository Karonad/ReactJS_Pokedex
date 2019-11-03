import React from 'react';
import Item from './Item';
import axios from 'axios';
import Loader from './Loader';



class List extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            pokemon: [],
            url: 'https://pokeapi.co/api/v2/pokemon/?limit=807',
            filteredValuePokemon: null,
        };
      }


    async componentDidMount(){
        this.setState({isLoading: true});
        const filteredValuePokemon = this.props.search;
        try{
            const response = await axios.get(this.state.url);
            if(filteredValuePokemon == null){
                this.setState({pokemon: response.data['results'], isLoading: false});
            }else{
                this.setState({pokemon: response.data['results'].filter(pokemon =>
                    pokemon.name.toLowerCase().includes(filteredValuePokemon.toLowerCase()),
                    ),
                    isLoading: false});
            }        
        }catch(err){
            console.log(err.msg);
            this.setState({isLoading: false});
            throw err;
        }
    }
    

    

    render(){
        const { isLoading, pokemon } = this.state;

        
        return(
            <div>
            { isLoading ? <Loader /> : <div className="row mx-4">
            {pokemon.map( (pokemon, index ) => (
            <Item 
                key = {index}
                name = {pokemon.name}
                url = {pokemon.url}
            />
            ))}
            
        </div>
        }
        </div>
            
        )
    }
}

export default List;

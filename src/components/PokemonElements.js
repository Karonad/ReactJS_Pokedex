import React from 'react';
import Axios from 'axios';
import './pokemonElement.css';
import Loader from './Loader';


class PokemonElements extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pName: '',
            isLoading: false,
            url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
            spriteUrl: '',
            name:'',
            hp: '',
            attack:'',
            defense:'',
            specialAttack:'',
            specialDefense:'',
            speed:'',
            height:'',
            weight:'',
            urlType: null,
            urlType2: null,

        };
      }

      async componentDidMount(){
          this.setState({isLoading: true})
          try{
          const { pName } = this.props.match.params;
          const pUrl = `https://pokeapi.co/api/v2/pokemon/${pName}`;
          const pResponse = await Axios.get(pUrl);
          const typeLength = pResponse.data.types.length;
          const urlType = `/picture/types/${pResponse.data.types[0].type.name}.png`;
          let urlType2 = null;
          const is2Type = (length) => {
              length === 2 ? (urlType2 = `/picture/types/${pResponse.data.types[1].type.name}.png`) : (urlType2 = null)
          }; 
          is2Type(typeLength); 
                   

          this.setState({
            name: pResponse.data.name,
            spriteUrl: pResponse.data.sprites.front_default,
            speed: pResponse.data.stats[0].base_stat,
            specialDefense: pResponse.data.stats[1].base_stat,
            specialAttack: pResponse.data.stats[2].base_stat,
            defense: pResponse.data.stats[3].base_stat,
            attack: pResponse.data.stats[4].base_stat,
            hp: pResponse.data.stats[5].base_stat,
            height: pResponse.data.height,
            weight: pResponse.data.weight,
            move1: pResponse.data.moves[0].move.name,
            move2: pResponse.data.moves[1].move.name,
            move3: pResponse.data.moves[2].move.name,
            urlType: urlType,
            urlType2: urlType2,
            isLoading: false,

          })
        }catch(err){
            console.log(err.msg);
            this.setState({isLoading: false});
            throw err;
        }
      }

    render(){
        
        const {
            name,
            spriteUrl,
            speed,
            specialAttack,
            specialDefense,
            defense,
            attack,
            hp,
            move1,
            move2,
            move3,
            height,
            weight,
            urlType,
            urlType2,
            isLoading,
        } = this.state;

        return(
            <div>
            {isLoading ? <Loader /> : <div className="d-flex flex-row justify-content-around" style={{paddingTop: 6 + 'em'}}>
                <div className="card bg-light col-md-5 col-sm-6">
                    <img src={spriteUrl} className="card-img-top" alt={name} />
                </div>
                <div className="card bg-light col-md-5 col-sm-6">
                    <br></br>
                    <h1>{name}</h1>
                    <div className="imgType" >
                        <p>Type: </p>
                        <img src={urlType} className="img" alt={name} />
                        <img src={urlType2} className="img" alt={name} />
                    </div>
                    Height: {height}dm / Weight: {weight}
                    <br></br>
                    <br></br>
                    <h4>Stats</h4>
                    <p className="card-text">
                        Speed: {speed}<br></br>
                        Health Point: {hp}<br></br>
                        Attack: {attack}<br></br>
                        Defense: {defense}<br></br>
                        Special Attack: {specialAttack}<br></br>
                        Special Defense: {specialDefense}<br></br>
                    </p>
                    <h4>Skills</h4>
                    <p className="card-text raw">
                        {move1} / {move2} / {move3} 
                    </p>
                </div>
            </div> 
        }
        </div>
        )
    }
}
export default PokemonElements;
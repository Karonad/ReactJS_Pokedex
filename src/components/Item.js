import React from 'react';
import {Link} from "react-router-dom";
import './Link.css';


class Item extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            name:'',
            pIndex:'',
            spriteUrl:'',
        }; 
    }
    
    async componentDidMount() {

        const { name, url } = this.props;
        const pIndex = url.split('/')[url.split('/').length - 2]
        const spriteUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pIndex}.png`;
        this.setState({name, pIndex, spriteUrl});
    }

    render(){
        return (
            <div className="col-md-4 col-sm-6 mb-2" style={{paddingTop: 6 + 'em'}}>
                <Link to={`${this.state.name}`} className="Link">
                <div className="card">
                    <img src={this.state.spriteUrl} className="card-img-top" alt={this.state.name} />
                    <div className="card-body mx-auto">
                    <h5 className="card-title" style={{fontSize: 40 + 'px'}}>{this.state.name}</h5>
                    </div>
                </div> 
                </Link>
            </div>
        )
    };
}

export default Item;

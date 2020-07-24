import React from 'react';

import './movie-detail.styles.css';

class MovieDetail extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            id:'',
            movie : []
        }

    }
    componentWillMount(){
        const id = new URLSearchParams(this.props.location.search).get("id");
       this.setState({
           id: id
       });
    }

    componentDidMount(){
       
        fetch(
            `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
          )
            .then((response) => response.json())
            .then((result) => this.setState({ movie: result}));
    }

    render(){
      const {id, title, poster_path} = this.state.movie;
        return(
           

            
            <div >
            <h2 >Movie Detail</h2>
            <div className="card">
            <img  src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="Denim Jeans" />
            <h1>{title}</h1>
            <p className="price">$19.99</p>
            </div>
            
            </div>
        )
    }
}


export default MovieDetail;
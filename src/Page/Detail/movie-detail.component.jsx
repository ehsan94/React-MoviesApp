import React from "react";

import "./movie-detail.styles.scss";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      movie: [],
    };
  }
  componentWillMount() {
    const id = new URLSearchParams(this.props.location.search).get("id");
    this.setState({
      id: id,
    });
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((result) => this.setState({ movie: result }));
  }

  render() {
    const {
      id,
      title,
      poster_path,
      overview,
      release_date,
      runtime,
    } = this.state.movie;

    return (
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div
              className="movie-img"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w200/${poster_path})`,
              }}
            ></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{title}</h1>
                  <ul className="movie-gen">
                    <li>{release_date}</li>
                    <li> / {runtime}</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description"> {overview} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;

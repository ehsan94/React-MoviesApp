import React from "react";

import CardList from "../../Components/CardList/card-list.component";
import SearchBox from "../../Components/search-box/search-box.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: '',
    };
  }
  componentDidMount() {
      if(!localStorage.getItem("searchField")){
        localStorage.setItem("searchField", '')
      }

    this.setState({ searchField: localStorage.getItem("searchField")});

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((result) => this.setState({ movies: result.results }));
  }

  handleChange = (e) =>
    this.setState(
      {
        searchField: e.target.value,
      },
      localStorage.setItem("searchField", e.target.value)
    );

  render() {
    const { movies, searchField } = this.state;
    console.log(searchField);

    const filteredMovies = movies.filter((movies) =>
      movies.original_title.toLowerCase().includes(searchField.toLowerCase())
    );
    const myData = []
      .concat(filteredMovies)
      .sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    return (
      <div>
        <SearchBox
          placeHolder="Search Movies"
          handle={this.handleChange}
          value={this.state.searchField}
        />

        {myData.map(({ id, original_title, ...otherCollectionProps }) => (
          <CardList key={id} movies={myData} />
        ))}
      </div>
    );
  }
}

export default HomePage;

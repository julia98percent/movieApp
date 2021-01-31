import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  //클래스형 컴포넌트가 되려면 'App'클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다
  state = {
    isLoading: true,
    movies: [],
  };
  //getMovies 함수는 시간이 필요해! (getMovies 함수는 비동기야)
  getMovies = async () => {
    //axios.get()의 실행을 기다려줘ㅜㅇㅜ (실행완료를 기다렸다가 다 끝나면 다시 진행해줘)
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //this.setState({ movies: movies });
    //첫번째 movies: state , 두번째 state: 구조 분해 할당으로 얻은 영화 데이터가 있는 변수
    //ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있음
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;

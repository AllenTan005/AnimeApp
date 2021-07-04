import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const link = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    //console.log(link);
    setTopAnime(link.top.slice(0, 10));
  };

  const searchHandler = e => {
    e.preventDefault();

    //console.log(search);
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const link = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then((res) => res.json());
      
      console.log(link.results);

      setAnimeList(link.results);
      
  };
  useEffect(() => {
    FetchAnime()
      }, []);


  useEffect(() => {
GetTopAnime()
  }, []);
  // console.log(topAnime)

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          searchHandler={searchHandler}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
//import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
//import EpisodeList from "./episodes/EpisodeList"

export default function App() {
  //const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
        {ShowSelection(tvShows)}
      </header>
      <main>

      </main>
    </>
  );
}

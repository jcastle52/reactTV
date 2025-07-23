import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ tvShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (tvShow) {
    return (
      <>
        <EpisodeList
          name={tvShow.name}
          episodes={tvShow.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </>
    );
  } else {
    return (
      <div className="show-details">
        <h2>Please select a show for more details</h2>
      </div>
    );
  }
}

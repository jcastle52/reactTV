import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({tvShows, setSelectedShow}) {
  return (
    <>
      <nav className="shows">
        {tvShows.map((element) => (
          <a className="show" key={element.name}
          onClick={() => setSelectedShow(element)}
          >{element.name}</a>
        ))}
      </nav>
    </>
  );
}

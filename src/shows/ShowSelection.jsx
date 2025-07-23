import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection(tvShows) {
  return (
    <>
      <nav className="shows">
        {tvShows.map((element, index) => (
          <a className="show" key={index}
          onClick={() => (
            console.log("test")
          )}
          >{element.name}</a>
        ))}
      </nav>
    </>
  );
}

import RandomGIF from "./components/RandomGIF";
import TagGIF from "./components/TagGIF";

export default function App() {
  return (
    <div className="main-container background">
      <h1 className="head-container"> RANDOM GIFs </h1>
      <div className="content">
        <RandomGIF />
        <TagGIF />
      </div>
    </div>
  );
}

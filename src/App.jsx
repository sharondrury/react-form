import Dropzone from "./Dropzone";
import "./styles.css";

const Homepage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Upload Files</h1>
        <Dropzone className="drop-zone" />
      </div>
    </section>
  );
};
export default Homepage;

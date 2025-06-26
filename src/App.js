import "./styles.css";
import ImageDrop from "./ImageDrop";
("./ImageDropper.js");

export default function App() {
  return (
    <form>
      <ImageDrop />;
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

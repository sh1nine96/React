// import logo from "./logo.svg";
import "./App.css";

let name = "React";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </nav>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        eius cum nisi perspiciatis distinctio corrupti fugit? Architecto
        voluptatum nihil voluptatibus! Officiis dolorem, aut necessitatibus
        similique deleniti deserunt maiores minima velit!
      </p>
      <div className="first">Hello {name}</div>
    </>
  );
}

export default App;

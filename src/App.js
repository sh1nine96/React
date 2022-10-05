// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div>
        <Navbar title="TextUtils" aboutText="AboutTextUtils" homeText="Home" />
        <div className="container my-3">
          <TextForm heading="Enter text to be analyzed" />
        </div>
        {/* <Navbar /> */}
      </div>
    </>
  );
}

export default App;

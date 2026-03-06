import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/Section_1/About";
import Quantity from "./components/Section_2/Quantity";


import Footer from "./components/Footer/Footer";
import "./App.css";   // импортируем стили


function App() {
  return (
    <div className="wrapper">
      <div className="page">
        <Header />
        <Hero />
        <About />
        <Quantity />



        <Footer />
      </div>
    </div>
  );
}

export default App;
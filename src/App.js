import './App.css';
import Dictionary from "./Dictionary"

export default function App () {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">
        
        <h1>Hello World </h1>
        <p> This is my Dictionary Project</p>

      </header>
    <main>
      <Dictionary defaultKeyword="sunset"/>

      </main>
    
      <footer className="App-footer">
      <small> Open Source Coded by <a href="https://github.com/Giggles999/dictionary-project" target="blank">Lynn Mach</a></small>
      </footer>
    </div>
</div>
  );
}



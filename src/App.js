import './App.css';
import Dictionary from "./Dictionary"

export default function App () {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">
        
        <h1>Hello World </h1>
        <p> This is my Dictionary Project</p>

      <button className="btn btn-primary shadow">Submit</button>
      </header>
    <main>
      <Dictionary/>
      </main>
    
      <footer className="App-footer">
      <small> Coded by Lynn Mach</small>
      </footer>
    </div>
</div>
  );
}



import './../../../App.css';

function MenuComp(props){
  return (
    <header>
      <h2>MENU</h2>
      <ul>
        <li><a href='#none'>COFFEE</a></li>
        <li><a href='#none'>TEA</a></li>
        <li><a href='#none'>BREAD</a></li>
      </ul>
    </header>
  )
}

function ItemComp(){
  return (
    <div>
      <h3>COFFEE</h3>
      <p>ice americano</p>
    </div>
  )
}

function App() {
  const menu = [
    { title: "COFFEE", content: "ice americano" }
  ]
  return (
    <div className="App">
      <MenuComp></MenuComp>
      <hr />
      <ItemComp></ItemComp>
    </div>
  );
}

export default App;

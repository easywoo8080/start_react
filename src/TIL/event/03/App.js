import './../../../App.css';

function MenuComp(props){
  return (
    <header>
      <h2>MENU</h2>
      <ul>
        <li>
          <a
            href='#none'
            onClick={ () => { props.onCallItem(1) } }
          >
            COFFEE
          </a>
        </li>
        <li><a href='#none'
          onClick={ () => { props.onCallItem(2) } }
        >TEA</a></li>
        <li><a href='#none'
          onClick={ () => { props.onCallItem(3) } }
        >BREAD</a></li>
      </ul>
    </header>
  )
}

function ItemComp(props){
  return (
    <div>
      <h3>{ props.title }</h3>
      <p>{ props.content }</p>
    </div>
  )
}

function App() {
  const menu = [
    { title: "COFFEE", content: "ice americano" },
    { title: "TEA", content: "green tea" },
    { title: "BREAD", content: "honey bread" }
  ]
  return (
    <div className="App">
      <MenuComp
        onCallItem={
          (id)=>{ alert(id) }
        }
      ></MenuComp>
      <hr />
      <ItemComp
        title={menu[0].title}
        content={menu[0].content}
      ></ItemComp>
    </div>
  );
}

export default App;

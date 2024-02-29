import { useState } from 'react';
import './App.css';

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
        <li><a href='#none'
          onClick={ () => { props.onCallItem(4) } }
        >ICECREAM</a></li>
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
  /* const _menu = useState(1);
  // console.log('menu: ', _menu);
  const menu = _menu[0]
  const setMenu = _menu[1]; */
  const [menu, setMenu] = useState(4);
  
  const menus = [
    { title: "COFFEE", content: "ice americano" },
    { title: "TEA", content: "green tea" },
    { title: "BREAD", content: "honey bread" },
    { title: "ICECREAM", content: "vanilla" },
  ]
  let selected_item = null;

  if( menu === 1 ){
    selected_item= <ItemComp title={menus[0].title} content={menus[0].content}></ItemComp>
  } else if( menu === 2 ){
    selected_item= <ItemComp title={menus[1].title} content={menus[1].content}></ItemComp>
  } else if( menu === 3 ){
    selected_item= <ItemComp title={menus[2].title} content={menus[2].content}></ItemComp>
  } else if( menu === 4 ){
    selected_item= <ItemComp title={menus[3].title} content={menus[3].content}></ItemComp>
  }

  return (
    <div className="App">
      <MenuComp
        onCallItem={
          (id)=>{
            // menu = id;
            // console.log('menu: ', menu, " || id: ", id)
            setMenu(id)
          }
        }
      ></MenuComp>
      <hr />
      { selected_item }
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function MenuComp(props){
  const menu_list = ['COFFEE', 'TEA', 'BREAD', 'ICECREAM'];
  const print_list = [];
  for( let i = 0; i < menu_list.length; i++){
    print_list.push(<li>
                  <a
                    href='#none'
                    onClick={ () => { props.onCallItem(i+1) } }
                  >
                    {menu_list[i]}
                  </a>
                </li>)
  }
  return (
    <header>
      <h2>MENU</h2>
      <ul>
        {print_list}
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
    { title: "ICECREAM", content: "vanilla" }
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

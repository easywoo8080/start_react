import { useState } from 'react';
import './App.css';

function MenuComp(props){
  // const menu_list = ['COFFEE', 'TEA', 'BREAD', 'ICECREAM'];
  const menu_list = props.menus;
  console.log(menu_list)
  const print_list = [];
  for( let i = 0; i < menu_list.length; i++){
    print_list.push(<li>
                  <a
                    href='#none'
                    onClick={ () => { props.onCallItem(menu_list[i].id) } }
                  >
                    {menu_list[i].title}
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
    { id: 1, title: "COFFEE", content: "ice americano" },
    { id: 2, title: "TEA", content: "green tea" },
    { id: 3, title: "BREAD", content: "honey bread" },
    { id: 4, title: "ICECREAM", content: "vanilla" }
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
        menus={menus}
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

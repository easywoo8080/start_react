import './../../../App.css';

function EventComp(props){
  console.log('props : ', props)
  // function onEventTest(){}
  return (
    <header className='brd'>
      <h2>{ props.title }</h2>
      <p>
        <a href='#none' onClick={
          // function(){}
          (event) => {
            // alert("Print Text in EventComp!!")
            // console.log(event)
            event.preventDefault();
            // props.onEventTest();
            props.onEventTest("Event Component!!");
          }
        }>
          { props.content }
        </a>
      </p>
    </header>
  )
}

function App() {
  const menu = [
    { title: "COFFEE", content: "ice americano" }
  ]
  return (
    <div className="App">
      <EventComp
        title={menu[0].title}
        content={menu[0].content}
        onEventTest={
          // function(){ alert("Call from EventComp!!") }
          // () => { alert("Call from EventComp!!") }
          (msg) => { alert(msg) }
        }        
      ></EventComp>
    </div>
  );
}

export default App;

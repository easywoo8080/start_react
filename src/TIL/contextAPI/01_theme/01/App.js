import './App.css';

function SubComp1() {
  return (
    <div>
      <h3>Sub 1</h3>
      <SubComp2></SubComp2>
    </div>
  )
}

function SubComp2() {
  return (
    <div>
      <h3>Sub 2</h3>
      <SubComp3></SubComp3>
    </div>
  )
}

function SubComp3() {
  return (
    <div>
      <h3>Sub 3</h3>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h2>ROOT</h2>
      <SubComp1></SubComp1>
    </div>
  );
}

export default App;

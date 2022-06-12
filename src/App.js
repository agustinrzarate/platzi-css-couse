import "./root.css";
function App() {
  return (
    <div className="App">
      <p className="pseudoelements">Before and after</p>
      <div className="container-shadow">
        <div className="box A">2D</div>
      </div>
      <div className="container-shadow">
        <div className="box B">3D</div>
      </div>
      <div className="container-shadow">
        <div className="box card">
          <div className="face front">FRONT</div>
          <div className="face back">BACK</div>
        </div>
      </div>
      <div className="container-shadow four">
        <div className="box box1">3D</div>
        <div className="box box2">3D</div>
        <div className="box box3">3D</div>
      </div>
    </div>
  );
}

export default App;

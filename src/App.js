import NavBar from "./components/NavBar";

function App(props) {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ textAlign: "center" }}>AZURE</div>
          <textarea
            rows="20"
            cols="30"
            value={props.onPrint1}
            onChange={() => props.onPrint1}
          ></textarea>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>AWS</div>
          <textarea
            rows="20"
            cols="30"
            value={props.onPrint2}
            onChange={() => props.onPrint2}
          ></textarea>
        </div>
      </div>
      {props.someValue === 200 ? (
        <div
          style={{
            color: "green",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {props.someValue}: Success
        </div>
      ) : (
        <div
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {props.someValue}: Failed
        </div>
      )}
    </>
  );
}

export default App;

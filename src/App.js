function App(props) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <textarea row="20" cols="30">
          {props.onPrint}
        </textarea>
        <textarea rows="20" cols="30">
          {props.onPrint}
        </textarea>
        {/* <div>{for(let keys in object.keys(result1)){
          return keys,value
        }}</div>
        <div>{JSON.parse(props.onPrint)}</div> */}
        {/* <div style={{ overflow: "scroll" }}>{props.onPrint}</div>
        <div style={{ overflow: "scroll" }}>{props.onPrint}</div> */}
      </div>
    </>
  );
}

export default App;

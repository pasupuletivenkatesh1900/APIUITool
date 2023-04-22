const Template = (props) => {
  return (
    <textarea row="50" cols="30" type="text">
      {props.onPrint}
    </textarea>
  );
};

export default Template;

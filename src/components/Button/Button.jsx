import "./Button.css"
function Button() {
    function handleClick() {
        console.log("Button  clicked");
    }
  return <p className="button" onClick={handleClick}>Upload</p>;
}

export default Button;
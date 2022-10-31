import "./CustomImage.css";

function CustomImage(props) {
  return (
    <div
      onClick={props.onClick}
      className={props.customClass}
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <h3>{props.title}</h3>
    </div>
  );
}

export default CustomImage;

/* eslint-disable react/prop-types */
export default function Message({ msg, type }) {
  let style;
  if (type == "added") {
    style = {
      backgroundColor: "rgb(168, 212, 168)",
      color: "rgb(3, 62, 3)",
      fontSize: 20,
      border: "2px solid rgb(3, 62, 3)",
      borderRadius: 10,
    };
  } else if (type == "err") {
    style = {
      backgroundColor: "rgb(224, 152, 141)",
      color: "rgb(100, 16, 3)",
      fontSize: 20,
      border: "2px solid rgb(100, 16, 3)",
      borderRadius: 10,
    };
  }
  if (msg == null) return null;
  return (
    <div>
      <p style={style}>{msg}</p>
    </div>
  );
}

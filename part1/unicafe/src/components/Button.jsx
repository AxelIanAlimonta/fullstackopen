/* eslint-disable react/prop-types */
export default function Button({ onclick,  text }) {
  return (
    <button onClick={onclick}>
      {text}
    </button>
  );
}

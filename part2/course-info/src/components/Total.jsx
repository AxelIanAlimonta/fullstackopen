/* eslint-disable react/prop-types */
export default function Total({ parts }) {
  let total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return <b>total of exercises {total}</b>;
}

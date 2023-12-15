import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

/* eslint-disable react/prop-types */
export default function Course({ course }) {
  let parts = course.parts.map((e) => (
    <Part name={e.name} exercises={e.exercises} key={e.id} />
  ));

  return (
    <>
      <Header course={course.name} />
      {[parts]}
      <Total parts={course.parts} />
    </>
  );
}

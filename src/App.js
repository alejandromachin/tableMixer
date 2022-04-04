import { useState } from "react";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import { students } from "./data/students";
import shuffleArray from "./utils/studentsMixer";

function App() {
  const [studentsSeats, setStudentsSeats] = useState(students);

  const shuffle = () => {
    const shuffledStudents = shuffleArray(students);
    setStudentsSeats(shuffledStudents);
  };

  return (
    <>
      {/* <Table />
      <Table />
      <Table /> */}
      <Button actionOnClick={shuffle} text={"RANDOM"}></Button>
    </>
  );
}

export default App;

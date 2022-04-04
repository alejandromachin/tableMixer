import { useState } from "react";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import { students } from "./data/students";
import shuffleArray from "./utils/studentsMixer";

function App() {
  const [studentsTable1, setStudentsTable1] = useState([]);
  const [studentsTable2, setStudentsTable2] = useState([]);
  const [studentsTable3, setStudentsTable3] = useState([]);

  const shuffle = () => {
    const shuffledStudents = shuffleArray(students);

    setStudentsTable1(shuffledStudents.slice(0, 8));
    setStudentsTable2(shuffledStudents.slice(9, 17));
    setStudentsTable3(shuffledStudents.slice(18, 27));
  };

  return (
    <>
      <Table students={studentsTable1} />
      <Table students={studentsTable2} />
      <Table students={studentsTable3} />

      <Button actionOnClick={shuffle} text={"RANDOM"}></Button>
    </>
  );
}

export default App;

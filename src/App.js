import { useState } from "react";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import { students } from "./data/students";
import studentsWithLargerImage from "./data/studentsWithLargerImage";
import shuffleArray from "./utils/studentsMixer";

function App() {
  const [studentsTable1, setStudentsTable1] = useState([]);
  const [studentsTable2, setStudentsTable2] = useState([]);
  const [studentsTable3, setStudentsTable3] = useState([]);

  const shuffle = () => {
    const shuffledStudents = shuffleArray(students);
    setStudentsTable1(shuffledStudents.slice(0, 9));
    setStudentsTable2(shuffledStudents.slice(9, 17));
    setStudentsTable3(shuffledStudents.slice(17, 31));
  };

  const emanuele = "EMANUELE";

  return (
    <div className="hall">
      <div className="tables">
        <Table
          students={studentsTable1}
          position="sideTable"
          studentsWithLargerImage={studentsWithLargerImage}
          emanuele={emanuele}
        />
        <Table
          students={studentsTable2}
          position="centerTable"
          studentsWithLargerImage={studentsWithLargerImage}
        />
        <Table
          students={studentsTable3}
          position="sideTable"
          studentsWithLargerImage={studentsWithLargerImage}
        />
      </div>
      <div className="profes">
        <div className="buttonTable">
          <img
            className="isdi-logo"
            src="/images/isdi-logo.webp"
            alt="ISDI CODERS LOGO"
          />
          <Button actionOnClick={shuffle} text={"RANDOM"}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;

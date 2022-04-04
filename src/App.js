import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import { students } from "./data/students";
import shuffleArray from "./utils/studentsMixer";

function App() {
  return (
    <>
      {/* <Table />
      <Table />
      <Table /> */}
      <Button
        actionOnClick={() => {
          shuffleArray(students);
        }}
        text={"RANDOM"}
      ></Button>
    </>
  );
}

export default App;

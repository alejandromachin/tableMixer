const Table = (students) => {
  return (
    <>
      <div>
        <ul>
          {students.map((student) => (
            <li key={student.name}>{student.image}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Table;

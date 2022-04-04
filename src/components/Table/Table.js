const Table = ({ students }) => {
  return (
    <>
      <div>
        <ul>
          {students.map((student) => (
            <li key={student.name}>{student}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Table;

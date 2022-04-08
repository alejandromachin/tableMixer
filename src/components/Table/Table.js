const Table = ({ students }) => {
  return (
    <>
      <div className="table">
        {students.map((student) => (
          <div key={student} className="student">
            <img
              className="student-image"
              src={`images/students_photos/${student}.webp`}
              alt="student"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Table;

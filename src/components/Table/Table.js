const Table = ({ students, position, studentsWithLargerImage }) => {
  return (
    <>
      <div className={`table ${position}`}>
        {students.map((student) => (
          <div key={student} className="student">
            <img
              className={`student-image${
                studentsWithLargerImage.includes(student)
                  ? " tooLargeToFit"
                  : ""
              }`}
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

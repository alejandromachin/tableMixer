const Table = ({ students, position, studentsWithLargerImage, emanuele }) => {
  return (
    <>
      <div className={`table ${position}`}>
        {emanuele && (
          <img
            className="student"
            src={`images/students_photos/${emanuele}.webp`}
            alt="student"
          />
        )}
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

const Table = ({ students, position, studentsWithLargerImage, emanuele }) => {
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
        {emanuele && (
          <img
            className="student-image"
            src={`images/students_photos/${emanuele}.webp`}
            alt="student"
          />
        )}
      </div>
    </>
  );
};
export default Table;

export default function updateStudentGradeByCity(studentsarray, city, newGrades) {
  return studentsarray
    .filter(student => student.location === city) // filtra students con location igual a city
    .map(student => { // mapear students filtrados para transformar students en nuevos objetos con su grade actualizado
      const gradeObject = newGrades.find(grade => grade.studentId === student.id); // find busca en newGrades el correspondiente a cada student por su ID
      const grade = gradeObject ? gradeObject.grade : 'N/A'; // si existe nuevo grade usarla, sino usar N/A
      return { ...student, grade }; // retorna nuevo objeto con el grade actualizado
    });
}

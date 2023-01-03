import Student from './student.js'

export default class FreeStudent extends Student {
    constructor(props) {
    super(props) //*Llama al constructor de la clase madre
    }

    approveCourse(newCourse) {
    // (Esto es por si ya aprobamos el curso).Recorremos el array de cursos aprobados y  si en alguna iteracion coincide el nombre de un curso con el nuevo que queremos aprobar, cursoVisto = true
    const cursoVisto = this.approvedCourses.some((curso) => {
        return curso.name === newCourse.name;
    })
// usamos un condicional donde si cursoVisto = true y nos de una advertencia, si no que continue y agregue el curso
    if (cursoVisto){
        console.warn('Este curso ya estaba aprobado');
    if (newCourse.isFree){
        this.approvedCourses.push(newCourse)
    } else {
        console.warn(`Lo sentimos ${this.name}, sólo puedes tomar cursos gratis`)
    }
    }
}
}
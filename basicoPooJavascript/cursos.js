export class Curso{
    constructor({
        nameCourse,
        clases = [],
        teacher,
    }){
        this.nameCourse = nameCourse;
        this.clases = clases;
        this.teacher = teacher;
    }
    agregarClase(nuevaClase){
        this.clases.push(nuevaClase)
    }
    removerUltimoClase(){
        this.clases.pop()
    }
}

export default Curso;

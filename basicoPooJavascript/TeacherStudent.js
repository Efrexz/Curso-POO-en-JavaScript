import Student from "./student.js";
import Comment from "./comment.js";

export class TeacherStudent extends Student{
    constructor(propiedades){
        super(propiedades);
    }
    publicarComentario(nuevoComentario){
        const comentario = new Comment({
            content: nuevoComentario,
            studentName: this.name,
            studentRole: "Profesor"
        });

        comentario.publicar();
    }
}


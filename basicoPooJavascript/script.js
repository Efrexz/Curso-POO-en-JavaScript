import { Student } from "./student.js";
import { Curso } from "./cursos.js";
import FreeStudent from './freeStudent.js';
import BasicStudent from './basicStudent.js';
import ExpertStudent from "./expertStudent.js";
import Comment from "./comment.js";
import { TeacherStudent } from "./TeacherStudent.js";


const cursoDesarrolloWeb = new Curso({
    nameCourse : "Curso De Desarrollo Web",
    teacher : "JuanDC",
    clases : ["Clase Programacion Basica",
    "Clase Html y CSS Basico","Clase JavaScript Basico"],
});

const cursoDesarrolloGames = new Curso({
    nameCourse : "Curso Desarrollo De VideoJuegos",
    teacher: "Pedro Fernandez",
    clases : ["UnrealEngine Basico",
    "Modelado3D","Desarrollo MultiPlataformas"],
});

const cursoIntroduccionProgramacion = new Curso({
    nameCourse: "Curso Introduccion a la programacion",
    teacher: "Freddy Vega",
    clases: ["Que son los objetos","Que son las clases","Que es una variable","Que es un array"]
})


const student1 = new Student({
    name: "Efrain Andrade",
    username: "Efrexz",
    facebook: "EfrainQuintero",
    learningPaths: [cursoDesarrolloWeb, cursoDesarrolloGames],
    approvedCourses : cursoIntroduccionProgramacion
});

const Freddy = new TeacherStudent({
    name: "Freddy Vega",
    username : "Freddier",
    email: "Freddy@platzi.com",
})

Freddy.publicarComentario("Me gusto el curso");
student1.publicarComentario("Huele feo");


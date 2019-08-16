// CODE here for your Lambda Classes

class Person {

    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name} and I am from ${this.location}`);
    };

}

class Instructor extends Person {

    constructor(attr){
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;

    }
    demo(subject){
        console.log(`Today we are learning ${subject}`);
    };

    grade(Student, subject){
        let posNeg = Math.random() < 0.5 ? -1 : 1;
        let score = Math.round((Math.random()* 100) + 1) * posNeg;

        Student.grade =- score;
        console.log(`${Student.name} recieved a ${score} on ${subject} his 
        new grade is now ${Student.grade}`);
        Student.graduate(this, subject);
    };
}

class Student extends Person{

    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }

    listSubjects(){

        this.favSubjects.forEach(function (element){
            console.log(element);
           })
    };

    PRAssignment(subject){

        console.log(`${this.name} has submitted a PR for ${subject}`);
    };

    sprintChallenge(subject){

        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };

    graduate(Teacher, subject){
        if(this.grade > 70)
        console.log(`${this.name} has graduated`);
        else
        Teacher.grade(this, subject);


    }
}

class ProjectManager extends Instructor {

    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;

    }

    standUp(channel){
        console.log(`${this.name} announce to ${channel}, @channel standy times!`);
    }

    debugsCode(Student, subject){
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
    }
}

const patrick = new Instructor({

    name: "Patrick",
    age: 25,
    location: "NYC, NY",
    speciality: "C++",
    favLanguage: "Pig Latin",
    catchPhrase: "uuuuummm",

});

const clarice = new ProjectManager({

    name: "Clarice",
    age: 25,
    location: "Albany, NY",
    speciality: "Java",
    favLanguage: "Latin Latin",
    catchPhrase: "oh no",
    gradClassName: "CS50",
    favInstructor: "Patrick",

});

const martin = new Student({

    name: "Martin",
    age: 25,
    location: "Troy, NY",
    previousBackground: "Line Cook",
    className: "CS101",
    favSubjects: ['HTML','Java','ML','Rust'],
    grade: 55,

});

patrick.speak();
martin.speak();

patrick.demo('math');
patrick.grade(martin, 'Math');

console.log(martin);

martin.listSubjects();
martin.PRAssignment('Math');
martin.sprintChallenge("Being Polite");

clarice.standUp("WEBPT9");
clarice.debugsCode(martin, "Assembly");
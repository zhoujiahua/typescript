interface Style {
    color: string;
}

interface Shape {
    name: string;
}

interface Circle extends Style, Shape {
    radius: number;
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
}

interface Student extends Person {
    cardNumber: number;
}
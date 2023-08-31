/// <reference path="./basic/a.ts">
// console.log(ABC.VERSION);
interface Style {
    color: string;
}

interface Shape {
    name: string;
}

interface Circle extends Style, Shape {
    radius: number;
}
const username: string = 'Roy';

const suma = (a:number, b:number ) =>{
    return a+b;
}

suma(2,2)


class persona {
    
    constructor (public edad: number,public apellido: string)
{}
}


const roy = new persona(21, "tineo");

roy.edad;

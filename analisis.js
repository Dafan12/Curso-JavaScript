const salariosCol = colombia.map(
   function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA-salaryB;
    }
); // Se ordena el array de mayor a menor

function esPar(Numero){
    if(Numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMedia(lista){
    const sumaLista =  lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor ;
        }
        );
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2); //quita los decimales
    if  (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1] ;
        const personaMitad2 = lista[mitad];
        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del 10%

const sliceStart = salariosColSorted.length*0.9;
const sliceEnd = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.slice(sliceStart, sliceEnd);  // slice sirve para copiar una parte del array original sin modificarlo, recibe las posiciones inicial y final que se desean

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col
    }
);
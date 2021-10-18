import pepe from "../../assets/pepe.jpg"
function SumarNumeros(){

    const sumar = (num1, num2) => {
        var suma = num1+num2;

        console.log(suma);
    }
    return (
        <div>
            <h1 style={{color:"blue"}}>Prueba sumar numeros</h1>
            <img src={pepe} alt="pepe"/>
            <button onClick={()=>sumar(2,4)}>Hacer suma</button>
        </div>
    )
}

export default SumarNumeros;
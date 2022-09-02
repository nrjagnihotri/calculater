import React, { useState } from 'react'

const Factonum = () => {
    const [Dado, setdado] = useState('');
    const [resultado, setResultado] = useState();
    var fatorial = 1;
    var primeiroMultipicador = Dado;

    function calcular() {

        for (var i = Dado; i > 1; i--) {
            fatorial = fatorial * i;
            setResultado(fatorial);
        }
        console.log(resultado)
    }
    return (
        <div className='Calculo_Do_Fatorial'>
            <h1>Cálculo do Fatorial</h1><br></br>
            <div >
                <input type="number" required="required" value={Dado} onChange={(e) => setdado(e.target.value)} />
            </div>
            <button className="calcular1" id='calcular' onClick={calcular}>Calcular</button>
            <div className="result" id='resultado' >{typeof resultado === 'number' ? resultado.toFixed(5).replaceAll(".", ",") : resultado}</div>
        </div>
    )

}

export default Factonum
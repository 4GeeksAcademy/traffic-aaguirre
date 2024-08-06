import React, { useState } from "react";




const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const [nuevaLuz, setNuevaLuz] = useState(false);
    const agregarNueva = () => {
        setNuevaLuz(!nuevaLuz);
 
    };

    const getCambioColor = ()=>{
        const color = ["red", "yellow", "green", "purple"];
        const cambioColores = color[Math.floor(Math.random()*color.length)];
        setColor(cambioColores);
    }
   
        return (
            <div className="contenedor">
                <div className="palo"></div>
                <div className="semaforo">
                    <div
                        className={`light ${color === 'red' ? 'red activo' : 'red'}`}
                        onClick={() => setColor('red')}
                    ></div>
                    <div className={`light ${color === 'yellow' ? 'yellow activo' : 'yellow'}`}
                        onClick={() => setColor('yellow')}></div>
                    <div className={`light ${color === 'green' ? 'green activo' : 'green'}`}
                        onClick={() => setColor('green')}></div>


                    {nuevaLuz && (<div className={`light ${color === 'purple' ? 'purple activo' : 'purple'}`} onClick={() => setColor('purple')}></div>)}
                </div>
                <button type="button" onClick={() => agregarNueva(true)}>Luz morada</button>
                <button type="button" onClick={() => setColor(getCambioColor)}>Alternas luces</button>

            </div>
        );
    }

    export default TrafficLight;
import React, { useState } from "react";



const TrafficLight = () => {
    const [color, setColor] = useState("red");

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
            </div>
        </div>

    );
}

export default TrafficLight;
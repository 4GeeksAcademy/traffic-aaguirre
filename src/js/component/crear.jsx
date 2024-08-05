import React, {useState} from "react";




const Crear = () => {
  const [Div, setDiv] = useState(false);

  const handleButtonClick = () => {
    setDiv(!Div);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Nuevo color</button>
      {Div && <div> </div>}
    </div>
  );
};

export default Crear;
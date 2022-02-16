//import { faTable } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const formatoArchivos = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

const TestingDocument = () => {
  
  const onFileChange = (e) => {
    const file = e.target.files[0];

    if(file.size > 5242880) {
      console.log("Supera las 5MB")
      return; 
    }

    console.log(formatoArchivos)

    if(formatoArchivos.indexOf(file.type < 0)) {
      console.log("Formato No Valido")
      return;
    }


    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log(reader.result)  
    };
  }

  
  function getExtensionFromFormato(formato){
    
    switch (formato) {
      case this.formatoArchivos[0]:
        return 'jpeg';
      case this.formatoArchivos[1]:
        return 'png';
      case this.formatoArchivos[2]:
        return 'jpg';
      case this.formatoArchivos[3]:
        return 'pdf';
      default:
        return "NO";
    }
  }

  
  return ( 
    <>
      <input type="file" onChange={onFileChange} />
      getExtensionFromFormato()
      <div>
        <table className="default">

  <tr>

    <th>Hoy</th>

    <th>Mañana</th>

    <th>Jueves</th>

  </tr>

  <tr>

    <td>Soleado</td>

    <td>Mayormente soleado</td>

    <td>Parcialmente nublado</td>

  </tr>

  <tr>

    <td>19°C</td>

    <td>17°C</td>

    <td>12°C</td>

  </tr>

  <tr>

    <td>E 13 km/h</td>

    <td>E 11 km/h</td>

    <td>S 16 km/h</td>

  </tr>

</table>
      </div>
    </>
   );
}
 
export default TestingDocument;
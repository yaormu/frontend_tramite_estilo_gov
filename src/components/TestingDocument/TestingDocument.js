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
    }
  }

  
  return ( 
    <>
      <input type="file" onChange={onFileChange} />


    </>
   );
}
 
export default TestingDocument;
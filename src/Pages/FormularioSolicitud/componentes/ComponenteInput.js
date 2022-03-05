import React from 'react'
import { Input, Label, GrupoInput, LeyendaError, LeyendaExito } from "../elementos/Formularios"

const ComponenteInput = (
    {
        estado, 
        cambiarEstado, 
        tipo, 
        label, 
        placeholder, 
        name, 
        leyendaError,
        leyendaExito, 
        expresionRegular, funcion}) => {
             
    const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}
    
    const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'})
			} else {
				cambiarEstado({...estado, valido: 'false'})
			}
		}else {
            cambiarEstado({...estado, valido: ''})
        }
        
        if(funcion) {
            funcion();
        }
	}
    

    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}> {label} </Label>
            <GrupoInput> 
                <Input 
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name} 
                    value={estado.campo}
                    onChange={onChange}
                    //onKeyDown={validacion}
                    //onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    data-toggle="tooltip" 
                    title={placeholder}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default ComponenteInput;
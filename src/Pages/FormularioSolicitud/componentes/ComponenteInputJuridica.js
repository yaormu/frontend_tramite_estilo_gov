import React from 'react'
import { InputJuridica, Label, GrupoInput, LeyendaError } from "../elementos/Formularios"

const ComponenteInputJuridica = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
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
		}
        
        if(funcion) {
            funcion();
        }
	}
    

    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}> {label} </Label>
            <GrupoInput> 
                <InputJuridica
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name} 
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
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

export default ComponenteInputJuridica;
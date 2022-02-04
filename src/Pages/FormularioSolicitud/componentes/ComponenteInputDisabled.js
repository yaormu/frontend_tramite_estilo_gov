import React from 'react'
import { InputDisabled, Label, GrupoInput, LeyendaError } from "../elementos/Formularios"

const ComponenteInputDisabled = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
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
                <InputDisabled
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
                    disabled={true}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default ComponenteInputDisabled;
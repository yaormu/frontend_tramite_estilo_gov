import React from "react";

import {
  Formulario,
  Label,
  Input,
  GrupoInput,
  LeyendaError,
} from "../FormularioSolicitud/elementos/Formularios";

const RtaTramite = () => {
  return (
    <main>
      <Formulario action="">
        <div>
          <GrupoInput>
            <Label htmlFor="">Número de Radicado</Label>
            <Input type="text" placeholder="Ej. 1421326" />
          </GrupoInput>
          <LeyendaError>
            Este campo es requerido, y solo acepta números
          </LeyendaError>
        </div>
        <div>
          <Label>
            
          </Label>
        </div>
      </Formulario>
    </main>
  );
};
export default RtaTramite;

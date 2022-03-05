import styled, {css} from 'styled-components';

const colores = {
    borde: "#3366CC",
    error: "#A80521",
    exito: "#069169"
}

const Formulario = styled.form `
    display: flex;
`;

 const Label = styled.label `
    display: block;
    font: normal 500 16px Work Sans;
    line-height: 1.5;
    margin: 0;
    color: #4B4B4B;
    padding: padding: 22px 0px 0px 0px;
    cursor: pointer;
    text-align: left;

    ${props => props.valido === 'false' && css `
        color: ${colores.error};
    `}
`;

const GrupoInput = styled.div `
    position: relative;
    z-index: 0;
`;

const Input = styled.input `
    display: flex;
    align-items: row;
    gap: 20px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 1px solid #BABABA;
    

    &:focus {
        border: 1px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    } 

    
    ${props => props.valido === 'true' && css `
        border: 1px solid ${colores.exito} !important;
        color: ${colores.exito};
    `}

    ${props => props.valido === 'false' && css `
        border: 1px solid ${colores.error} !important;
    `}
`;

const InputDisabled = styled.input `
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 1px solid #BABABA;
    

    &:focus {
        border: 1px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    } 

    ${props => props.valido === 'true' && css `
        border: 1px solid #BABABA;
    `}

    ${props => props.valido === 'false' && css `
        border: 1px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p `
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    
    
    ${props => props.valido === 'true' && css `
        color: ${colores.exito} !important;
    `}

    ${props => props.valido === 'false' && css `
        display: block;
    
    `}
`;


const LeyendaExito = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.exito};
    
    ${props => props.valido === 'false' && css `
    color: ${colores.error};
    `}
    
    ${props => props.valido === 'true' && css `
        color: ${colores.exito} !important;
    `}

    
`;



const ContenedorTerminos = styled.div `
   padding: 0;    
`;

const ContenedorBotonCentrado = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
`;

const Boton = styled.button `
    display: flex;
    background-color: #3366CC;
    border: 1.5px solid #3366CC;
    border-radius: 30px;
    color: #ffff;
    font: normal bold 15px "Works Sans", sans-serif;
    margin: 0px 0px 100px 0px;
    padding: 15px 5px 15px 5px;
    text-transform: uppercase;
    white-space: pre-line;
    width: 30%;
    /*
    display: flex;
    height: 40px;
    line-height: 30px;
    width: 30%;
    background: #004884;
    color: #fff;
    font: normal 600 16px/1.55px "Work Sans", sans-serift;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: .1s ease all;
    */

    a {
        color: #ffff;
        font: normal bold 15px/14px "Works Sans", sans-serif;
    }

    &:hover {
        background-color: #004884;
        border-color: #004884;
    }
`;

const MensajeExito = styled.p `
    width: 100%;
    height: 45%;
    text-align: center;
    line-height: 45px;
    background: #069169;
    padding: 10px 0px 0px 0px;
    margin: 12px 0px 0px 0px;
    border-radius: 3px;
    grid-column: span 2;
    
    p {
        padding: 10px;
        text-align: center;
        color: #FFFF;
    }
    b {
        margin-left: 10px;
    }
    
`;

const MensajeError = styled.div `
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 5px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        padding: 2px 0px 2px 0px;
        text-align: center;
        color: #FFFF;
    }
    b {
        margin-left: 10px;
    }
`;


const Select = styled.select `
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 1px solid #BABABA;

    &:focus {
        border: 1px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    } 

    ${props => props.valido === 'true' && css `
        border: 1px solid #BABABA;
    `}

    ${props => props.valido === 'false' && css `
        border: 1px solid ${colores.error} !important;
    `}
`;


export { 
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    InputDisabled,
    LeyendaError, 
    LeyendaExito,
    ContenedorTerminos,
    ContenedorBotonCentrado, 
    Boton, 
    MensajeExito,
    MensajeError ,
    Select
};
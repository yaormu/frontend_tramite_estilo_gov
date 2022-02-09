import React from 'react';
import styled from 'styled-components';

const Modal = ({
    children, 
    estado, 
    cambiarEstado, 
    titulo="Alerta", 
    mostrarHeader,
    mostrarOverlay,
    posicionModal,
    padding,
    width,
    minheight,

}) => {
    return (
    <>
        {
            estado &&
            <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                <ContenedorModal padding={padding} width={width} min-height={minheight}>
                    {
                        mostrarHeader &&
                            <EncabezadoModal>
                                <h3>{titulo}</h3>
                            </EncabezadoModal>
                    }
                    <BotonCerrar onClick={() => cambiarEstado(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </BotonCerrar>
                    {children}
                    
                </ContenedorModal>
            </Overlay> 
        }
    </>
    );
}
 
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'};
    padding: 40px;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
    justify-content: center;
`

const ContenedorModal = styled.div`
    width: ${props => props.width ? props.width : '400px'};
    min-height: ${props => props.minheight ? props.minheight : '200px'};
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgb(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: ${props => props.padding ? props.padding : '20px'};
`

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-botom: 20px;
    padding-botom: 20px;
    border-botom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    
    width: 30px;
    height: 60px;
    border: none;   
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`
import React from 'react';
import '../styles/general.css';
import '../styles/glass.css';
import '../styles/botones.css';
import '../styles/inputs.css';
import '../styles/CardCuadrada.css';
import iconoUnidad from '../assets/icons/iconoUnidadDetalle.png'
import Operador from '../assets/icons/iconoOperador.png'
import Receptor from '../assets/icons/iconoReceptor.png'
import Trafico from '../assets/icons/iconoTrafico.png'
import iconoRuta from '../assets/icons/iconoRuta.png'
import iconoDonador from '../assets/icons/iconoDonador.png'

function CardCuadrada(props) {
    const iconos = [Operador, Receptor, Trafico, iconoDonador, iconoUnidad, iconoRuta]
    let detalles={}

    switch(props.cardType){
        case "usuario":{
            let descripcion;
            if(props.data.idDriver!=null){ 
                 descripcion = "Operador" 
                 
            }
            else if(props.data.idReceiver!=null){ 
                descripcion = "Receptor" 
           }
           else if(props.data.idTrafficCoordinator!=null){ 
                descripcion = "Trafico" 
            }
           else { 
                descripcion = "Sin Cargo" 
           }
            detalles = {
                cardHeader: `${props.data.nombre} ${props.data.apellidoP} ${props.data.apellidoM}`,
                cardDescription: descripcion,
                cardIcon: descripcion
            };
            break;
        }
        case "donador":{
            detalles = {
                cardHeader: props.data.nombre,
                cardDescription: props.data.ubicacion,
                cardIcon: "Donador"
            };
            break;
        }
        case "unidad":{
            detalles = {
                cardHeader: props.data.placas,
                cardDescription: props.data.descripcionUnidad,
                cardIcon: "iconoUnidad"
            };
            break;
        }
        case "ruta":{
            detalles = {
                cardHeader: props.data.nombreRuta,
                cardDescription: `${props.data.numPuntosRecoleccion} puntos de recolección`,
                cardIcon: "iconoRuta"
            };
            break;
        }
            
        default:
            console.log('No hay detalles para mostrar')
    }


    function mostrarDetalles(){
        switch(props.cardType){
            case "usuario":
                props.setUserId(props.data.idUser)
                props.setCargo(detalles.cardDescription)
                break;
            case "donador":
                props.setDonorId(props.data.idDonor);
                break;
            case "unidad":
                props.setVehicleId(props.data.idVehicle);
                break;
            case "ruta":
                props.setRouteId(props.data.idRoute);
                break;
            default:
                console.log('No hay id por asignar')
        }
        props.setModalVisibility(true)
    }

    function checkIcon(){
        switch(props.cardType){
            case "usuario":
                if(detalles.cardDescription=='Operador'){
                    return 0
                }
                if(detalles.cardDescription=='Receptor'){
                    return 1
                }
                if(detalles.cardDescription=='Trafico'){
                    return 2
                }
                break;
            case "donador":
                return 3
            case "unidad":
                return 4
            case "ruta":
                return 5
    }
    }
    
    return(
        <div className="cardCuadrada lightGlass" onClick={mostrarDetalles}>
            <p className="manrope4 bold">{detalles.cardHeader}</p>
            <p className="manrope5">{detalles.cardDescription}</p>
            <div className="cardCuadrada-cont-img">
                <img src={iconos[checkIcon()]} alt="icon"/>
            </div>
            
        </div>
    )
}

export default CardCuadrada;
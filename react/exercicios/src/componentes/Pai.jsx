import React from 'react'
import Filho from './Filho'

export default props => {
    <div>
        <h1>{props.nome} {props.sobrnome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrnome = {props.sobrenome} />
            <Filho {...props} />
            <Filho {... props} nome="Carla" />"
        </ul>
    </div>
}
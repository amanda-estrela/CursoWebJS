import React, { Fragment } from "react";

export default props => 
    <Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>


//pode usar no lugar de Fragment:
//React.Fragment - não importa no inicio do arquivo
//<div>
//envolver em um array, mas cada tag precisa ter uma key unica(ex: <h1 key='h1'>)
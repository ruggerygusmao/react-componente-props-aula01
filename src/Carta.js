import React from "react";

export default function Carta(props){
    return (
        <div>
            <h1>Olá {props.remetente} - {props.destino}</h1>
            <p>
                Estou escrevendo essa carta por causa da <br />
                atividade que os alunos vão fazer, okay. <br />
                Não desiste, continue fazendo as atividades, treinando e praticando.<br />
                O céu é o limite!
            </p>
        </div>
   )
}
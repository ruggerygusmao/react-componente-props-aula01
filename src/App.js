import "./App.css"
import Carta from "./Carta.js";

export default function App() {
  return (
    <div className="App">
      <h1>Aula de React - props de um componente</h1>
      <Carta remetente="Joana" destino="Minas Gerais" />
    </div>
  );
}
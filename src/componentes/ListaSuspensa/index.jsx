import './lista-suspensa.estilos.css'
import { Label } from '../Label'

export const ListaSuspensa = ({ itens, ...props }) => {
    return (
        <select className="lista-suspensa-form" id="lista-suspensa" name="opcao" defaultValue="" {...props}>
            <option value="" disabled>Selecione...</option>
            {itens.map((item) => {
                return (
                    <option key={item.id} value={item.id}>{item.nome}</option>
                )
            })}
        </select>
    )
}

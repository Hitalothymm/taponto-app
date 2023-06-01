import { IProduto } from "../../components/Screen/Cardapio/types";
import { PedidoType } from "./OrderType";

export type CantinaType = {
 id: string;
 idCampus: string;
 nome: string;
 descricao: string;
 cardapio: IProduto[];
 pedidos: PedidoType[];
}
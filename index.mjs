import { elementPedido } from "./src/src/models/view/dom.mjs";
import { Pedido } from "./src/src/models/Pedido.mjs";
import { Produto } from "./src/src/models/Produto.mjs";

const prodt1 = new Produto('Fusca preto', 40_000 , true, 1);
const prodt2 = new Produto('Kombi ciano', 10_000, false, 0);
const prodt3 = new Produto('Chevette verde', 6_500, true, 2 );
const prodt4 = new Produto('Opala grafite', 20_000, true, 1 );
const prodt5 = new Produto('Maverick vermelho', 35_000, true, 5);


const pdAnderson = new Pedido("20220001", "Anderson");
const pdLeandro = new Pedido("20220001", "Leandro");

pdAnderson.adicionarProduto(prodt2);
pdAnderson.adicionarProduto(prodt5);
pdAnderson.adicionarProduto(prodt1);

pdLeandro.adicionarProduto(prodt3);
pdLeandro.adicionarProduto(prodt4);

const pedidos = [pdAnderson, pdLeandro];
const pedidosEl = document.getElementById("pedidos")

pedidos.forEach(pedido =>{
    pedidosEl.appendChild(elementPedido(pedido))
})
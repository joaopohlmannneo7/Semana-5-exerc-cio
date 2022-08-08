import {Produto} from "./Produto.mjs";

export class Pedido {
    constructor(numpedido, nomeCliente){
        this.numeropedido = numpedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
    }

        adicionarProduto(produto){
            const ehProduto = produto instanceof Produto;
        if(ehProduto){
            this.listaProdutos.push(produto);
        }
    }

    CalcularTotal(){
        let total = this.listaProdutos.reduce((ant, atual) =>{
            return ant + atual.preco * atual.quantidade;
        }, 0);

        return total;
    }

    

}


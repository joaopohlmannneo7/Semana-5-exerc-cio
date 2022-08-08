function elementProduto (produto){
    const el = document.createElement('li')
    el.innerText = `${produto.nome} - ${produto.quantidade} - ${produto.preco.toLocaleString("pt-BR", {style: "currency", currency : "BRL"})}`;
    return el;
}

function printProds(list){
    const labelEl = document.createElement("label");
    labelEl.htmlFor= "produtos";
    labelEl.innerText = "produtos";
    // <label for ="produtos">produtos</label>
    const listEl = document.createElement("ul")
    // <ul name ="produtos"></ul>
    listEl.name = "produtos";
    list.forEach(prod =>{
        listEl.appendChild(elementProduto(prod))
    });

    return [labelEl, listEl]
}

export function elementPedido(pedido){
    const el = document.createElement("li")
    el.innerHTML = /*html*/ `
    <p>PEDIDO No. ${pedido.numero}</p>
    <p>Data:${pedido.dataPedido}</p>
    <p>Cliente: ${pedido.nomeCliente}</p>
    <p>Total:${formtaCurrency(pedido.calcularTotal())}</p>
    <p>Está pago?:${pedido.estaPago ? "Sim" : "Não"}</p>
    `;
    const [label, lista] = printProds(pedido.listaProdutos);

    el.appendChild(label);
    el.appendChild(lista);
    return el;
}
// console.log(1289.55.toLocaleString("pt-BR", {style: "currency", currency : "BRL"}))
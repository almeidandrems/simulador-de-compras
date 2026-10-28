function simularCompra() {
// Preco dos produtos
    let precoBurguer = 19.99;
    let precoBatata = 9.99;
    let precoRefri = 4.99;
    
// Chama as quantidades ao usuário
    let qtdBurguer = Number(prompt("🍔 X-Burguer — R$19,99\nQuantidade de hambúrgueres:"));
    let qtdBatata = Number(prompt("🍟 Batata Frita — R$9,99\nQuantidade de batatas fritas:"));
    let qtdRefri = Number(prompt("🥤 Refrigerante — R$4,99\nQuantidade de refrigerantes:"));

    if (qtdBurguer ===0 && qtdBatata ===0 && qtdRefri ===0) {
        alert(('simularCompra', "Você não comprou nenhum produto."));
        return;
    }

 // Calculo dos valores por produto
    let valorBurguer = precoBurguer * qtdBurguer;
    let valorBatata = precoBatata * qtdBatata;
    let valorRefri = precoRefri * qtdRefri;

 // Cálculo do total geral
    let totalGeral = valorBurguer + valorBatata + valorRefri;
    
// Mostra a mensagem do resumo da compra    
    let resumo = "--- RESUMO DA COMPRA ---\n\n";
    resumo += "🍔 X-Burguer: " + qtdBurguer + "x = R$ " + valorBurguer + ",00\n";
    resumo += "🍟 Batata Frita: " + qtdBatata + "x = R$ " + valorBatata + ",00\n";
    resumo += "🥤 Refrigerante: " + qtdRefri + "x = R$ " + valorRefri + ",00\n";
    resumo += "\nTotal da Compra:  💵 " + totalGeral ;

    // Exibe o resultado na tela
    alert(resumo);

}
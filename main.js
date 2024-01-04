function calcularNivel() {
    // Obter valores de vitórias e derrotas do usuário
    var vit = parseInt(document.getElementById("vit").value);
    var der = parseInt(document.getElementById("der").value);

    // Calcular saldo de vitórias e determinar o nível
    var saldo = vit - der;
    var nivel = "";

    if (vit < 10) {
        nivel = "Ferro";
    } else if (vit >= 11 && vit <= 20) {
        nivel = "Bronze";
    } else if (vit >= 21 && vit <= 50) {
        nivel = "Prata";
    } else if (vit >= 51 && vit <= 80) {
        nivel = "Ouro";
    } else if (vit >= 81 && vit <= 90) {
        nivel = "Diamante";
    } else if (vit >= 91 && vit <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibir o resultado no HTML
    document.getElementById("resultado").innerHTML = `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`;
}

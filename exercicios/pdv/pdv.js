function calcularDesconto() {
    let total = Number(document.frmPdv.txtTotal.value);
    let porcentagem = Number(document.frmPdv.txtPorcentagem.value);

    let desconto = (total * porcentagem) / 100;
    let totaldesconto = total - desconto;

    document.frmPdv.txtDesconto.value = desconto.toFixed(2);
    document.frmPdv.txtdesconto.value = totaldesconto.toFixed(2);
}

function calcularTroco() {
    let totalDesconto = Number(document.frmPdv.txtdesconto.value);
    let valorPago = Number(document.frmPdv.txtValorPago.value);

    let troco = valorPago - totalDesconto;

    document.frmPdv.txtTroco.value = troco.toFixed(2);
}

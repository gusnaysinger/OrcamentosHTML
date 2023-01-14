var finalPrice = 0.00;

function add(){
    let itemName = $('#item').val();
    let itemPrice = parseFloat($('#price').val());
    
    if(!itemName){
        alert('Você deve digitar a descrição');
        $('#item').focus();
        return;
    }
    if(!itemPrice){
        alert('Você deve digitar o preço');
        $('#price').focus();
        return;
    }

    let novaLinhaTabela = `
        <tr>
            <td>${itemName}</td>
            <td class="text-right">
                R$ ${itemPrice.toFixed(2).replace('.',',')}
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-sm btn-danger text-center" onclick="removeItem(this, ${finalPrice})">
                X
                </button>
            </td>
        </tr>
    `;
    $('#tabela').append(novaLinhaTabela);

    //Limpa inputs
    $('#item').val("")
    $('#price').val("")

    $('#item').focus();

    //Valor total
    finalPrice = finalPrice + itemPrice;
    $('#total').val(finalPrice.toFixed(2).replace('.',','));
}

function removeItem(botao, itemPrice){
    $(botao).closest('tr').remove();
    //finalPrice = finalPrice - parseFloat(itemPrice).toFixed(2);
    finalPrice = finalPrice - parseFloat(itemPrice);
    $('#total').val(finalPrice.toFixed(2).replace('.',','));
}
//Event button listener
$("button").on("click", updateTotal);

function updateTotal() {

    //variables and calculations
    var milk_amt = $("#milk_amount").val();
    var cereal_amt = $("#cereal_amount").val();
    var milk_tot = milk_amt*2.99;
    var cer_tot = cereal_amt*2.99
    var txs = (milk_tot + cer_tot) * 0.09;
    var tot = (milk_tot + cer_tot) + txs;

    //round values to 2 decimal places
    milk_tot = milk_tot.toFixed(2);
    cer_tot = cer_tot.toFixed(2);
    txs = txs.toFixed(2);
    tot = tot.toFixed(2);

    //display calculations
    $("#m_tot").html(`Price: $${milk_tot}`);
    $("#c_tot").html(`Price: $${cer_tot}`);
    $("#taxes").html(`Taxes (9%): $${txs}`);
    $("#total").html(`Total: $${tot}`);

}
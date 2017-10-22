function bun(images, size, quantity, flavorA, flavorB, price, flavorOriginal) {
    this.size = size;
    this.quantity = quantity;
    this.flavorA = flavorA;
    this.flavorB = flavorB;
    this.price = price;
    this.flavorOriginal = flavorOriginal;
    this.images = images;
}

$(document).ready(function(){

    var cartItems = JSON.parse(localStorage.getItem("cartArray"));

    if (cartItems == null){

    } else {
        console.log(cartItems);
        var cartLength = cartItems.length;
        $("#amountincart").append(cartLength);
        for (i=0; i<cartLength; i++) {
            $(".cart_container").append('<div id=cart_container' + [i] +'> </div>');
                $('<img />', {
                    src: cartItems[i].images,
                    class: 'finalpics'
                }).appendTo($('#cart_container'+[i]));
                $('#cart_container'+[i]).append('<h9 id=quantCart>' + (cartItems[i].quantity) +'</h9>');
                $('#cart_container'+[i]).append('<h12 id=sizeCart>' + (cartItems[i].size) +'</h12>');
                $('#cart_container'+[i]).append('<h13 id=flavorOrigCart>' + cartItems[i].flavorOriginal +'</h13>');
                $('#cart_container'+[i]).append('<h10 id=flavorAcart>' + cartItems[i].flavorA +'</h10>');
                $('#cart_container'+[i]).append('<h10 id=flavorBcart>' + cartItems[i].flavorB +'</h10>');
                $('#cart_container'+[i]).append('<h11 id=priceCart>' + cartItems[i].price +'</h11>');
                //$('#cart_container'+[i]).append(cartItems[i].price);
                $('#cart_container'+[i]).append('<button class=cya id=' + [i] +'> Remove </button>' + "<br><br><br>");
        }
    }

        $(".addtocart").click(function(){
            var quant = $("#numbers").val();
            var flava1 = $("#flavor1").val();
            var flava2 = $("#flavor2").val();
            var sizes = $("input[name='a']:checked").val();
            var flavorOrig = $("#mainname").text();
            var image;
            if (sizes === "Individual"){
                cost = 0.99;
                flava1="N/A";
                flava2="N/A";
                image = "images/MAPLEAPPLEPECAN.jpg";
            }
            else if (sizes === "6-Pack"){
                cost = 4.99;
                image = "images/6pack.jpg";
            }
            else if (sizes === "12-Pack"){
                cost = 8.99;
                image = "images/12pack.jpg";
            }
            var totalprice = quant*cost;

            console.log(sizes);
            console.log(quant);
            console.log(flava2);
            console.log(flava1);
            console.log(cost);
            console.log(totalprice);
            console.log(flavorOrig);

        var desiredBun = new bun(image, sizes, quant, flava1, flava2, totalprice, flavorOrig);
        var oldSelections = JSON.parse(localStorage.getItem("cartArray")) || [];
        oldSelections.push(desiredBun);
        localStorage.setItem("cartArray", JSON.stringify(oldSelections));
        $("#amountincart").html(oldSelections.length);
        });

        $("#flav1").hide();
        $("#flavor1").hide();
        $("#flavor2").hide();

        $("input[name='a']").change(function(){
            if (this.value==='Individual') {
                $("#maple").attr("src", "images/MAPLEAPPLEPECAN.jpg");
                $("#flav1").hide();
                $("#flavor1").hide();
                $("#flavor2").hide();
                console.log("clickone");
            }
            else if (this.value==='6-Pack') {
                $("#maple").attr("src", "images/6pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
                console.log("clickone");
            }
            else if (this.value==='12-Pack') {
                $("#maple").attr("src", "images/12pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
                console.log("clickone")
            }

            })

        $(".cya").click(function(){
            var arrayPosition = $(this).attr('id');
            cartItems.splice(arrayPosition, 1);
            localStorage.setItem("cartArray", JSON.stringify(cartItems));
            location.reload();

          })

})



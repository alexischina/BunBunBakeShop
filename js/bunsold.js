function bun(images, size, quantity, flavorA, flavorB, price) {
    this.size = size;
    this.quantity = quantity;
    this.flavorA = flavorA;
    this.flavorB = flavorB;
    this.price = price;
    this.images = images;
}

$(document).ready(function(){

    var newbun = JSON.parse(localStorage.getItem("savedNewBun"));

    if (newbun == null){

    } else {
    ("flavorA: " + newbun.flavorA);
    $(".selection_name").append(newbun.flavorA);

    ("quantity: " + newbun.quantity);
    $(".selection_name2").append(newbun.flavorB);

    ("quantity: " + newbun.quantity);
    $(".selection_quant").append(newbun.quantity);

    ("size: " + newbun.size);
    $(".selection_size").append(newbun.size);

    ("price: " + newbun.price);
    $(".selection_price").append(newbun.price);

    $("#selection_image").attr("src",newbun.images);

}

        $(".addtocart").click(function(){
            var quant = $("#numbers").val();
            var flava1 = $("#flavor1").val();
            var flava2 = $("#flavor2").val();
            var sizes = $("input[name='a']:checked").val();
            var image;
            if (sizes === "Individual ($0.99)"){
                cost = 0.99;
                flava1="N/A";
                flava2="N/A";
                image = "images/MAPLEAPPLEPECAN.jpg";
            }
            else if (sizes === "6-Pack ($4.99)"){
                cost = 4.99;
                image = "images/6pack.jpg";
            }
            else if (sizes === "12-Pack ($8.99)"){
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

        var desiredBun = new bun(image, sizes, quant, flava1, flava2, totalprice);

        localStorage.setItem("savedNewBun", JSON.stringify(desiredBun));
        $("#amountincart").append(quant);
        });

        $("#flav1").hide();
        $("#flavor1").hide();
        $("#flavor2").hide();

        $("input[name='a']").change(function(){
            if (this.value==='Individual ($0.99)') {
                $("#maple").attr("src", "images/MAPLEAPPLEPECAN.jpg");
                $("#flav1").hide();
                $("#flavor1").hide();
                $("#flavor2").hide();
                console.log("clickone");
            }
            else if (this.value==='6-Pack ($4.99)') {
                $("#maple").attr("src", "images/6pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
                console.log("clickone");
            }
            else if (this.value==='12-Pack ($8.99)') {
                $("#maple").attr("src", "images/12pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
                console.log("clickone")
            }

            })

        $(".remove").click(function(){
            localStorage.removeItem("savedNewBun");
            $(".selection_name").remove();
            $(".selection_name2").remove();
            $(".selection_size").remove();
            $(".selection_quant").remove();
            $(".selection_price").remove();
            $("#selection_image").attr('src','#');

          })

})



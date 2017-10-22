// creates constructor for different potential bun selections
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

    // Sets up the following to run only when there are items in the cart
    if (cartItems == null){

    } else {
        console.log(cartItems);
        var cartLength = cartItems.length;
        // Adds the length of the array to area above the shopping cart icon to indicate how many items are in the cart
        $("#amountincart").append(cartLength);
        // For loop that allows multiple items to be added to the cart
        for (i=0; i<cartLength; i++) {
            $(".cart_container").append('<div id=cart_container' + [i] +'> </div>');
                // Appends the following elements to the cart after user selects them
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
                $('#cart_container'+[i]).append('<button class=cya id=' + [i] +'> Remove </button>' + "<br><br><br>");
        }
    }
        // On clicking the add to cart button, the following occurs
        $(".addtocart").click(function(){
            var quant = $("#numbers").val();
            var flava1 = $("#flavor1").val();
            var flava2 = $("#flavor2").val();
            var sizes = $("input[name='a']:checked").val();
            var flavorOrig = $("#mainname").text();
            var image;
            // Calculates total cost per cart entry by multiplying the quantity of an item by the price of a single item
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
            // Calculates total cost per cart entry by multiplying the quantity of an item by the price of a single item
            var totalprice = quant*cost;

        //creates new bun from the variables user chooses
        var desiredBun = new bun(image, sizes, quant, flava1, flava2, totalprice, flavorOrig);
        //places selected variables into an array in the local storage
        var oldSelections = JSON.parse(localStorage.getItem("cartArray")) || [];
        oldSelections.push(desiredBun);
        localStorage.setItem("cartArray", JSON.stringify(oldSelections));
        $("#amountincart").html(oldSelections.length);
        });

        //Hides dropdowns for selecting additional flavors when page initially loads
        $("#flav1").hide();
        $("#flavor1").hide();
        $("#flavor2").hide();

        //Changes image based on which radio button is selected on Flavors Detail page
        $("input[name='a']").change(function(){
            if (this.value==='Individual') {
                $("#maple").attr("src", "images/MAPLEAPPLEPECAN.jpg");
                $("#flav1").hide();
                $("#flavor1").hide();
                $("#flavor2").hide();
            }
            else if (this.value==='6-Pack') {
                $("#maple").attr("src", "images/6pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                //Shows dropdows for selecting additional flavors when a half dozen of buns is selected
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
            }
            else if (this.value==='12-Pack') {
                $("#maple").attr("src", "images/12pack.jpg");
                $("mainname").attr("src", "Maple Pecan (1/2 Dozen)");
                //Shows dropdows for selecting additional flavors when a half dozen of buns is selected
                $("#flav1").show();
                $("#flavor1").show();
                $("#flavor2").show();
            }

            })

        // Allows Remove buttons to delete their corresponding items in the Cart page
        $(".cya").click(function(){
            var arrayPosition = $(this).attr('id');
            cartItems.splice(arrayPosition, 1);
            localStorage.setItem("cartArray", JSON.stringify(cartItems));
            location.reload();

          })

})



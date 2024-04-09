var items = [];

document.querySelector("input[type=submit]")
    .addEventListener("click", ()=> {
        var productName = document.querySelector("input[name=nome_produto]")
        var productPrice = document.querySelector("input[name=valor_produto]")

        if (productName.value == "") {
            productName.value = "Produto" 
        }

        if (productPrice.value == ""){
            productPrice.value = 0;
        }

        items.push({
            nome: productName.value,
            price: productPrice.value
        });

        let productList = document.querySelector(".products")
        let sum = 0;
        productList.innerHTML = "";
        items.map(function(product){
            sum += parseFloat(product.price);
            productList.innerHTML += `
            <div class="single_product">
                <h3 class="product_name">` + product.nome + `</h3>
                <h3 class="product_price">R$ ` + parseFloat(product.price).toFixed(2) + `</h3>
            </div>
            `;
        });

        productName.value = "";
        productPrice.value = "";

        document.querySelector(".total").innerHTML = "<h1>Total = R$ " + sum.toFixed(2) + "</h1>"
    });
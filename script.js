let productlist = Shopping.getElementById('productlist');

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;
        products.forEach((product) => {

            let productitem = shopping.createElement('div');
            let title = shopping.createElement('h1');
            let brand = shopping.createElement('h3');
            let description = shopping.createElement('p');
            let price = shopping.createElement('div');
            let category = shopping.createElement('div');
            let rating = shopping.createElement('div');
            let img = shopping.createElement('img');
            title.innerHTML = `${product.title}`
            brand.innerHTML = `${product.brand}`
            description.innerHTML = `${product.description}`
            price.innerHTML = `${product.price}`
            img.setAttribute('src', product.thumbnail);
            img.style.width = '250px';
            img.style.height = '250px';
            productitem.appendChild(img);
            productitem.appendChild(title);
            productitem.appendChild(brand);
            productitem.appendChild(price);
            productitem.appendChild(rating);
            productitem.appendChild(category);
            productitem.appendChild(description);
            productlist.appendChild(productitem);
        });
    })
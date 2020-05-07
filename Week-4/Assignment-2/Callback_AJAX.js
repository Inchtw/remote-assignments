function ajax(src, callback){
    var cal = new XMLHttpRequest();
    cal.onreadystatechange =function(){
    if(cal.readyState === 4 ){
        let content = JSON.parse(cal.responseText);
        callback(content);
    }
}
    cal.open('GET',src);
    cal.send();
    
}
function render(data){

    // console.dir(data); make sure data有傳過來
    for( var i=0 ; i<data.length ; i++ ){
        let box = document.createElement('div');
        box.className = "item"
        let b_name = document.createElement('h3');
        b_name.innerHTML = "品名： " + data[i].name;
        let b_price = document.createElement('h4');
        b_price.innerHTML = "價格： " + data[i].price;
        let des = document.createElement('p');
        des.innerHTML = data[i].description

        // createdElement.innerHTML = "品名： " + data[i].name + "<br>"+ "價格： " + data[i].price + "<br>"+ data[i].description;
        box.appendChild(b_name );
        box.appendChild(b_price );
        box.appendChild(des);
        document.querySelector('.show').appendChild(box);
    }
    }
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
    }); // you should get product information in JSON format and render data in the page

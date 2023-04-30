window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)

    //call api load lên giao diện 
    
}
function displayDetail(arrCategoryShoes){
    var indexID=-1;
    for (var index=0;index<arrCategoryShoes.length;index++)
    {
        var typeShoe=arrCategoryShoes[index];
        if (typeShoe.id===idDetail)
        {
            indexID=index;break;
        } 

        if (indexID!==-1){
           renderDetail(typeShoe[indexID])
        }
    }
}

function detailShoe(){
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id='+myParam,
        method:'GET',
        ResponseType:JSON,
    })
    promise.then(function(result){
        
        var arrayDetail=result.data.content;
        displayDetail(arrayDetail);
    })
    promise.catch(function(error){
        console.log(error)
    })
}

function renderDetail(arrCategoryShoes){
    var display=``;
    var displayarrSize=``;
    for(var index=0;index<arrCategoryShoes.size.length;index++){
        var displaySize=``;
        displaySize+=`<button class="btn">
        ${arrCategoryShoes.size[index]}
        </button>`
    }
    displayarrSize=`<div class="catalogue-size"> ${displaySize}</div>
    `
    display=`
    <section class="product-detail">
            <div class="photo">
                <img src="${arrCategoryShoes.image}">
            </div>
            <div class="detail">
                <h1>${arrCategoryShoes.name}</h1>
               <div class="descriptionDetail">${arrCategoryShoes.description}</div>
                <span>Available size</span>
            <div class="catalogue-size">
                ${displayarrSize};
            </div>
            <h3>${arrCategoryShoes.price}</h3>
            <div class="changethenumber">
                <button class="" id="btn-up">+</button>
                <span id="number"></span>
                <button class="" id="btn-down">-</button>
            </div>
            <button class="btn" id="btn-add-to-cart">Add to cart</button>
            </div>
`
}
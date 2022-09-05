cardaCambiar=['items1','items2','items3']
const templateCard=document.getElementById('template-card').content
//fragment es como una memoria volatil
const fragment=document.createDocumentFragment()

a=['api1.json','api2.json','api3.json']

for(i=0;i<=2;i++){
    b=a[i]
    const items=document.getElementById(cardaCambiar[i]);



    console.log("b vale ",b);
    const fetchData=async()=>{
        try {
                const res=await fetch(b)
                const data=await res.json()
                console.log(data);
                pintarCards(data);
    
        } catch (error) {
            console.log("espera",error);
        }
    }
    fetchData()
    const pintarCards = data=>{
        data.forEach(producto=>{
            templateCard.querySelector('h5').textContent=producto.title
            templateCard.querySelector('h6').textContent=producto.precio;
            templateCard.querySelector('p').textContent=producto.descripcion;
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
            const clone=templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })   
        items.appendChild(fragment)
    }
}




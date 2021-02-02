let text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt officia ratione. Magnam excepturi eaque laudantium, autem a tempora sit placeat non voluptatem nesciunt obcaecati molestiae ab, veniam deleniti ducimus aut labore quod molestias, minima debitis in! At error ipsa officiis tenetur voluptate accusamus. Veniam, quidem. Voluptatum nobis eos omnis.'

let text2 = 'Welcome to our website and you have won the Amag web mouse cursor game'

let btn = document.getElementById('btn')
let text_area = document.getElementById('text_area')

btn.addEventListener('click', function (e){
    if(true){
      text_area.innerHTML = text
    }
});


text_area.addEventListener('click', function(e){
    if(this.contains(e.target)){
        e.target.remove()
    }
})


let P_box = document.getElementById('p_box')
let box = document.getElementById('box')
box.addEventListener('mousemove', function (e){
    document.getElementById('x_value').innerHTML = e.clientX
    document.getElementById('y_value').innerHTML = e.clientY
    if(e.clientX == e.clientY){
        p_box.innerHTML = text2
    }
})
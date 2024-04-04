document.querySelector('.button').addEventListener('click', function(){
    a = document.querySelector('.ekran')
    a.value = parseInt (a.value) +1
    console.log(a.value)
})

document.querySelector('.delete').addEventListener('click', function(){
    a = document.querySelector('.ekran')
    ochuruu = 0
    a.value = ochuruu
    console.log(ochuruu)
})
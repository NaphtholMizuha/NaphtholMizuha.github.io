function $ (str){
    return document.getElementById(str)
}
let times = 0;
$('suki').onclick = ()=>{
    if (times === 0){
        alert('嗯嗯，萘酚酚也锑锑suki')
    }
    else if (times === 1){
        alert('又按了一次，好suki呀！')
    }
    else if (times === 2){
        alert('这么suki嘛，可以称作爱❤️了吧www')
    }
    else if (times >= 3 && times <= 10){
        alert('好啦好啦，萘酚酚都要害羞了！！！')
    }
    else if (times > 10 && times < 100){
        alert('好啦好啦，萘酚酚都要害羞了！！！(真没了，再按也不会有新东西)')
    }
    else {
        alert('居然按了超过100次，真不容易！！萘酚酚直呼nb')
    }
    times++
}

$(`jump`).onclick = ()=> {
    window.location.href = `https://www.yuque.com/naphthol_mizuha/sbsbtete`
}



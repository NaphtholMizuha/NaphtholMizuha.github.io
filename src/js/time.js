function $ (str){
    return document.getElementById(str)
}

window.onload = function () {
    const teteSecond_ = $('teteSecond')
    const birthWords = $('birth')
    const tete = new Date(2020 , 12 - 1 , 10)


    function getTime() {
        const now = new Date();
        const second =  parseInt((now - tete)/ 1000)
        const day = parseInt(second / 86400)
        teteSecond_.innerHTML = `锑锑和萘酚贴贴已有 ${day} 天。更精确说是 ${second} 秒。`

    }

    function getBirth() {
        const now = new Date();
        birthWords.innerHTML = " "
        if (now.getMonth() === 4 - 1 && now.getDate() === 30){
            birthWords.innerHTML = "今天是锑锑的生日，お誕生日おめでとう！大了一岁更接近大姐姐了呢！suki"
        }
    }


    getTime()
    getBirth()

    setInterval(getTime, 1000)

}



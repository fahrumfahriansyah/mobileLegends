const li = document.querySelectorAll('li')
const about = document.querySelector('#about h2')
const skill = document.querySelector('#skil h2')
const jalan1 = [...skill.textContent].map(a => `<span>${a}</span>`).join('')
const jalan = [...about.textContent].map(a => `<span>${a}</span>`).join('')
about.innerHTML = jalan
skill.innerHTML = jalan1
$(window).scroll(function () {
    let Wscroll = $(this).scrollTop()
    console.log(Wscroll)
    $('.efek').css({
        'transform': 'translate(0px,-' + Wscroll / 6 + '%)'
    })
    $(".p1").css({
        'color': "#" + Wscroll / 4
    })
    $(".p2").css({
        'color': "#" + Wscroll / 4
    })
    console.log(Wscroll);

    if (Wscroll === 300) {
        const liAll = [...li].map(a => {
            a.setAttribute('class', 'buat')
        })
    }

})
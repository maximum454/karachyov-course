@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')
@@include('./partials/gsap-latest-beta.min.js')


function anim() {
    const animHeroiItem = document.querySelectorAll('.anim-hero__item')
    const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
    const item = []
    for (let i = 0; i < animHeroiItem.length; i++) {
        item.push(animHeroiItem[i])
    }
    tl.to(item, {
        duration: 2,
        color: "#ffffff",
        background: "#151A20",
        boxShadow:  "9px 9px 10px #080A0D, -9px -9px 10px #222A33",
        x: 0,
        y: 0,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        stagger: {
            grid: [4,3],
            from: "random",
            ease: "power1.inOut",
            amount: 4
        }
    });
}
anim()

$(function (){
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})





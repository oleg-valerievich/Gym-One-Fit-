

var slider = {
    slides:['oleg.jpg','/hero-slider/hero-2-1140px.svg', 'hero-slider/hero-3-1140px.svg'],
    frame:0,
    set: function(image) {
        document.getElementById("src").style.backgroundImage = "url("+image+")";
    },
    init: function(){
        this.set(this.slides[this.frame]);
    },
    left: function () {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function () {
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function () {
    slider.init();
    setInterval(function() {
        slider.right();
    }, 8000);
};





























// $(".four li ul").hide();
// $(".four li:has('.submenu')").hover(
//   function(){
//   $(".four li ul").stop().fadeToggle(300);}
// );






// var slider = {//массив с изображениями
//     slides: ['img/hero-slider/hero-1-1140px.svg', 'img/hero-slider/hero-2-1140px.svg', 'img/hero-slider/hero-3.jpg'],
//     frame: 0,
//     set: function(image) {// установка  нужного фона слайдеру
//         document.getElementById("src=").style.backgroundImage = "url("+image+")";
//     },
//     init: function() { // запуск слайдера с начальной картинкой
//         this.set(this.slides[this.frame]);
//     },
//     left: function() {//влево
//         this.frame--;
//         if(this.frame < 0) this.frame = this.slides.length-1;
//         this.set (this.slides[this.frame]);
//     },
//     right; function() {// вправо
//         this.frame ++;
//         if(this.frame == this.slides.length) this.frame = 0;
//         this.set(this.slides[this.frame]);
//     }
// };

// window.onload = function () { // запуск слайдера после загрузки документа
//     slider.init();
//     setInterval(function() { // 5 секунд
//         slider.right (); // после - переход на кадр справа 
//     },5000) ;
//     };

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const bars = $$(".bars__name");
const contents = $$(".content__title");

const line = $(".bars__line");
const barsActive = $(".bars__name.active");
// requestIdleCallback(function(){
    line.style.left = barsActive.offsetLeft + "px";
    line.style.width = barsActive.offsetWidth + "px";
// })

bars.forEach((bar, index) =>{
    bar.onclick = function(){
        const content = contents[index];
        console.log(content);
        //Kiểm tra nếu có thì xóa nó đi
        $(".bars__name.active").classList.remove("active");
        this.classList.add("active");
        // contents.forEach((content) =>{
        //     content.onclick = function (){
                $(".content__title.active").classList.remove("active");
                content.classList.add("active");
        //     }
        // })

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    };
    
});
// content.forEach((contents) =>{
//     contents.onclick = function(){
//         $(".content__title.active").classList.remove("active");
//         this.classList.add("active");
//     }
// })



//content1 이미지 불러오기
const quickSpan = document.querySelectorAll(".content1 span"); // img를 넣을 elemaent 가져오기 = span
for(let i=0;i<quickSpan.length;i++){// span 안에 img를 넣을것임. span은 총 4개, 반복으로 넣을것이므로 for문 사용.여기서는 all로 배열의 행태로 저장했기에 length사용
    let images = ''; //비어있는 공갈 변수. 여기에 불러온 이미지가 들어감.
    for(let k=0;k<20;k++){ // 이미지는 0~19번 (20개) 여기서는 아직 배열의 형태가 아니므로 숫자로 표시.
        if(k<10){
            images += `<img src="images/quick0${i+1}/quick0${i+1}_0000${k}.png" />`
        }else{
            images += `<img src="images/quick0${i+1}/quick0${i+1}_000${k}.png" />`
        }
        quickSpan[i].innerHTML = images; 
    }
}

//로그인 박스 이미지

let appear_img='';
for(let k=0;k<57;k++){
    if(k<10){
        appear_img += `<img src="images/appear/appear_0000${k}.png" />`;
    }else{
        appear_img += `<img src="images/appear/appear_000${k}.png" />`;
    }
    document.querySelector(".login>.appear").innerHTML = appear_img;
}

let loop_img='';
for(let h=0; h<82;h++){
    if(h<10){
        loop_img += `<img src="images/loop/loop_0000${h}.png" />`;
    }else{
        loop_img += `<img src="images/loop/loop_000${h}.png" />`;
    }
    document.querySelector(".login>.loop").innerHTML = loop_img;
}

//로그인 박스 애니메이션
//animation:ani  2.85s linear 0s 1;
//animation:ani  4.1s linear 2.85s infinite;
const delay = 0.05; // 딜레이 시간을  변수로 지정해줌
const appearImgs = document.querySelectorAll(".appear > img"); //이미지 모두 불러오기 배열로 저장됌.
const loopImgs = document.querySelectorAll(".loop > img");

for(let i=0; i<appearImgs.length; i++){ // 이미지에 반복적으로 애니메이션 지정. for문 사용. 배열로 저장했기에 length사용 
    appearImgs[i].style.animation = `ani  2.85s linear ${delay * i}s 1` //여기서 절대 ; 사용 금지
}
for(let j=0;j<loopImgs.length;j++){
    loopImgs[j].style.animation = `ani  4.1s linear ${2.85+(delay * j)}s infinite`
}


//고객센터 클릭 > 그 자식인 ul이 보임(.on)
const topMenuDD = document.querySelector("dl.topMenu>dd:nth-of-type(5)"); //고객센터 가져오기
topMenuDD.addEventListener("click",e => { // 고객센터를 클릭하면, 
    e.preventDefault();//a의 기본 속성 사제
    e.currentTarget.classList.toggle("on"); //클릭하면 .on 지웠다, 생겼다.
    if(topMenuDD.classList.contains("on")){ // 만약 클래스 리스트에 on이 있다면, 이벤트를 받은 객체(고객센터)의 첫번째 자식
       e.currentTarget.children[0].setAttribute("title","고객센터 닫기") ;
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기") 
    }
})

//주메뉴 마우스 오버, 아웃, 포커스,블러 시에 
//헤더워랩에 클래스온, 지엔비에 ul>li클래스 온
const header_wrap = document.querySelector(".header_wrap"); 
const gnb = document.querySelectorAll(".gnb>ul>li"); 
const subLists = document.querySelectorAll(".gnb>ul>li>ul");

for(let i=0;i<gnb.length;i++){
    gnb[i].addEventListener("mouseover", e => {
        header_wrap.classList.add("on");
        subLists.forEach(item =>{
            item.classList.add("on");
        })
        if(topMenuDD.classList.contains("on")){
            topMenuDD.classList.remove("on");
        }
        if(srchBox.classList.contains("on")){
            srchBox.classList.remove("on")
            btn_srch.classList.remove("on")
        }

    })
    gnb[i].addEventListener("mouseout", e => {
        header_wrap.classList.remove("on");
        subLists.forEach(item =>{
            item.classList.remove("on");
        })
    })
    gnb[i].children[0].addEventListener("focus", e => {
        header_wrap.classList.add("on");
        subLists.forEach(item =>{
            item.classList.add("on");
        })
    })
    gnb[i].children[0].addEventListener("blur", e => {
        header_wrap.classList.remove("on");
        subLists.forEach(item =>{
            item.classList.remove("on");
        })
    })
}

header_wrap.addEventListener("mouseover",e=>{
    header_wrap.classList.add("on");
    subLists.forEach(item =>{
        item.classList.add("on");
    })
})
header_wrap.addEventListener("mouseout",e=>{
    header_wrap.classList.remove("on");
    subLists.forEach(item =>{
        item.classList.remove("on");
    })
})

//서치박스
//돋보기 클릭하면, form.srch 에 클래스 on , 돋보기에도 .on
const btn_srch = document.querySelector("span.srch_open");
const srchBox = document.querySelector("form.srch");

btn_srch.addEventListener("click", e =>{
    btn_srch.classList.toggle("on");
    srchBox.classList.toggle("on");
})


//배너
const next = document.querySelector(".btn_next"); //배너의 다음버튼 
const prev = document.querySelector(".btn_prev"); //배너의 이전버튼
const bnnFrame = document.querySelector(".banner_frame"); //배너 전체
const bnnSec = document.querySelectorAll(".banner_frame > section"); //0~11번 섹션

let bnnNum = 0;
const lastNum = bnnSec.length - 1;

const bnnRollA = document.querySelectorAll(".banner_rolling > ul > li > a")

const arrowA = document.querySelectorAll(".banner_arrow >a");
const bnnRoll = document.querySelectorAll(".banner_rolling a")

function bnnAction(bannerNumer){ //배너 공통 함수 
    bnnFrame.style.left = `${-bannerNumer * bnnW}px`;

    if(bnnSec[bannerNumer].classList.contains("white")){
        arrowA.forEach(item =>{
            item.classList.add("white")
        })
        bnnRoll.forEach(item=>{
            item.classList.add("white")
        })
    }else{
        arrowA.forEach(item =>{
            item.classList.remove("white")
        })
        bnnRoll.forEach(item=>{
            item.classList.remove("white")
        })
    }

    bnnRollA.forEach(item =>{
        item.classList.remove("on");
    })
    bnnRollA[bannerNumer].classList.add("on");
}

//반응형웹, 가로값을 가져와서 지정해줘야함.
let bnnW = document.querySelector("body>section").offsetWidth; //모든 섹셕의 가로값을 합친 총길이를 변수로 지정함.

window.addEventListener("resize",()=>{
    bnnW = document.querySelector("body>section").offsetWidth; // 윈도우의 화면 크기가 바뀔때(리사이즈)마다 변수를 가로값으로 지정한다.
})

bnnAction(0);

//next 누를때마다 다음 섹션으로 이동. left 값이 바뀜.
next.addEventListener("click",e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;

    bnnAction(bnnNum);
})

//prev 누를때마다 이전 섹션으로 이동
prev.addEventListener("click",e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;

    bnnAction(bnnNum);
})

//오토배너
function autoBanner(){
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;

    bnnAction(bnnNum);

    autobnn = setTimeout(autoBanner,5000);
}
let autobnn = setTimeout(autoBanner,5000)

//재생멈춤버튼
let flag = true;
let bnnPlay = document.querySelector("a.btn_play");

bnnPlay.addEventListener("click",e=>{
    e.preventDefault();
    if(flag){
        clearTimeout(autobnn);
        bnnPlay.classList.add("pause");
        flag = false;
    }else{
        autobnn = setTimeout(autoBanner,5000);
        bnnPlay.classList.remove("pause");
        flag=true;
    }
})

////롤링 클릭 했을때 섹션 보이기.
const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0;i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click",e=>{
        e.preventDefault();
        clearTimeout(autobnn);
        flag = false;
        bnnAction(i);
        bnnPlay.classList.add("pause");
        bnnNum = i;
    })
}

//content1 마우스오버시에 애니메이션 움직이기
const content1List = document.querySelectorAll(".content1 ul li");

for(let i=0;i<content1List.length;i++){
    content1List[i].addEventListener("mouseover",e=>{
        e.preventDefault();
        for(let k=0;k<20;k++){//지정하지 않으면 변수가 80개씩 들어감.
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani  1s linear ${delay * k}s 1`
         }
    })

    content1List[i].addEventListener("mouseout",e=>{
        e.preventDefault();
        for(let k=0;k<20;k++){//갯수가 뚜렷하게 확인할수있음
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = "none"
         }
    })
}


// 스크롤이벤트
window.addEventListener("scroll",()=>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛움직이기
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");

    combine_Left.style.top =`${scroll * 0.7}px`
    doughnut_Left_s.style.top = `${scroll * 0.5}px`
    doughnut_Left_L.style.top =`${1310-scroll * 0.8}px`

  
    const doughnut_Center_M = document.querySelector(".doughnut_Center_M")
    const doughnut_Center_s = document.querySelector(".doughnut_Center_s")

    doughnut_Center_M.style.top = `${1200-scroll * 1.2}px`
    doughnut_Center_s.style.top = `${scroll * 0.1}px`

    const combine_right = document.querySelector(".combine_right");
    const doughnut_right_M = document.querySelector(".doughnut_right_M");

    combine_right.style.top =`${scroll * 0.5}px`
    doughnut_right_M.style.top =`${scroll * 0.5}px`
})


//content3
//li 하나하나에 마우스오버 하면 .on이 붙어라
const all = document.querySelectorAll(".content3>div>div>ul>li") //all
for(let i=0;i<all.length;i++){
    all[i].addEventListener("mouseover",e=>{
        e.preventDefault();
        e.currentTarget.classList.add("on")
    })
    all[i].addEventListener("mouseout",e=>{
        e.preventDefault();
        e.currentTarget.classList.remove("on")
    })
}

//대분류
//li 하나하나를 틀릭했을때 class 속성값을 가져와서 변수에 저장
//변수값 정확하게 일치하는 케이스

//클릭할 대상
const group = document.querySelectorAll(".content3_inner >ul >li>a");//5개 
//전체리스트
const listAll = document.querySelectorAll('.content3_inner >div> ul> li') 
console.log(listAll)
//클래스끼리 묶어줌
const ent = document.querySelectorAll(".content3_inner>div > ul> li.ent")
const shop = document.querySelectorAll(".content3_inner>div > ul> li.shop")
const diner = document.querySelectorAll(".content3_inner>div > ul> li.diner")
const box = document.querySelectorAll(".content3_inner >div> ul> li.box")


for(let k=0;k<group.length;k++){//클릭을 할 변수에 클릭이벤트 걸어줌.(배열의 형태이므로 반복문)
    group[k].addEventListener('click',e=>{
        e.preventDefault();
        group.forEach(item=>{//클릭이벤트로 원하는 애만 클래스 붙이기 전에 모든 애들한테 클래스 지우기.
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");
        listAll.forEach(item => {
            item.style.display = 'none';
        });
 
        switch(className){
            case'all' : 
            listAll.forEach(item => {
                item.style.display = 'block';
            });
                break;
            case 'ent' :
                ent.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'shop' :
                shop.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'diner' :
                diner.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'box' :
                box.forEach(item => {
                    item.style.display = 'block';
                });
                break;
        }
    })
}



//footer cj그룹계열사 바로가기
const footerDD = document.querySelector(".foot_inner > dl > dd.family_site");

footerDD.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
})

//top버튼
const topBtn = document.querySelector("div.top");
window.addEventListener('scroll',e=>{
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
    if(scroll <= 0){
        topBtn.classList.remove("on","ab");
    }else if(scroll>2600){
        topBtn.classList.add("ab")
    }else{
        topBtn.classList.remove("ab");
        topBtn.classList.add("on");
    };
})
topBtn.addEventListener("click",e=>{
    e.preventDefault();
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

//모바일 햄버거 버튼
const mobBtn = document.querySelector("div.mobBtn");
const close = document.querySelector("div.mobBtn_close");

const body = document.querySelector("body");
const bg = document.querySelector("div.bg");
const moblie = document.querySelector("div.mob") 

mobBtn.addEventListener("click",e=>{
    e.preventDefault();

    body.classList.add("on");
    bg.classList.add("on");
    moblie.classList.add("on");
    close.classList.add("on")
    
})
close.addEventListener("click",e=>{
    e.preventDefault();

    body.classList.remove("on");
    bg.classList.remove("on");
    moblie.classList.remove("on");
    close.classList.remove("on")
})

//모바일 고객센터
const mobTopMenuDD = document.querySelector("div.mob dl >dd:nth-of-type(5)>a");

mobTopMenuDD.addEventListener("click",e=>{
    e.currentTarget.parentElement.classList.toggle("on");
})

// 모바일 gnb
const mobGnb = document.querySelectorAll(".mob_gnb>ul>li");

for(let i=0; i<mobGnb.length; i++){
    mobGnb[i].addEventListener('click',e=>{
        e.preventDefault();
        mobGnb[i].classList.toggle("on")
    })
}
// 페이지를 아래로 스크롤할 때, Header에 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight ) { //window.scrollY는 현재 스크롤 정도 값을 나타내는 것 0 부터 증가
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시, 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY/homeHeight;
})
// addEventListener와 setEventListener 차이
// addEventListener의 경우 동일한 이벤트에 대해 여러개의 함수 등록 가능
// setEventListener의 경우는 동일한 이벤트에 하나의 함수만 등록가능

// 아래로 스크롤시, Arrow Up이 나타남, 홈이 절반 가려졌을 때
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2) {
    console.log('hi');
    arrow.classList.add('arrow-up--visible');
  } else {
    console.log('bye');
    arrow.classList.remove('arrow-up--visible');
  }
})

//Navbar 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})
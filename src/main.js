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

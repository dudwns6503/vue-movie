# YTS YIFY API(영화 리스트) & OMDB API(영화 검색) & Vue를 이용한 VueMovie
### Home Page
![main](https://user-images.githubusercontent.com/79166339/167264672-1ac8cfaf-4300-4724-9545-bcc999827a1c.gif)
- YTS YIFY API에서 20개(default)의 영화 데이터를 받아서 화면에 뿌려준다.
- 네비게이션바의 로고와 글자들 & 영화 이미지 및 설명란에 Hover효과
- 로딩 중을 표현하는 Spinner는 따로 컴포넌트화해서 import

### Search Page
![search](https://user-images.githubusercontent.com/79166339/167265244-a45dba87-1760-4afd-ae1a-67c9639c4c11.gif)
- OMDB API에서 검색 결과 10개(default)를 가져옴. 검색한 단어를 포함한 영화들을 가져온다.
- 영화 이미지에 Hover효과
- 영화 이미지를 클릭하면 영화 상세정보 페이지로 이동한다.

### About Page
![about](https://user-images.githubusercontent.com/79166339/167265447-5e06a083-14f7-4018-8a3c-95fcb6a6f0d4.jpg)
- About 페이지이자 CSS 연습용 페이지
- 깃허브로 이동할 수 있다.
### 사용 기술
```
1. Vue 2
2. VueRouter
3. BootStrapVue
4. YTS YIFY API & OMDB API
5. axios
```

### 새로 알게 된 것
1. OMDB API - 영화 검색 API로 key를 발급 받아서 영화 제목이나 영화의 고유 ID(imdbId)를 이용하여 리스트를 받아 올 수 있는데, 
   YTS API에서도 같은 ID를 가지고 있어서 이를 통해 Home 화면에 있는 영화 이미지를 클릭해도 영화 상세정보 페이지를 갈 수 있었다.

2. MarkDown에 GIF 올리는법..

### 미흡한점(앞으로 진행해야 할 것)
1. 노트북으로 제작하다보니 full HD 환경이랑은 보여지는 것이 다름. 생각한 것은 스크롤 없이 한 페이지에 꽉찬 화면으로 보여주고 싶었으나 
   각 해상도마다 다르게 보여짐.(반응형 웹 고려안함) Pagination을 사용할까 고민했지만 많은 데이터가 아니었기에 넣지 않음.

2. 기본적으로 UI, UX가 아쉬우며, 특히 Home화면에서 영화의 간략한 정보를 보여주는 UI 화면이 허술함.

### 프로젝트 실행법
아직 미완성된 프로젝트라 따로 배포하진 않았고, 직접 실행하고 싶으신 분은 다운로드 받으신 후 루트 폴더까지 가신 후
```
npm i
npm run serve
```
하지만 OMDB API키가 없으면 검색 API를 사용하실 수 없습니다. 미리 OMDB API키를 사이트에 가서 받아주세요.

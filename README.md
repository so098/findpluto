
## 👩‍🚀 명왕성을 찾아라

<img width="1764" alt="mainpage" src="https://user-images.githubusercontent.com/58973928/158353566-d2f838a0-65f6-4c78-988b-48128a1f28ad.png">

## Links
#### Service: [findpluto.fun](http://www.findpluto.fun/)
### github: [github.com/so098/findpluto](https://github.com/so098/findpluto)
---

<br/>

## introduction
행성계에 명왕성이 퇴출된 것을 믿지 못한 존은 중요한 기밀문서를 훔치고, 명왕성으로 떠나 행성계로 돌려놓을 증거를 찾겠다고 떠납니다.

당신은 기밀문서를 들고있는 존의 호감을 사, 명왕성에서 존의 위치정보를 받아 존을 찾아야 합니다

<br/>

---
## 기술 명세
|Client|Common|
|-----  | -----|
| React| client: Netlify |
| react-three  | fiber / drei / cannon  |
| three | Prettier |
| Zustand | Eslint |  |
| Styled-component |


___
## 소개
<br/>

## react three.js

react에서 three.js를 사용하기 위해 three.js용 React 렌더러인 React-three-fiber을 사용하였습니다.
three.js의 박스를 컨트롤하기 위해 React-three-drei를 사용하였고,
사용자의 움직임을 컨트롤 하기위해 React-three-cannon을 사용하여 물리학을 적용하였습니다.


<img width="1000" alt="main page" src="https://user-images.githubusercontent.com/58973928/158359568-bf273742-8691-4452-9e18-0062f44f6b71.gif" >

#### 명왕성을 찾아라 메인페이지 입니다 우주비행사 이름을 작성하고 비행준비완료를 클릭하면 튜토리얼로 넘어갑니다 (작성하지 않으면 기본이름으로 세팅되어 넘어갑니다.)
___
<img width="1000" alt="tutorial_1 page" src="https://user-images.githubusercontent.com/58973928/158361099-dc223f81-00d5-4b1a-a5bd-b180ac4013d9.gif">

#### 튜토리얼 페이지입니다. 이후 대화선택게임으로 넘어갑니다.
___
<img width="1000" alt="tutorial_2 page" src="https://user-images.githubusercontent.com/58973928/158362153-209d7d61-8de4-4219-8e51-fc79b38a19f4.gif">

#### 대화선택게임 페이지입니다. 대화를 선택해서 존과의 대화를 이어갈 수 있습니다. 존의 위치에 대한 단서를 얻으려면 존의 호감을 얻을 수 있는 루트의 대화를 선택해서 이어가야합니다.
___
<img width="1000" alt="find john page" src="https://user-images.githubusercontent.com/58973928/158780562-12c2adfb-a9b1-4783-bffc-3bb9dd5e7507.gif">

#### 행성에 존의 위치에 대한 단서를 바탕으로 좌표를 꽂아두었습니다. 그중에 존이 있을만한 위치를 클릭하면 그 위치로 이동합니다.
___

<img width="1000" alt="inside pluto page" src="https://user-images.githubusercontent.com/58973928/158476790-d10bb046-d5b1-4a45-bdb2-fba57890d3c9.gif">

#### 존을 찾으면서 필요한 아이템을 클릭합니다. 박스 클릭시 스피드가 증가되고 플러스 공 클릭시 시간이 증가됩니다. 
___
<img width="1000" alt="inside pluto page" src="https://user-images.githubusercontent.com/58973928/158781134-bef23f58-767f-4abe-9e02-58cd1540d2d7.png">

#### 성공시 뜨는 화면입니다. 
___
<img width="1000" alt="inside pluto page" src="https://user-images.githubusercontent.com/58973928/158780819-aa23ae61-387f-4932-b6e3-5105f766f7b3.png">

#### 실패시 뜨는 화면입니다. 

---

## 스케줄

### [ 22년 2월 21일 - 22년 2월 27일 ]

* 아이디어 수집
* 기술 선정
* [Mockup UI] 작업
* KANBAN 생성
* Git Repository 생성
* three.js 사전학습

<br/>

###  [ 22년 2월 28일 - 22년 3월 14일 ]
* 기능 구현 및 three.js 학습
* 버그 이슈 해결
* 테스트 코드 작성
* 리팩토링 및 리드미 작성


---

## prototype
<img width="1000" alt="script image" src="https://user-images.githubusercontent.com/58973928/158778354-1cde993f-068a-4556-bf3e-141c209e40bb.png" >

#### 대본게임을 위한 대본입니다 선택에 따라 다른 선택지가 나오는 것을 알 수 있습니다.
<br/>
<img width="1000" alt="location image" src="https://user-images.githubusercontent.com/58973928/158778834-6cc3820a-4a2f-4fe3-b7bb-8d68c84658a9.png" >

#### 명왕성에 좌표를 찍을 때 적어두었던 위치 값입니다 현재는 로직이 변경되어 변경된 값들이 많으나, 초반에 랜덤으로 설정하기 위해 미리 세팅해두었습니다.

---
## 마무리

처음에는 이런 시나리오로 가보자! 이런 디자인으로 진행해보자! 이런 시나리오면 3D는 당연히 해야되겠지? 라는 패기로운 생각으로 시작했으나.. 역시 녹록지 않은 작업이었습니다.

처음 진행한 three.js는 단순히 javascript에서 원래 사용되던 용도이고 공식문서에서도 javascript로만 진행되었기 때문에 훨씬 더 적합한 언어라고 생각하여 처음에는 javascript로 진행하려 했습니다.

하지만 제가 처음에 진행한 시나리오 게임은 초반 대본게임도 있기때문에 3D말고도, 렌더링 문제도 생각해야 했는데, 이런 시각에서 보니 react로 해야 하는구나 라는 생각에 바로 기술스택을 변경한 기억이 있습니다.

react로 진행하는 three.js는 처음에는 꽤나 공식문서에 예시 정리가 잘 되어있어 사용하는 게 편했으나, 점차 깊게 사용할 수록 버전이 업그레이드 될때마다 삭제되고, 달라지는 메서드들의 기능 차이가 보여 배우기 더 어려웠다는 생각이 듭니다

지금으로써는 아 좀만 더 생각했으면 하루 더 일찍 로직을 짤 수 있는 문제였는데..! 하던 코드였으나, 역시나 처음 접해보는 3D였기 때문에 더 알아보는데 시간을 쏟느라 더 완성도 높은 코드를 작성하지 못한 것이 아쉬움이 큽니다. 그렇기 때문에 react의 three.js 공식문서가 메서드들을 빠르고 확실하게 정리해줬으면 좋겠다는 바램이 있습니다

하지만 react에서 three.js를 사용해보면서 느낀 건 더 간결하고 트렌디하다는 것이었습니다. 버전이 변화하는 속도가 빨라서 그런지 자바스크립트 코드보다 훨씬 더 간단하고 짧게 작성할 수 있었고, 이해가 상대적으로 쉬웠습니다, 또한 기본적으로 주어지는 메소드들이 javascript 코드보다 훨씬 사용하기 편리했습니다.

그래서 다음번에도 react와 three.js를 더 공부하여 깊게 사용해보고싶다는 욕심이 생겼습니다.

퍼블리셔로 지냈던 동안 항상 더 발전한 페이지를 만들고싶다는 욕구가 있었는데, 

이번에 3D를 배우게 되어 다채로운 페이지를 만들 수 있어 뜻깊은 시간이었습니다


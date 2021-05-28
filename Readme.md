## 실행 방법

`npm i`

`npm start`

`localhost:6060`에서 확인할 수 있다.

## 개발 규칙

git flow는 main > develop > feature/{github 이슈번호} 를 따른다.

이슈를 먼저 생성하고 작업한다. 

Pull Request를 만들 때 내용에 `resolves #{github 이슈번호}`를 입력하여 병합될 때 이슈가 종료되도록 한다.

컴포넌트(js)와 예시(md)를 같이 제공해야한다.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### devShin nest 공부 2 바퀴
### tsFile 신경쓰일때. ( * 적당한 위치에 first scope 에 덮어주장. )
```json
"material-icon-theme.files.associations": {
"*.module.ts": "nest-module",
"*.service.ts": "nest-service",
"*.controller.ts": "nest-controller",
"*.gateway.ts": "nest-gateway",
"*.decorator.ts": "nest-decorator",
"*.filter.ts": "nest-filter",
"*.guard.ts": "nest-guard",
"*.middleware.ts": "nest-middleware",
"*.pipe.ts": "nest-pipe",
"*.resolver.ts": "nest-resolver"
},
```
### nest 처음 시작 
```javascript
npm i -g @nestjs/cli OR nest new project-name
```
### apollo graphql Server 를 사용 하고 싶다 
```js
https://docs.nestjs.kr/graphql/quick-start
npm i @nestjs/graphql graphql apollo-server-express@2.x.x
```
### code first ? 
```
코드 우선 접근 방식에서는 데코레이터와 TypeScript 클래스를 사용하여 해당 GraphQL 스키마를 생성합니다.
코드 우선 접근 방식을 사용하려면 먼저 옵션 객체에 autoSchemaFile 속성을 추가합니다. 
app.module.ts 에 두가지 방법이 있는데 
하나 - autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 물리적인 스키마를 자동으로 추가하는 방식
둘 - autoSchemaFile: true, // 메모리에 만들어놓음 
```

### entity !
```js
entity 를 어디다 적재하는게 나을까....
하나의 업무에, entity 를 놓자.
이친구는 주로 db 의 모델이 되는 친구다.
만드는 법은 졸라 간단하다.
@ObjectType() 을 선언해 주면 끝 !  
```
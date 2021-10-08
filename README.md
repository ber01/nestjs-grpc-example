# nestjs-grpc-example

`NestJS` + `gRPC`를 이용한 예제

## 전제 조건

- yarn
- node

## 패키지 설치

```
yarn bootstrap
```

## 실행

```bash
cd packages/user
```

```
copy .env.example .env
```

```bash
yarn start
```

### 조회 성공 - 1

```bash
yarn grpcc -i -p ../api/lib/user/user.proto -a localhost:3000 --eval 'client.getUserByEmail({ "email": "ksyj8256@gmail.com" }, printReply)'
```

```json
{
  "user": {
    "id": "5c47afc0-a8ee-482c-a274-97f2a2742cbc",
    "name": "minkh",
    "email": "ksyj8256@gmail.com"
  }
}
```

### 조회 성공 - 2

```bash
yarn grpcc -i -p ../api/lib/user/user.proto -a localhost:3000 --eval 'client.getUserByEmail({ "email": "hkd1234@gmail.com" }, printReply)'
```

```json
{
  "user": {
    "id": "f1be9dac-47aa-4594-9de6-a0d070decb1c",
    "name": "hkd",
    "email": "hkd1234@gmail.com"
  }
}
```

### 조회 실패

```bash
yarn grpcc -i -p ../api/lib/user/user.proto -a localhost:3000 --eval 'client.getUserByEmail({ "email": "unknown" }, printReply)'
```

```json
{
  "user": null
}
```


# POC on micro-frontend

This project is proof of concept of using module federation feature to create micro-frontend

In this poc we have 3 different frontend applications 1 host application(React) and 2 remote applications(Vue and React)

The main purpose of this POC is to show that we can consume a component developed by same or different framework which has been been deployed seperatly
## Run Locally

Extract the project from zip and go to the POC directory

```bash
  cd POC
```
## Host
Go to the Host directory

```bash
  cd host
```

Install dependencies

```bash
  npm install
```

Start the server and check for any missing dev dependencies

```bash
  npm run start
```
Build the host

```bash
  npm run build
```
Run the preview
```bash
  npm run serve
```
## Remote #1

Go to the remote directory

```bash
  cd remote
```

Install dependencies

```bash
  npm install
```

Start the server and check for any missing dev dependencies

```bash
  npm run start
```
Build the remote application

```bash
  npm run build
```
Run the preview
```bash
  npm run serve
```
## Remote #2

Go to the remote directory

```bash
  cd second-remote
```

Install dependencies

```bash
  npm install
```

Start the server and check for any missing dev dependencies

```bash
  npm run start
```
Build the remote application

```bash
  npm run build
```
Run the preview
```bash
  npm run serve
```


## Authors

- [@sbendalam](https://github.com/sbendalam)


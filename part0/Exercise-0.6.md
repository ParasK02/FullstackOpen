## Exercise 0.6
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: PUT https://studies.cs.helsinki.fi/exampleapp/spa
activate server
    server-->>browser: Status 201
    deactivate server

```

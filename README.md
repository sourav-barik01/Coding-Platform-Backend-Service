# Coding Platform Problem Setting Service

## How Routing is working in the Project

- /api/v1/problems/ping
    - because the route starts with /api
        /api      -> /v1      -> /problems     -> /ping
        apiRouter -> v1Router -> problemRouter -> service layer
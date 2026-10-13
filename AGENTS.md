# Base44 dev environment

This repo is a static HTML site: a single page with no build step, no backend,
no package manager and no external credentials.

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d
```

The `web` service is `python:3.12-slim` running `python -m http.server 3000`,
serving the repo bind-mounted read-only at `/site` and exposed on host port 3000
(the preview entry point). Because the files are read from the bind mount on
each request, editing `index.html` is live — no rebuild or restart is needed
(reload the preview to see it).

nginx is deliberately NOT used: the bind-mounted repo root is not
world-traversable (mode 700), so nginx's unprivileged worker user returns 403
for every request.

## Notes

- Both `index` and `index.html` exist and hold the same markup; nginx serves
  `index.html` for `/`. Leave both as they are.
- The page's image is loaded from an external host (`i.pinimg.com`) by the
  visitor's browser; no server-side network access or credentials are required.
- Verify with: `curl -s http://localhost:3000/ | head` and
  `docker compose -f docker-compose.base44.yml ps`.

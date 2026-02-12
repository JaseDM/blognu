# Deploy Strapi (CI/CD)

## Trigger
Push to `main`.

## Pipeline
1. Build Docker image from `app/Dockerfile`.
2. Push image to GHCR: `ghcr.io/<owner>/nutroteca-strapi:sha-<commit>`.
3. SSH deploy in VPS:
   - update `STRAPI_IMAGE` in `.env` (or export at runtime)
   - `docker compose -f docker-compose.prod.yml pull`
   - `docker compose -f docker-compose.prod.yml up -d`
4. Health checks:
   - `https://blog.nutroteca.com/admin`
   - `https://blog.nutroteca.com/api/...`

## Required GitHub Secrets
- `VPS_HOST`
- `VPS_USER`
- `VPS_PORT`
- `VPS_SSH_KEY`
- `VPS_DEPLOY_PATH` (e.g. `/opt/strapi-blog`)

## Required GitHub Variables
- `GHCR_IMAGE` (e.g. `ghcr.io/jasedm/nutroteca-strapi`)

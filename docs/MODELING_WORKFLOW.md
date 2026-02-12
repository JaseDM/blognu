# Modeling Workflow (Strapi v5)

## Objective
Model content-types safely without touching production.

## Daily flow
1. Checkout `develop`.
2. Start local stack:
   ```bash
   docker compose -f docker-compose.local.yml up -d --build
   ```
3. Open admin: `http://localhost:1337/admin`.
4. Create/update models in **Content-Type Builder**.
5. Verify generated files:
   - `app/src/api/**/content-types/**/schema.json`
   - `app/src/components/**`
   - `app/src/extensions/**` (if used)
6. Test content and API locally.
7. Commit in `develop`.
8. Open PR `develop -> main`.

## Naming and commit examples
- `feat(model): add noticia content type`
- `feat(model): add alimentos structured fields`
- `fix(model): adjust noticia slug uniqueness`

## Local checks
```bash
cd app
npm run build
```

# nutroteca-strapi

Repositorio de Strapi para contenido headless de Nutroteca (blog, noticias, alimentos, etc.).

## Estructura
- `app/`: proyecto Strapi v5
- `docker-compose.local.yml`: entorno local en `develop` (builder habilitado)
- `docker-compose.prod.yml`: referencia de despliegue en VPS
- `docs/MODELING_WORKFLOW.md`: flujo de modelado
- `docs/DEPLOY_STRAPI.md`: despliegue CI/CD
- `docs/ROLLBACK_STRAPI.md`: rollback operativo

## Inicio rápido local
1. Copiar variables:
   ```bash
   cp .env.example .env
   ```
2. Levantar local:
   ```bash
   docker compose -f docker-compose.local.yml up -d --build
   ```
3. Abrir admin:
   - http://localhost:1337/admin

## Ramas
- `main`: producción
- `develop`: modelado y cambios de esquema

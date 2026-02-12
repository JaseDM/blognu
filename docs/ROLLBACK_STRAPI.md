# Rollback Strapi

## Goal
Return to last working image in <10 minutes.

## Fast rollback
1. On VPS, list previous image tags:
   ```bash
   docker images | grep nutroteca-strapi
   ```
2. Set previous tag in `.env` (`STRAPI_IMAGE=...`).
3. Recreate service:
   ```bash
   cd /opt/strapi-blog
   docker compose -f docker-compose.prod.yml pull
   docker compose -f docker-compose.prod.yml up -d
   ```
4. Validate:
   - Admin loads
   - API returns 200

## If schema/data issue
- Restore DB and uploads from backup runbook.
- Reapply previous image.

## Post-incident
- Capture root cause
- Add migration/compat check before next deploy

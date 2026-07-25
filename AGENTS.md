<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Shopify MCP

This project includes Shopify Dev MCP in `.cursor/mcp.json`. After pulling changes, reload MCP in Cursor (Settings → Tools and MCP) or restart Cursor.

Use `shopify-dev-mcp` for Shopify documentation search, Liquid/GraphQL validation, and theme checks. The parallel Shopify theme lives in `shopify-theme/`; see `shopify-theme/TRANSFER.md` for deployment.

**Connected store:** `ut9ig0-z4.myshopify.com` — theme `shopify-theme-guised-hygen` (#144349331569). Push with `npm run shopify:theme:push`, dev preview with `npm run shopify:theme:dev`.

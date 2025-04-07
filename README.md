# 100xtemplates-core

A modern monorepo template combining Next.js and FastAPI applications with Turborepo-like structure.

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `dashboard`: a [Next.js](https://nextjs.org/) app for the main dashboard
- `web`: a [Gatsby](https://www.gatsbyjs.com/) app for the landing page
- `api-hono`: a [Hono](https://hono.dev/) API server
- `fastapi-app`: a [FastAPI](https://fastapi.tiangolo.com/) backend for AI functionality

### Packages

#### JavaScript/TypeScript
- `@repo/ui`: a React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

#### Python
- `packages-py`: Python packages shared across FastAPI applications

## Prerequisites

- Node.js >= 18
- Python >= 3.9
- [uv](https://github.com/astral-sh/uv) (Python package manager)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-org/100xtemplates-core.git
cd 100xtemplates-core
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Initialize Python environment:
```bash
npm run py:init
```

4. Start development servers:
```bash
# Start all services
npm run dev

# Or start specific services
npm run dev -- --filter=web
npm run dev -- --filter=docs
npm run py:dev
```

## Development

### JavaScript/TypeScript Development

- `npm run build` - Build all apps and packages
- `npm run dev` - Develop all apps and packages
- `npm run lint` - Lint all code
- `npm run format` - Format all code

### Python Development

- `npm run py:init` - Initialize Python virtual environment and install dependencies
- `npm run py:dev` - Start FastAPI development server with hot reload
- `npm run py:build` - Install/update Python dependencies
- `npm run py:test` - Run Python tests
- `npm run py:lint` - Run all Python linting tools
- `npm run py:format` - Format Python code
- `npm run py:check` - Run Ruff checks
- `npm run py:clean` - Remove Python virtual environment

## Project Structure

```
.
├── apps/
│   ├── api-hono/      # Hono API server
│   ├── dashboard/     # Next.js dashboard app
│   ├── fastapi-app/   # FastAPI backend app
│   └── web/           # Gatsby web app
├── packages/
│   ├── auth/          # Authentication utilities
│   ├── db/            # Database utilities
│   ├── ui/            # Shared React components
│   ├── eslint-config/ # ESLint configurations
│   └── typescript-config/ # TypeScript configurations
├── packages-py/       # Shared Python packages
├── deployments/       # Deployment configurations
├── docker/            # Docker configurations
├── pyproject.toml     # Python project configuration
└── package.json       # Node.js project configuration
```

## Next Steps

1. **Configure Environment Variables**
   - Create `.env` files for each app
   - Set up database connections and API keys

2. **Set Up Database**
   - Configure SQLAlchemy models in `fastapi-app`
   - Set up Alembic migrations

3. **Add Authentication**
   - Implement JWT or OAuth2 authentication
   - Set up protected routes

4. **Add API Documentation**
   - Configure FastAPI OpenAPI documentation
   - Add API examples and descriptions

5. **Set Up CI/CD**
   - Configure GitHub Actions or similar
   - Set up automated testing and deployment

6. **Add Monitoring**
   - Set up logging
   - Configure error tracking
   - Add performance monitoring

## Remote Caching

Turborepo can use [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines.

To enable Remote Caching:

```bash
npx turbo login
npx turbo link
```

## Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [uv Documentation](https://github.com/astral-sh/uv)

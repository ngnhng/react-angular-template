# Onboard Apps (Angular + React)

This workspace contains two frontend apps under `apps/`:

- `angular-onboard` (Angular 21)
- `react-onboard` (React 19 + Vite + Tailwind v4)

## Prerequisites

From the monorepo root (`angular-template/`):

```bash
pnpm install
```

## Run Apps

From the monorepo root:

```bash
# Angular app
pnpm --filter angular-onboard start

# React app
pnpm --filter react-onboard dev
```

Or run inside each app directory:

```bash
cd apps/angular-onboard && pnpm start
cd apps/react-onboard && pnpm dev
```

Default local URLs:

- Angular: `http://localhost:4200/`
- React (Vite): `http://localhost:5173/` (or next available port)

## Build

From monorepo root:

```bash
pnpm --filter angular-onboard build
pnpm --filter react-onboard build
```

Or build all workspace packages/apps:

```bash
pnpm run build
```

## Lint and Format

Both apps use `oxlint` and `oxfmt`.

```bash
pnpm --filter angular-onboard lint
pnpm --filter angular-onboard fmt-ci

pnpm --filter react-onboard lint
pnpm --filter react-onboard fmt-ci
```

Auto-fix:

```bash
pnpm --filter angular-onboard fix
pnpm --filter react-onboard fix
```

## Tests

Angular app tests:

```bash
pnpm --filter angular-onboard test
```

Workspace test suite:

```bash
pnpm run test
```

## Angular-specific notes

- Angular app uses standalone architecture (no `NgModule` setup for app bootstrapping).
- API client code can be regenerated with:

```bash
pnpm --filter angular-onboard openapi:generate
```

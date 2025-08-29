# ZarishSphere Healthcare System

Modular, offline-first healthcare information system for humanitarian contexts.

## Structure

- `apps/web-app`: Next.js PWA frontend
- `services/zarish-care-service`: Go backend microservice
- `packages/ui-components`: Shared React UI library
- `docs`: Documentation

## Getting Started

Develop 100% in GitHub Codespaces.  
Use terminal and editor to scaffold apps, services, and packages.  
Use GitHub Actions for CI/CD.


# ZarishSphere – Monorepo Directory Structure (Optimized for Open Source PWA & Offline-First)

```
healthcare-system/
├── apps/
│   ├── web-app/        # Next.js PWA (React, Redux, Chakra UI/Material UI, i18next)
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── workflows/      # Patient journey state machines (XState)
│   │   │   ├── pages/
│   │   │   ├── styles/
│   │   │   ├── utils/
│   │   │   └── i18n/           # Translations/Localization
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── feedback-widget/        # In-app feedback form/widget
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── api-gateway/            # Kong Gateway config
│       └── kong.conf
│       └── plugins/
├── services/
│   ├── zarish-care-service/    # Go microservice (Gin, PostgreSQL, CouchDB sync)
│   ├── zarish-labs-service/
│   ├── zarish-access-service/  # Keycloak integration
│   └── ...                     # Other services as needed
├── packages/
│   ├── ui-components/          # Shared React UI library (Chakra/Material UI)
│   ├── api-clients/            # OpenAPI-generated clients
│   ├── common-types/
│   ├── data-models/
│   ├── i18n-utils/             # i18next utilities
│   ├── charts/                 # Chart/visualization components (Nivo, ECharts)
│   └── utils/
├── deployments/
│   ├── kubernetes/
│   ├── terraform/
│   └── helm/
├── docs/                       # Docusaurus docs
│   ├── architecture/
│   ├── api/
│   ├── user-manuals/
│   └── README.md
├── scripts/
│   ├── build.sh
│   ├── deploy.sh
│   ├── test.sh
│   └── lint.sh
├── .github/
│   ├── workflows/              # GitHub Actions CI/CD
├── .vscode/
├── .gitignore
├── README.md
├── package.json
└── tsconfig.json
```


```
healthcare-system/
├── apps/
│   └── web-app/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── workflows/
│       │   ├── pages/
│       │   ├── styles/
│       │   ├── utils/
│       │   └── i18n/
│       ├── next.config.js
│       ├── package.json
│       └── tsconfig.json
├── services/
│   └── zarish-care-service/
│       ├── cmd/
│       ├── internal/
│       ├── pkg/
│       ├── api/
│       ├── Dockerfile
│       └── go.mod
├── packages/
│   ├── ui-components/
│   ├── api-clients/
│   ├── common-types/
│   ├── data-models/
│   ├── charts/
│   └── utils/
├── deployments/
│   ├── kubernetes/
│   ├── terraform/
│   └── helm/
├── docs/
├── scripts/
├── .github/
│   └── workflows/
└── README.md
```


```
healthcare-system/
├── apps/
│   └── web-app/
│       └── src/
│           └── modules/
│               ├── ZarishCare/
│               ├── ZarishLabs/
│               ├── ZarishImagix/
│               ├── ZarishField/
│               ├── ZarishFlow/
│               ├── ZarishSync/
│               ├── ZarishAlerts/
│               ├── ZarishOps/
│               ├── ZarishAnalytix/
│               ├── ZarishMaps/
│               ├── ZarishAccess/
│               └── ZarishConnect/
├── services/
│   ├── zarish-care-service/
│   ├── zarish-labs-service/
│   ├── zarish-imagix-service/
│   ├── zarish-field-service/
│   ├── zarish-flow-service/
│   ├── zarish-sync-service/
│   ├── zarish-alerts-service/
│   ├── zarish-ops-service/
│   ├── zarish-analytix-service/
│   ├── zarish-maps-service/
│   ├── zarish-access-service/
│   └── zarish-connect-service/
```



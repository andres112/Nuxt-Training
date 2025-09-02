# Notes for Nuxt v4+

## Nuxt crash course

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

### Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

**Official documentation**

- https://nuxt.com/docs/4.x/api
- https://nuxt.com/docs/4.x/guide

## Nuxt & Vue Lifecycle

- https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle

![Vue.js Lifecycle Diagram](https://vuejs.org/assets/lifecycle.MuZLBFAS.png)

### Vue Lifecycle (Component-Level)

Vue components follow a clear lifecycle from creation to destruction. The main hooks:

- **beforeCreate**: Runs after instance init, data/events not yet set.
- **created**: Data observation & reactivity set up. Good for fetching data that doesn’t need the DOM.
- **beforeMount**: Called before initial render.
- **mounted**: Runs after component is inserted into DOM. Use for DOM-dependent logic (e.g., manipulating refs, 3rd-party libs).
- **beforeUpdate**: Triggered before reactive data re-renders the DOM.
- **updated**: DOM has re-rendered with new data.
- **beforeUnmount**: Runs right before component teardown.
- **unmounted**: Called after component is destroyed.

#### Key Takeaways

- Data fetching = usually in `created` or `mounted`.
- DOM access = `mounted` or later.
- Cleanup = `beforeUnmount`.

---

#### Nuxt Lifecycle (Application-Level)

Nuxt extends Vue’s lifecycle with app-specific hooks that manage server-side rendering (SSR), hydration, and routing.

#### Key Phases

1. **Initialization**
   - Nuxt config & modules load.
   - Nitro server prepared (for SSR/build targets).

2. **Server-Side Rendering (SSR mode)**
   - **`server:setup`**: Runs before middlewares & routes.
   - **Route resolution**: Matching the URL to a page.
   - **`asyncData` / `fetch` (deprecated)**: Runs on server before page render to populate props/state.
   - **Render HTML**: Server sends pre-rendered HTML + hydration payload.

3. **Client-Side Hydration**
   - Vue mounts on top of server-rendered DOM.
   - Runs Vue lifecycle hooks (`beforeCreate`, `created`, `mounted`).
   - Executes `onMounted` and composables client-side.

4. **Navigation (Client-Side Routing)**
   - **Middleware** runs (`defineNuxtRouteMiddleware`).
   - `asyncData` (for target page) executes on client if not already cached.
   - Page transitions happen.
   - Lifecycle continues with `beforeRouteUpdate`, `beforeUpdate`, etc.

5. **Destruction**
   - Components unmounted when leaving a route.
   - Cleanup handled with `beforeUnmount` / `unmounted`.

---

### How Vue & Nuxt Lifecycles Interact

- **Vue lifecycle hooks** = per component.
- **Nuxt lifecycle** = app-level orchestration around routing, SSR, hydration.
- Nuxt calls Vue hooks _inside_ its lifecycle steps.
- `asyncData` and middleware are Nuxt-only — they run _before_ Vue instance creation.

---

### Practical Notes

- Use `asyncData` for SSR-safe fetching of page data.
- Use composables (`useAsyncData`, `useFetch`) instead of legacy hooks.
- SSR runs only once per request; hydration picks up on client.
- Be mindful: code in `mounted` never runs on the server.

## Testing

https://nuxt.com/docs/4.x/getting-started/testing#end-to-end-testing

When importing @nuxt/test-utils in your vitest config, It is necessary to have "type": "module" specified in your package.json or rename your vitest config file appropriately.
i.e., vitest.config.m{ts,js}.

It is possible to set environment variables for testing by using the .env.test file.

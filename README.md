# RBC

This is a work in progress. Going back to basics to build out my own version of Nest.js & DDD informed by TDD.

# Setup

# Testing

## Locally

### Unit tests

Handled *outside of k8s* via Jest, managed by Nx.

```bash
$ nx run api:test-unit
# To leave it running
$ nx run api:test-unit --watch
```

Matches files using Jest [standard testMatch pattern](https://jestjs.io/docs/configuration#testmatch-arraystring).

### Integration tests

Handled *outside of k8s* via Jest, managed by Nx.

```bash
$ nx run api:test-integration
```

Matches files with the file pattern `*.ispec.ts`.

### Unit + Integration

Handled *outside of k8s* via Jest, managed by Nx.

```bash
$ nx run api:test
```

Matches both of the above patterns.

### E2E tests

Handled **INSIDE of k8s** via Jest, supported by Nx, enabled via Skaffold.

```bash
# Tells skaffold.yaml to use the 'test' stage of Docker container
$ nx run api:pre-test-e2e
# Then tests are automatically run and watched within k8s
$ skaffold dev
```

Matches files with the file pattern `*.e2e.ts`.

### Manual testing within Kubernetes

Handled **INSIDE of k8s** via Nest cli, supported by Nx, enabled via Skaffold.

```bash
# Tells skaffold.yaml to use the 'development' stage of Docker container
$ nx run api:pre-dev
# Skaffold will deploy k8s and Nest will start
$ skaffold dev
```

This will spin up the k8s cluster, and start Nest with:

- hot reloading
- watch

**Note:** you only have to run pre-dev if you've previously been running e2e tests.

# Appendix

## Inspiration

* [VincentJouanne/nest-clean-architecture](https://github.com/VincentJouanne/nest-clean-architecture)
  * Very tidy, very advanced combination of Nest.js & DDD

## Important notes / decisions

### Testing

**#1 We have specifically not included skaffold within Nx**

- It disables Skaffold's natural rollback function upon CTRL+C (as the CTRL C is picked up only by Nx)
- It has no dependencies that Nx can help us with (as Skaffold will rebuild from Dockerfile anyway)
- It disables Skaffold terminal colours

I'm sure there are solutions to some of these, but they're low priority when we already have a working solution.

**#2 *pre-test-e2e* and *pre-dev* do not build the docker containers**

Because Skaffold does.

## Packages/libraries

### Runtypes

Borrowed from [VincentJouanne](https://github.com/VincentJouanne), they use it to implement very neat encapsulated Value Objects.

* [Runtypes](https://github.com/pelotom/runtypes)

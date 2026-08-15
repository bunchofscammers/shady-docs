---
sidebar_position: 2
title: Architecture
---

# Architecture

ShadyUI separates a framework-independent core from framework-friendly integrations:

- `@shady-ui/core` will provide standards-based Web Components.
- `@shady-ui/react` will provide an idiomatic React integration.
- `@shady-ui/svelte` will provide an idiomatic Svelte integration.

The core owns behavior and styling contracts. Framework integrations add typing and composition without redefining the component standard.

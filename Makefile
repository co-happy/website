# Makefile for co-glad-vp1 project
.DEFAULT_GOAL := dev
# Targets
.PHONY: dev
dev:
	pnpm docs:dev

.PHONY: build
build:
	pnpm docs:build
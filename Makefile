.PHONY: dev build deploy push clean lint

# Start local Next.js development server
dev:
	bun dev

# Build optimized static export to out/
build:
	bun run build

# Deploy pre-rendered static export directly to GitHub Pages (master branch)
deploy: build
	bun run deploy

# Commit and push source code to GitHub
push:
	git add .
	git commit -m "feat: update portfolio source code" || true
	git push -u origin main --force

# Run ESLint check
lint:
	bun run lint

# Clean build artifacts
clean:
	rm -rf .next out node_modules/.cache

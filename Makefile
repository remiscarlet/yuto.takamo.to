build: lint # asdf make better later
	yarn build
lint: # Lint all filetypes with configured linters
	yarn format-check
	yarn lint:js


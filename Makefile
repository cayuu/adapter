REPORTER = spec

build: lint test

install:
	@echo "Installing production"
	@npm install --production
	@echo "Install complete"

lint:
	@echo "\n\n\nLinting.."
	@jshint --config .jshintrc lib/*.js

test:
	@echo "Testing.."
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/runner.js

.PHONY: test

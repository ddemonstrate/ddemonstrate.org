.PHONY: build serve

build:
	npm install
	polymer build

serve:
	serve ./build/default
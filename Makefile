.PHONY: build serve

build:
	npm install
	cd components && npm install && polymer build

serve:
	serve .
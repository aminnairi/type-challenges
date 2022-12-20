.PHONY: install clean

install:
	docker compose run --rm npm install

clean:
	docker compose run --rm sh -c 'rm -rf .npm .node_repl_history node_modules package-lock.json'


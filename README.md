# marvel-characters

This is a sample Marvel Characters API in Typescript using the Marvel API as the source of Marvel character information.

[Data provided by Marvel. © 2014 Marvel](http://marvel.com)

## Running the application

* Change to the project's root directory
* Install the dependencies:
  ```
  $ npm install
  ```
* Update the following configuration in `.env` on the root directory, or set as environment variables
  Configuration | Description
  --- | ---
  `MARVEL_API_PUBLIC_KEY` | Public key provided by Marvel to access their APIs
  `MARVEL_API_PRIVATE_KEY` | Private key provided by Marvel to access their APIs
* Run the server (served on `http://locahost:8080`):
  ```
  $ npm start
  ```
* You can try the Swagger UI in your browser by accessing `http://localhost:8080/api-docs`

## Dabble with the project

The following scripts below can be executed using `npm run <script name>` in the project's root directory.

Script name | Description
--- | ---
`dev` | Spawn a hot-reloading dev server on port 8080
`lint` | Run TSLint test
`test` | Run Jest-based unit tests in Node
`build` | Builds a new set of JS assets, and outputs them to `/build`
`start` | Runs the built assets in `/build` on port 8080



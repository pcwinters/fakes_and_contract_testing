A janky example of pairing an API fake with UI development, verified using consumer contract testing.

See my blog post, ["A Strategy for Parallel Vertical Development: API Fakes and Contract Testing"](https://medium.com/@patrick.winters/a-strategy-for-parallel-vertical-development-70fb18e04acd)

## Usage
There are 2 projects in this workspace to run simultaneously. With two terminals, and your working directory in each package, run `yarn start`.

First start the fake API (`packages/todos-fake`). Then, starting the UI app (`packages/my-app`), built with create-react-app will launch your web browser to [http://localhost:3000/](http://localhost:3000/).
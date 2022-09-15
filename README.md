## Async AutoCompletion

> If you want to quickly check this, [demo is here](https://async-autocomplete.vercel.app)

To get started, clone this repo

`git clone https://github.com/OlivierJM/async-autocomplete.git`

 Install all dependencies

`cd async-autocomplete`

`npm install`

Run the app

`npm start`

This Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
Additionally, you can run `npm run test -- --coverage .` to see code coverage

### Improvements

- <del>cache data and return cached data when the query hasn't changed
- support multiple autocompletion text
- <del>package this in a way that it can easily be used by other engineers
- use Context API instead of prop drilling e.g: when handling autocompleting from child to parent component
- better usage of mocks for test files

**Note:** There is one extra dev dependency, to make it easier to test hooks
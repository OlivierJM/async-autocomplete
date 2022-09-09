1. What is the difference between Component and PureComponent? give an example where it might break my app.
    - PureComponent provides slight advantage compared to Component, The reason for this is because of how PureComponent automatically checks for differences or changes in component props using `shouldComponentUpdate`, it does a shallow check on values without digging in properties in cases like object or nested values. Because Component doesn't automatically handle this.
    - PureComponent can break the expected functionalilty of the app if props or state given are nested or can not be shallowly compared, this way we can expect `shouldComponentUpdate` to do its job when it will just return false, so in this case we won't get the outcome we'd want.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
    - If scenario explained in above happens and `shouldComponentUpdate` returns false then the context data will not be available to the children component.
3. Describe 3 ways to pass information from a component to its PARENT.
    - Pass data to a function in a child component and use this when a function is called in upper parent
    e.g: How I implemented the handleAutocomplete function from the `HighlightedText`, here I pass `text` on an onClick `onClick={() => handleAutoComplete(text)}` and in the parent component, I use this text passed from the child component to update the state.
    ```jsx
        const handleAutoComplete = (text: string) => {
            setAutoCompleted(true);
            setFilter(text); // comes from the child component
        };
    ```
    - Context API
        - `Context API` makes it easy to manage state of an application from different components without having to pass props from one component to another.
    - Composition
        - This refers to creating components from other components based on the props passed, this can eventually allow easier of passing component data.
4. Give 2 ways to prevent components from re-rendering.
    > While this heavily depends on the implementation of the code, there are different ways React offers we can use to optimize and avoid re-renders, 2 of them are the following:
    - Making sure that we prove the right dependency to the `useEffect` when in use
    - Making use of `useMemo()` to make sure that the component only re-renders when props passed to it are truly different, this also requires the correct dependency
5. What is a fragment and why do we need it? Give an example where it might break my app.
    - a Fragment, normally used as `<></>` or `<Fragment></Fragment>` is used as placeholder for non-element, this is important to avoid unnecessary divs
    - It can break the app if we try and provide a key to `<key={id}></>`, we can also get unexpected behavior when attempting to use html attributes to the `<Fragment />` like `<Fragment className="will-not-work-here" />`
6. Give 3 examples of the HOC pattern.
    - Redux's `connect()`
    - React's `memo()`
    - React Router's `withRouter()`
7. what's the difference in handling exceptions in promises, callbacks and async...await.
    - In promises, we'd typically handle errors in a `.catch()` block
    ```js
        fetch(url)
            .then(data => data.json())
            .catch(error => console.error(error)) // handle error here
    ```
    - In callbacks
    ```js
        doSomeHeavyDuty(url, (data, error) => {
            if(error) {
                console.error(error) // handle error here
            }
        })
    ```
    - Async/Await, Best way is to use a try/catch block

    ```js
    try {
        <!-- await and do somethings here -->
    } catch(error) {
        console.error(error) // handle error here
    }
    ```

8. How many arguments does setState take and why is it async.
    - `setState` takes one argument, it is async because updating the state(which causes component re-rendering) might take longer.
9. List the steps needed to migrate a Class to Function Component.
    - Create a functional component
    ```jsx
    function Migration() {
        return </> // return a proper element
    }
    ```
    or
    ```jsx
    const Migration = () => {
        return </> // return a proper element
    }

    ```
    - Migrate state from `this.state` to hooks in the new file (functional)
    - Migrate the following methods to `useEffect`
        - `componentDidMount`
        - `componentWillUnmount`
        - `componentDidUpdate`
    - Provide the correct dependency to the `useEffect`
    - Test and make sure all is working as it was or even better.

10. List a few ways styles can be used with components.
    - css modules to avoid conflicting classes, e.g: `button.module.css`
    - inline styles using the style prop that is available to elemements e.g: `<p style={{color: 'blue' }}>I am a blue paragraph</p>`
    - 3rd party tools like styled components, where we can created components based on their styles
    - classic `className` attribute on html elements e.g:  `<p className="blue-paragraph">I am a blue paragraph</p>` then its style file give it a blue color
11. How to render an HTML string coming from the server.
    -  We can use the `ReactDOMServer.renderToString()`
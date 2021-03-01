### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

- What is Babel?

Babel is a JavaScript compiler Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you: Transform syntax.

- What is JSX?

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

- How is a Component created in React?
 Component statement, this statement creates an inheritance to React. Component, and gives your component access to React.

- What are some difference between state and props?
props is unmutable ,and state is mutable.
"props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.


- What does "downward data flow" refer to in React?
A parent component defines a function, the function is passed as a prop to a child component, the child component invokes the prop, the parent function is called, usually setting new state. The parent component is re-rendered along with its children.

- What is a controlled component?
react control the the state of the components and only updated with the function returned to useState().

- What is an uncontrolled component?
react not in control of the form state and some inputs and external libraries requrie it.

- What is the purpose of the `key` prop when rendering a list of components?
track the componenets children and gives them a unique id.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
becasue array index is not stable. The delete or change of array index will affect the index number and make bug.

- Describe useEffect.  What use cases is it used for in React components?

 React comes with a build in hook for "side effects'. It is used for fetching data, starting timer, and manually changing the dom are all side effects. Each render has its own effects. sometimes these effects require clean-up(clearing a timeout, closing a connnection)
 useEffect will run after first render, will run after all renders by default, it will accpets a callback function as its first argument, it will returns undefined or a function.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  
 The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.

- When would you use a ref? When wouldn't you use one?
 accessing an underlying DOM element, setting up/ clear timers.

- What is a custom hook in React? When would you want to write one?

 Building your own Hooks lets you extract component logic into reusable functions.
Custom Hooks
A JavaScript function that typically uses built in hooks
The function name of a custom hook should start with use (useToggleState)
Custom hooks can be reusable across different components
You can make hooks to
abstract logic
handle repeated tasks
generate your own JSX
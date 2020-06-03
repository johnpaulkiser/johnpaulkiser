---
layout: post
title:  "Fullstack React Ch. 1 Notes"
date:   2020-06-03
---

_**Editorial:** The battle is lost. I've succumbed. I've put off adopting a front-end javascript framework for as long as possible in favor of mastering the fundamentals, in which I have come no where close. I stumbled upon the book [Fullstack React, The complete guide to ReactJS & Friends](https://www.newline.co/fullstack-react) and gave into the vaporwave aesthetic displayed on the front cover._

_Below I've summarized chapter 1 through my note taking process and plan to do so for the 1st part of the book. Although the book doesn't number their chapters I've taken the liberty to do so here._

_I'm implementing the projects in each chapter without reference to their supplied code. You can checkout that mess [here.](https://github.com/johnpaulkiser/fullstack-react)_

-----

### Chapter 1.
 * Components are ES6 classes that extend React.Component
    - Must have a render() method. only requirement
    - Whatever render() returns gets rendered to the page
 
##### 2 ways to declare React components
1. ES6 class 
```js 
class HelloWorld extends React.Component {
    render() { return(<p>Hello, world!</p>) }
}
```
2. Using `React.createClass()`
```js
const HelloWorld = React.createClass({
    render() { return(<p>Hello, world!</p>) }
})
```

* Use JSX for markup - html-like syntax, _not required in React_

* React uses a virtual DOM??
    - I kinda understand this but need more clarity
    - I understand that DOM operations are expensive in vanillaJS and the virtual DOM makes them faster

* Data flows from parent -> child through **props**
    - child access props using `this.props`
    - `this.props` is **immutable** -> child cannot modify its props

_stop using for loops you java twit, JS is all about map, filter, reduce_

* React uses the `key` propety to create unique bindings for each instance of a component.
    - _must find out more about this_

#### How to deal with interaction?

* Functions can be passed down to children as props.
    - When a child needs to let a parent know that an event was triggered the child should call the function.

    
> A Note about `this`: React binds `this` in `render()`, and other builtin React methods to refer to the component, while `this` outside of `render` is null

* To get `this` to refernce the component while outside of `render` we have to manually bind our custom written functions in the constructor.

```js
class Product extends React.Component {
    constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
}
```

#### How to handle state?
_one of the benefits of React is that a change to state automatically re-renders for us, however, this means we must handle state the React way_

* use `this.state` object to manage a components state.
    - private to the individual component
    - updated with `this.setState()` -> re-renders component.

* best to set initial state in constructor
* use props to pass a parent's state to its child
* life cycle methods are called at various times in a component's life time. (think Unity GameObjects)
* `componentDidMount()` is called when a component is loaded on a page.
* after setting the initial state in the constructor `this.state = blahblah` is invalid, use `this.setState()` instead.

**Treat this.state object as immutable**
    - use `Object.assign()` to avoid mutating objects

---

_**Summary**: React uses components inside of components inside of components to build and manage UIs. Components extend React.Component giving them a bevy of useful functions
one of which is mandatory, render, which renders a components contents to the page. React ensures deterministic UI states by enforcing
one-way data flows from parent to child through props. props is immutable and cannot be modified by the child it is being passed to, instead components can pass functions as props
which children can call to tell their parents that a change needs to be made. Components manage state, when changed with setState() automatically re-renders the component._


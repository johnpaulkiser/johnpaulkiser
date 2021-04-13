---
layout: post
title:  "Tailwind conflicting class precedence issues in React components"
date:   2020-06-03
---

I often find myself running into a specific problem when building Tailwind styled components in React. I want to style a component, but, on specific usage of that component, I want to override styles *without* editing the underlying styled component.  

## The problem:
Imagine building out a general `<Card />` component with a border and some padding. It might look something like this: 

```javascript
function Card({ className="", children, ...rest }) {
  return (
    <div {...rest} className={`p-8 border-2 rounded bg-white ${className}`}>
      {children}
    </div>
  );
}
```

Using the  `<Card />` looks like this:

```html
    <Card>
      <div>
        etc...
      </div>
    </Card>
```

To add styles to the `<Card />` all you need to do is pass them in a string to the `className` prop. 

```html
    <Card className="text-green-600">
      <div>
        etc...
      </div>
    </Card>
```

Cool, right?
…unless you want to override `<Card />`’s underlying styles. For example, what if you want to change the padding for a specific use of `<Card />`? You’re out of luck. You have to change the underlying `<Card />` component to catch that specific case. Maybe to something along the lines of…

```javascript
function Card({ className="", children, ...rest }) {
  const defaultPadding = "py-5 p-8";

  const padding =
    className.includes("p-") ||
    className.includes("py-") ||
    className.includes("px-")
      ? ""
      : defaultPadding;

  return (
    <div
      {...rest}
      className={`border-2 rounded bg-white ${className} ${padding}`}
    >
      {children}
    </div>
  );
}
```

This implementation checks to see if the `className` prop contains any Tailwind padding utility classes if so it removes the default padding on the `<Card />` to make room for the padding passed in through props. Clearly, this solution becomes very cumbersome as the number of classes you want to override grows.

Why do we have to do this exactly? Why doesn’t our first naive solution work?  Let’s look at a tiny CSS class:

```css
.card-padding {
	padding-left: 20px;
	padding: 0;
}
```

If we applied this class to an element, what would the padding be? 0 obviously. Because the browser sees that there are conflicting styles and uses the last defined attribute, `padding: 0;`. 

Here’s another example:
```css
.card-padding1 {
	padding-left: 20px;
}

.card-padding2 {
  padding: 0;
}
```

Now, if we have an html element like so: 

```html
<div class="card-padding1 card-padding2">hello, world</div>
```

What padding does the <div> have? Again, 0. 

What about if we switch the order of the class in HTML? 

```html
<div class="card-padding2 card-padding1">hello, world</div>
```

If you guessed 0 again you are right. 👍

💡 Here is where the lightbulb should go off. *HTML class order doesn’t affect precedence.* The order they were declared affects the precedence in which they are applied.

…So in Tailwind, the reason the classes don’t automatically override a conflicting class is that the Tailwind classes were declared in a specific order. 

> 🤔 You should now be thinking, “But wait couldn’t I accidentally override classes if I’m not careful?” Yes, it's a source of nasty bugs if you the drill `className` prop down multiple components. 

So what’s the solution?


## The solution
Coming soon…

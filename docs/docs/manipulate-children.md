---
id: manipulating-children
title: Manipulating Children
permalink: docs/manipulating-children.html
prev: conditional-rendering.html
next: forms.html
---

At times it makes sense to manipulate Children elements before rendering them. This case can often appear where neither the Parent component nor Children elements have the full information needed to render the Children elements.

```js
class Button extends React.Component {
  render (
    return React.createElement('button', {className: 'btn'});
  )
}

class ButtonBar extends React.Component {
  render () {
    const { children } = this.props;
    const buttons = React.Children.map(children, (button, i) => {
      const isFirst = 0 === buttons.indexOf(button)

    })
    return
  }
}
```

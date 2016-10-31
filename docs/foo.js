const React = require('../build/react')
const Renderer = require('../build/packages/react-test-renderer');

const btnStyles = {
  border: 'solid 1px #000',
  borderRadius: 0
}
class Button extends React.Component {
  render () {
    const { style } = this.props

    return React.createElement(
      'button',
      { style: Object.assign({}, btnStyles, style) }
    )
  }
}

const radius = '5px'
const firstBtnStyles = {
  borderTopLeftRadius: radius,
  borderBottomLeftRadius: radius
}
const lastBtnStyles = {
  borderTopRightRadius: radius,
  borderBottomRightRadius: radius
}

class RoundedButtonBar extends React.Component {
  render () {
    const { children } = this.props
    const buttons = React.Children.map(
      children,
      (button, i) => {
        const isFirst = i === 0
        const isLast = i === children.length - 1

        if (isFirst) {
          return React.cloneElement(button, { style: firstBtnStyles })
        } else if (isLast) {
          return React.cloneElement(button, { style: lastBtnStyles })
        } else {
          return button
        }
      }
    )

    return React.createElement('div', null, buttons)
  }
}

const tree = Renderer.create(
  React.createElement(RoundedButtonBar, null, [
    React.createElement(Button, {key: 1}),
    React.createElement(Button, {key: 2}),
    React.createElement(Button, {key: 3})
  ])
)

console.log(tree.toJSON())
console.log(tree.toJSON().children[0].props)

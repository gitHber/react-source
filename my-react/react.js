function createElement(type, props, ...children){
  let vdom = {
    key: props && props.key,
    type,
    props: {
      ...props,
      ref: null, // 一个方法
    }
  }
  if(children.length === 1) {
    vdom.props.children = children[0]
  }else if(children.length > 1) {
    vdom.props.children = children
  }
  return vdom
}

class Component {
  render() {

  }
}

window.React = {
  createElement: createElement,
  Component: Component
}
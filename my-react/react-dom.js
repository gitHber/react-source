function render(vdom, node) {
  node.appendChild(renderNode(vdom))
}

function renderNode(vdom) {
  const {type, props} = vdom
  const children = props.children
  let node
  if(typeof(type) === 'string') {
    node = document.createElement(type)
    // props暂时不处理
    if(children) {
      const classType = typeof(children)
      if(classType === 'string') {
        node.innerText = children
      }else if(children instanceof Array) {
        children.map(child => {
          node.appendChild(renderNode(child)) 
        })
      }else if(children.type.prototype.__proto__ === React.Component.prototype){
        node.appendChild(renderNode(new children.type().render()))
      }
    }
  }
  return node
} 

window.ReactDOM = {
  render: render
}
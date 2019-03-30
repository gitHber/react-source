// 参数 vdom: vdom对象，node: 挂载的节点
function render(vdom, node) {
  node.appendChild(renderNode(vdom))
}
// 如何根据vdom生成真实节点
function renderNode(vdom) {
  const {type, props} = vdom
  const {children, ...prop} = props
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
        node.appendChild(renderNode(new children.type(prop).render()))
      }
    }
  } else if(type.prototype.__proto__ === React.Component.prototype){
    node = renderNode(new type(prop).render())
  }
  return node
} 

window.ReactDOM = {
  render: render
}
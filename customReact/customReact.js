//these are concept which runs in react backend
function customRender(element, container) {
  const ele = document.createElement(element.type);
  ele.innerHTML = element.children;
  for (const key in reactElement.props) {
    ele.setAttribute(key, reactElement.props[key]);
  }

  container.appendChild(ele);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me",
};

const root = document.querySelector("#root");

customRender(reactElement, root);

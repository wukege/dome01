const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}
class Component {
  constructor(props = {}) {
    this.props = props
  }
  setState(state) {
    const oldEl = this.el
    this.state = state
    this._renderDOM()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  _renderDOM() {
    this.el = createDOMFromString(this.render())
    this.log()
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false)
    }
    return this.el
  }
}


const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM())
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl)
    wrapper.removeChild(oldEl)
  }
}


class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isLiked: false }
  }

  onClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return `
      <button class='like-btn' style="background-color: ${this.props.bgColor}">
        <span class='like-text'>
          ${this.state.isLiked ? '取消' : '点赞'}
        </span>
        <span>👍</span>
      </button>
    `
  }
  log() {
    console.log('heheheheheheheheheh')
  }
}

mount(new LikeButton({ bgColor: 'red' }), document.getElementById('title'))




import React, { Component } from 'react';
class ListItem extends Component {
  static defaultProps = {
    text: '',
    checked: false,
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked}
          onChange={this.props.onChange} />
        <span>{this.props.value}</span>
      </li>
    );
  }
}
class List extends Component {
  static defaultProps = {
    list: [],
    handleItemChange: () => { },
  };
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked,
      })),
    };
  }
  onItemChange(entry) {
    const { list } = this.state;
    this.setState({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ?
          !prevEntry.checked : prevEntry.checked,
      })),
    });
    this.props.handleItemChange(entry);
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((entry, index) => (
            <ListItem
              key={`list-${index}`}
              value={entry.text}
              checked={entry.checked}
              onChange={this.onItemChange.bind(this, entry)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
class ClickMe extends React.Component {
    constructor(props) {
      super(props)
      this.state = { fade: false }
    }
    render() {
      const fade = this.state.fade
  
      return (
        <button
          ref='button'
          onClick={() => this.setState({ fade: true })}
          onAnimationEnd={() => this.setState({ fade: false })}
          className={fade ? 'fade' : ''}>
          Click me!
        </button>
      )
    }
  }

  export default ClickMe
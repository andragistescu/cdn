class HelloWorld extends HTMLElement {
  
  constructor() {
    // this.textContent = 'Hello World!';
    super()
  }

  // connect component
  connectedCallback() {
    window.requestAnimationFrame(()=>{
      this.textContent = 'Hello World!';
    })
    console.log("here");

  }
  
}

customElements.define('hello-world', HelloWorld );

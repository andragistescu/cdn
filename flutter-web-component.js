class FlutterWebComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Load the compiled Flutter content into the shadow DOM
    const flutterContent = document.createElement('iframe');
    flutterContent.src = 'http://localhost:56678/'; // Path to your compiled Flutter content
    flutterContent.style.width = '100%';
    flutterContent.style.height = '100%';
    flutterContent.style.border = 'none';

    // Append the Flutter content to the shadow DOM
    this.shadowRoot.appendChild(flutterContent);
  }
}

// Define the custom element
customElements.define('flutter-web-component', FlutterWebComponent);

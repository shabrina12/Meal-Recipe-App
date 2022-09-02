class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
   
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#search-input').value;
  }
   
  render() {
    this.innerHTML = `
    <div class="meal-search">
      <h2 class="title">Find Recipe For Your Fav Foods</h2>
      <h3 class="title-quote">Good food is the foundation of genuine happiness</h3>
      <div class="meal-search-box">
        <input type="text" placeholder="Search menu" class="search-input" id="search-input">
        <button type="submit" class="search-btn btn" id="search-btn">Search</button>
      </div>
    </div>
    `;

    this.querySelector('#search-btn').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
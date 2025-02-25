const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

const { setupDropdownClickListener } = require('./main.js');

describe('Dropdown click listener', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="dropdown">
        <button class="dropdown-toggle">Dropdown</button>
        <div class="dropdown-menu show">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
        </div>
      </div>
    `;
    
    setupDropdownClickListener();
  });
});

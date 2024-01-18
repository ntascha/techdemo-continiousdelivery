const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML file into a string
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
  dom = new JSDOM(html);
  container = dom.window.document.body;
});

// Test to check if specific images are present
describe('Image sources', () => {
  it('should have an img-1.jpg', () => {
    const image1 = container.querySelector('img[src="img-1.jpg"]');
    expect(image1).toBeTruthy();
    expect(image1.src).toContain('img-1.jpg');
  });

  it('should have an img-2.jpg', () => {
    const image2 = container.querySelector('img[src="img-2.jpg"]');
    expect(image2).toBeTruthy();
    expect(image2.src).toContain('img-2.jpg');
  });

  it('should have an img-3.jpg', () => {
    const image3 = container.querySelectorAll('img[src="img-3.jpg"]');
    expect(image3.length).toBe(2); // Since img-3.jpg appears twice
    image3.forEach(img => {
      expect(img.src).toContain('img-3.jpg');
    });
  });
});

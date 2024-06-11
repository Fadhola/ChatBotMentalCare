import routes from '../routes/routes';
 
class App {

 
  async renderPage() {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const page = routes[url] || routes['/'];
    // this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
 
export default App;
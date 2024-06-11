import 'regenerator-runtime'; // if you need async/await support
import '../styles/style.css';
import '../styles/account.css';
import '../styles/admin.css';
import '../styles/konseling.css';
import '../styles/psikolog.css';
import App from './views/app';
// import routes from './routes/routes';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu-button'),
    drawer: document.querySelector('#navigation-drawer'),
    content: document.querySelector('main'),
    contentauth:document.querySelector('body')
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
  });
});

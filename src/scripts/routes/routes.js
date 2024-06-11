import Home from '../views/pages/home';
import KonselingIndividu from '../views/pages/user/konseling/konseling individu/konseling-individu';
import IndividuEkonseling from '../views/pages/user/konseling/konseling individu/individu-e-konseling';
import IndividuKonselingKorner from '../views/pages/user/konseling/konseling individu/individu-konseling-corner';
import Login from '../views/pages/auth/login';
import Daftar from '../views/pages/auth/register';

const routes = {
  '/': Home,
  '/konseling-individu': KonselingIndividu,
  '/individu-e-konseling' : IndividuEkonseling,
  '/individu-konseling-corner' : IndividuKonselingKorner,
  '/login' : Login,
  '/daftar' : Daftar
};

const parseRequestURL = () => {
  const url = location.hash.slice(1).toLowerCase() || '/';
  const r = url.split("/");
  const request = {
    resource: r[1],
    id: r[2],
    verb: r[3]
  };
  return request;
};

const router = async () => {
  const content = document.querySelector('main');
  const request = parseRequestURL();

  const parsedURL = (request.resource ? '/' + request.resource : '/') +
                    (request.id ? '/:id' : '') + 
                    (request.verb ? '/' + request.verb : '');

  const page = routes[parsedURL] ? routes[parsedURL] : routes['/'];
  content.innerHTML = await page.render();
  await page.afterRender();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default routes;

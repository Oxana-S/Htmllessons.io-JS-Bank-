import { NotFound } from '@/components/screens/404/not-found.component';
import { ROUTES } from './routes.data';

/**
 * class Router
 * description
 * 
 */
export class Router {
  #routes;
  #currentRoute;

  constructor() {
    this.#routes = ROUTES;
    this.#currentRoute = null;

    this.#handelRouteChange();
  }

  getCurrentPath() {
    return window.location.pathname;
  }

  #handelRouteChange() {
    const path = this.getCurrentPath() || '/';
    let route = this.#routes.find((el) => el.path === path);

    if (!route) {
      route = {
        component: NotFound
      };

      console.log(route);
    }
    this.#currentRoute = route;
    this.render();
  }

  /**
   * Функция render()
   * description
   * 
   */
  render() {
    // 1. Ищет название страницы в Url и передает в 'const component '
    const component = new this.#currentRoute.component();
    // 2. Ищет в index.html блок с #app и передает в него html разметку из класса компонента
    document.getElementById('app').innerHTML = component.render();
  }
}

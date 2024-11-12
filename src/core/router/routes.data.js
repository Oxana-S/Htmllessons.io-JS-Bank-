import { Home } from '@/components/screens/home/home.component';
import { Auth } from '@/components/screens/auth/auth.component';
import { AboutUs } from '@/components/screens/about-us/about-us.component';

/**
 * array "Массив с описанием путей для Url"
 */
export const ROUTES = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about-as',
    component: AboutUs
  },
  {
    path: '/auth',
    component: Auth
  }
];

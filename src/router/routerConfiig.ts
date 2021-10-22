import { COUNTRY_PAGE_ROUTE, HOME_PAGE_ROUTE } from '../constants/routes';
import { CountryPage } from '../containers/CountryPage/CountryPage';
import { HomePage } from '../containers/HomePage';
import { NotFoundPage } from '../containers/NotFoundPage';

export const publicRoutes = [
  { path: HOME_PAGE_ROUTE, component: HomePage, exact: true },
  { path: `${COUNTRY_PAGE_ROUTE}/:name`, component: CountryPage, exact: true },
  { path: '*', component: NotFoundPage, exact: true },
];

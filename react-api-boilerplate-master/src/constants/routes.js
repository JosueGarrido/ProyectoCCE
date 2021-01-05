/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
 // ARTIST_DASHBOARD: '/dashboard_artista',
  //Dashboard artista Ventas
  PUBLICATIONS: '/publicaciones',
  ARTIST_DASHBOARD: '/dashboard-artista',
  ARTIST_PUBLICATIONS_DASHBOARD: '/dashboard-publicaciones-artista',
  ARTIST_QUESTIONS_DASHBOARD: '/dashboard-preguntas-artista',
  ARTIST_SELL_DASHBOARD: '/dashboard-ventas-artista',
  ARTIST_METRICS_DASHBOARD: '/dashboard-metricas-artista',
  ARTIST_REPUTATION_DASHBOARD: '/dashboard-reputación-artista',
  ARTICLES: '/articulos',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  HOW_TO_BUY: '/como-comprar',

  //Dashboard Configuración
  DASHBOARD_MY_DATA: '/dashboard-mis-datos',
  DASHBOARD_SECURITY: '/dashboard-seguridad',
  DASHBOARD_PRIVACY: '/dashboard-privacidad',
  DASHBOARD_EMAILS: '/dashboard-emails',
  DASHBOARD_ALERTS: '/dashboard-alerts',
};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/privada',
  ARTICLE_ID: '/articulo/:id',
  ARTIST_SELL_DASHBOARD_ID: '/dashboard-ventas-artista/:id',
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;

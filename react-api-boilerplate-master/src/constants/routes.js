/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
<<<<<<< HEAD
  ARTIST_DASHBOARD: '/dashboard_artista',
  PUBLICATIONS: '/publicaciones',
=======
  ARTIST_DASHBOARD: '/dashboard-artista',
  ARTIST_PUBLICATIONS_DASHBOARD: '/dashboard-publicaciones-artista',
  ARTIST_QUESTIONS_DASHBOARD: '/dashboard-preguntas-artista',
  ARTIST_SELL_DASHBOARD: '/dashboard-ventas-artista',
  ARTIST_METRICS_DASHBOARD: '/dashboard-metricas-artista',
  ARTIST_REPUTATION_DASHBOARD: '/dashboard-reputación-artista',
>>>>>>> dev
  ARTICLES: '/articulos',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  ANTD: '/antd'
};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/privada',
  ARTICLE_ID: '/articulo/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;

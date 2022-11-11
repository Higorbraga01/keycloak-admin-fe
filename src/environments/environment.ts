export const environment = {
  production: false,
  BASE_API_URL: 'https://localhost:8443/',
  KEYCLOAK_URL: 'http://localhost:8190/auth',
  KEYCLOAK_REALM: 'FAB',
  KEYCLOAK_CLIENT_ID: 'controle-acesso',
  KEYCLOAK_REDIRECT_URI:
    'http://localhost:4200/controle-acesso/assets/silent-check-sso.html',
  FRONT_URL: 'http://localhost:4200/cosntrole-acesso',
  SHOW_LOGGING_ROUTES: false,
};

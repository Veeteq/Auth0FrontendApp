import { default as auth } from '../../auth-config.json';

export const environment = {
  production: false,
  auth: {
    domain: auth.domain,
    clientId: auth.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }
};

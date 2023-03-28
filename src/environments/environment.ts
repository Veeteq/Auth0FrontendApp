import { default as config } from '../../auth-config.json';

export const environment = {
  production: false,
  auth: {
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: config.audience
    }
  },
  dev: {
    apiUrl: config.apiUrl
  }
};

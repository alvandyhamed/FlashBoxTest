// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as addCryptoActions from './addCryptoActions';
import * as addActions from './addActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
  addCryptoActions,
  addActions,
);

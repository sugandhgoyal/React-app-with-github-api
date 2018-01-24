import _articleAction from './action/aticle.action';
import _feedAction from './action/feed.action';
import _userAction from './action/user.action';
//import searchArticleDataApi from './ayncAction.js/article.async.action';

export { _articleAction as articleAction };
export { loadArticleDataApi } from './ayncAction.js/article.async.action';

export { _feedAction as feedAction };
export { loadFeedDataApi } from './ayncAction.js/feed.async.action';

export { _userAction as userAction };
export { searchArticleDataApi } from './ayncAction.js/article.async.action';
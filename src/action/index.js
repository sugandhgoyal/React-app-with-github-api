import _articleAction from './action/aticle.action';
import _feedAction from './action/feed.action';


export { _articleAction as articleAction };
export { loadArticleDataApi } from './ayncAction.js/article.async.action';

export { _feedAction as feedAction };
export { loadFeedDataApi } from './ayncAction.js/feed.async.action';
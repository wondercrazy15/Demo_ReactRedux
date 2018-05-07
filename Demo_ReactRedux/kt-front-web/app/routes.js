// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    // {
    //   path: '/home',
    //   name: 'home',
    //   getComponent(nextState, cb) {
    //     const importModules = Promise.all([
    //       import('containers/HomePage/reducer'),
    //       import('containers/HomePage/sagas'),
    //       import('containers/HomePage'),
    //       import('containers/Sidebar/reducer')
    //     ]);
    //
    //     const renderRoute = loadModule(cb);
    //
    //     importModules.then(([reducer, sagas, component, sidebarReducer]) => {
    //       injectReducer('home', reducer.default);
    //       injectReducer('sidebar', sidebarReducer.default);
    //       injectSagas(sagas.default);
    //
    //       renderRoute(component);
    //     });
    //
    //     importModules.catch(errorLoading);
    //   },
    // },
    // {
    //   path: '/features',
    //   name: 'features',
    //   getComponent(nextState, cb) {
    //     import('containers/FeaturePage')
    //       .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
    {
      path: '/',
      name: 'main',
      getComponent(location, cb) {

        const importModules = Promise.all([
          import('containers/Sidebar/reducer'),
          import('containers/Sidebar/sagas'),
          import('containers/MainPage'),
          import('containers/MainContentsPage/reducer'),
          import('containers/MessagePage/reducer'),
          import('containers/MessagePage/sagas')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component, mainContentsPageReducer, MessagePageReducer,
        messageSagas]) => {
          injectReducer('sidebar', reducer.default);
          injectReducer('mainContents', mainContentsPageReducer.default);
          injectReducer('message', MessagePageReducer.default);
          injectSagas(sagas.default);
          injectSagas(messageSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

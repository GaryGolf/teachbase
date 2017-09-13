import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import {createLogger} from 'redux-logger'
import reduxThunk from 'redux-thunk'
import * as ReduxPromise from 'redux-promise'
import rootReducer, { RootState } from './reducers'

function configureStore(initialState?: RootState): Store<RootState> {

    const PRODUCTION = process.env.NODE_ENV=='production'
    const create = window.devToolsExtension && !PRODUCTION
        ? window.devToolsExtension()(createStore) : createStore

    const middleware: Middleware[] =[ reduxThunk, ReduxPromise ] 
    if(!PRODUCTION) middleware.push(createLogger({collapsed: true}))  
    const createStoreWithMiddleware = applyMiddleware(...middleware)(create)

    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>

    if (!PRODUCTION && module['hot']) {
        module['hot'].accept('./reducers', () => {
            store.replaceReducer(require('./reducers'))
        })
    }

    return store
}

export default configureStore()
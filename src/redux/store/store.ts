import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import { rootSaga, sagaMiddleware } from '../sagas'

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)
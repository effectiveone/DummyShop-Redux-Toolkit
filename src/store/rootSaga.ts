import { all } from 'redux-saga/effects';

import cartSlice from './reducers/cartSlice';

export default function* rootSaga() {
    yield all([...cartSlice]);
}

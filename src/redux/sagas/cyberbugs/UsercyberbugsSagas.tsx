import axios from "axios";
import { call, delay, fork, takeLatest } from "redux-saga/effects";
import { USER_SIGNIN_API } from "../../../const/cyberbugs/cyberbugs";

function* signinSaga(action: any) {
  console.log(action);
}

export function* theoDoiSingin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}

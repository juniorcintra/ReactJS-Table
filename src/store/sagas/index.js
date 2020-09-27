import { all, takeLatest } from "redux-saga/effects";

// import { NoticiaTypes } from "~/store/ducks/noticia";
// import { fetch as fetchNoticia } from "./noticia";

// import { NoticiasTypes } from "~/store/ducks/noticias";
// import { fetch as fetchNoticias } from "./noticias";

export default function* rootSaga() {
  yield all([
    // // noticia
    // takeLatest(NoticiaTypes.FETCH_REQUEST, fetchNoticia),
    // // noticias
    // takeLatest(NoticiasTypes.FETCH_REQUEST, fetchNoticias),
  ]);
}

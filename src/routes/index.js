import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

// import Noticias from "~/pages/Noticias";
// import Noticia from "~/pages/Noticias/Noticia";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/noticias" exact component={Noticias} />
      <Route path="/noticia/:id" exact component={Noticia} /> */}
    </Switch>
  );
}

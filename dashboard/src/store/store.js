import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk";

// export default Store = createStore(reducers, compose(applyMiddleware(thunk)));
export default createStore(reducers, compose(applyMiddleware(thunk)));

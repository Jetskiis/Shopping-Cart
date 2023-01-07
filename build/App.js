"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
require("./App.css");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Checkout_1 = __importDefault(require("./components/Checkout"));
const Contact_1 = __importDefault(require("./components/Contact"));
const Home_1 = __importDefault(require("./components/Home"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Store_1 = __importDefault(require("./components/Store"));
const App = () => {
    const [numItems, setNumItems] = (0, react_1.useState)(0);
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    return (document.title = "Electronics Store",
        (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { quantity: numItems }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", index: true, element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/store", element: (0, jsx_runtime_1.jsx)(Store_1.default, { modifyCart: setCartItems, changeItems: setNumItems }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/contact", element: (0, jsx_runtime_1.jsx)(Contact_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/checkout", element: (0, jsx_runtime_1.jsx)(Checkout_1.default, { cart: cartItems, modifyCart: setCartItems, changeItems: setNumItems }) })] })] }) }));
};
exports.App = App;
exports.default = exports.App;
//# sourceMappingURL=App.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../styles/Checkout.css");
const Checkout = (props) => {
    const [total, setTotal] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "d-flex flex-row justify-content-center min-vh-100", id: "shopping-cart" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'd-flex flex-column bg-light p-3 m-5 w-25' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "align-self-center bg-dark text-white fw-bold fs-2 w-50 text-center mt-2 mb-4 p-2" }, { children: "Shopping Cart" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card border border-dark mx-2 my-3 p-2 d-flex flex-row justify-content-center align-items-center bg-light checkout-card" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "img/product_img/airpods.png", className: "mx-auto", alt: "airpods" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "d-flex flex-column card-body ms-2 item-container" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "fs-4" }, { children: "Airpods" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "fs-4" }, { children: "$200" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "d-flex flex-column justify-content-center-align-items-center" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "d-flex flex-row justify-content-evenly  align-items-center border border-dark me-2 card-menu" }, { children: [(0, jsx_runtime_1.jsx)("button", { children: "-" }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "align-self-end fs-3" }, { children: "1" })), (0, jsx_runtime_1.jsx)("button", { children: "+" })] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "align-self-start remove-item" }, { children: "Remove Item" }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "d-flex border border-secondary flex-column justify-content-center align-items-center px-1 py-3 m-3" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "fs-3 fw-bold total-cost" }, { children: "Total: $200" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "bg-dark text-white fs-3 w-75 m-2 p-2 align-self-center" }, { children: "Proceed to Checkout" }))] }))] })) })));
};
exports.default = Checkout;
//# sourceMappingURL=Checkout.js.map
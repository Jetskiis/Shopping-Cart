"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Navbar = (props) => {
    const [numItems, setNumItems] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (props.quantity != numItems) {
            setNumItems(props.quantity);
        }
    }, [props.quantity, numItems]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "navbar navbar-dark bg-dark navbar-expand-md p-4", id: "navbar-banner" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container-fluid d-flex flex-row justify-content-around text-white" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "brand ms-5" }, { children: "Electronics Store" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-5" }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "navbar-nav mb-2 mb-lg-0" }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "nav-link text-white fw-bold", href: "/" }, { children: "Home" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "nav-link text-white fw-bold", href: "/store" }, { children: "Store" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "nav-link text-white fw-bold", href: "/contact" }, { children: "Contact" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "nav-item ms-4" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "nav-link text-white fw-bold", href: "/checkout" }, { children: "Cart" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: "nav-link text-white" }, { children: ["(", numItems, ")"] })) }))] })) }))] })) })));
};
exports.Navbar = Navbar;
exports.default = exports.Navbar;
//# sourceMappingURL=Navbar.js.map
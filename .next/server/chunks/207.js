"use strict";
exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 4795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5368);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mt-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: " row align-items-center justify-content-between mt-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "col-auto d-flex row align-items-center list-unstyled",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "col-auto",
                            style: {
                                width: "50px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "https://github.com/CDylan-source",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    target: "blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGithub
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "col-auto",
                            style: {
                                width: "50px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "https://www.linkedin.com/in/chapuis-dylan-373679210/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    target: "blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "col-auto",
                    children: "Chapuis Dylan"
                })
            ]
        })
    });
};


/***/ }),

/***/ 9098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/elements/lightmode.jsx


function Lightmode({ light_or_dark , onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        style: {
            border: "none",
            background: "unset"
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "65",
            height: "65",
            viewBox: "0 0 65 65",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M59.7253 0.274921C59.3588 -0.0916403 58.7663 -0.0916403 58.3997 0.274921L0.274921 58.3997C-0.0916403 58.7663 -0.0916403 59.3588 0.274921 59.7253C0.457733 59.9081 0.697732 60 0.937731 60C1.17773 60 1.41773 59.9081 1.60054 59.7253L59.7253 1.60054C60.0919 1.23398 60.0919 0.641482 59.7253 0.274921Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M25.3126 16.8751C25.3126 12.2223 21.527 8.43762 16.8751 8.43762C12.2233 8.43762 8.43766 12.2223 8.43766 16.8751C8.43766 21.5279 12.2233 25.3126 16.8751 25.3126C21.527 25.3126 25.3126 21.5279 25.3126 16.8751ZM16.8751 23.4376C13.2564 23.4376 10.3127 20.4929 10.3127 16.8751C10.3127 13.2573 13.2564 10.3126 16.8751 10.3126C20.4939 10.3126 23.4376 13.2573 23.4376 16.8751C23.4376 20.4929 20.4939 23.4376 16.8751 23.4376Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.0627 7.50024H19.6877C20.013 7.50024 20.3139 7.33149 20.4855 7.05493C20.657 6.77837 20.672 6.43337 20.5267 6.14275L17.7142 0.518709C17.3964 -0.116913 16.3549 -0.116913 16.037 0.518709L13.2246 6.14369C13.0792 6.43431 13.0952 6.77931 13.2658 7.05587C13.4364 7.33243 13.7383 7.50118 14.0636 7.50118L14.0627 7.50024ZM16.8752 3.03401L18.1708 5.62525H15.5795L16.8752 3.03401Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M6.7053 11.868C6.80843 12.1764 7.06343 12.4089 7.37936 12.4839C7.45155 12.5008 7.5228 12.5083 7.59499 12.5083C7.84061 12.5083 8.08061 12.4108 8.2578 12.2336L12.2356 8.25677C12.4653 8.02708 12.56 7.69427 12.485 7.37833C12.41 7.06146 12.1775 6.8074 11.869 6.70427L5.90281 4.71584C5.56531 4.60241 5.19406 4.69147 4.94375 4.94178C4.6925 5.19303 4.60531 5.56428 4.71687 5.90084L6.70624 11.8661L6.7053 11.868ZM9.83654 8.00458L8.00467 9.83645L7.0878 7.08771L9.83654 8.00458Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0.518598 17.7142L6.14358 20.5267C6.27576 20.5924 6.4192 20.6252 6.56264 20.6252C6.7342 20.6252 6.90482 20.5783 7.05576 20.4855C7.33138 20.3139 7.50013 20.013 7.50013 19.6877V14.0627C7.50013 13.7374 7.33138 13.4364 7.05576 13.2649C6.78014 13.0933 6.43326 13.0793 6.14358 13.2236L0.518598 16.0361C0.200786 16.1955 0.000162125 16.5199 0.000162125 16.8752C0.000162125 17.2305 0.200786 17.5549 0.518598 17.7142ZM5.62514 15.5805V18.1717L3.0339 16.8761L5.62514 15.5805Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M7.37933 21.2664C7.06339 21.3414 6.80839 21.5739 6.70527 21.8823L4.7159 27.8476C4.6034 28.1841 4.69152 28.5563 4.94277 28.8066C5.1209 28.9848 5.3609 29.0813 5.60558 29.0813C5.70496 29.0813 5.80433 29.0654 5.90183 29.0326L11.8681 27.0441C12.1765 26.942 12.409 26.687 12.484 26.3701C12.559 26.0541 12.4643 25.7223 12.2346 25.4917L8.25682 21.5148C8.02714 21.2851 7.69432 21.1914 7.37839 21.2645L7.37933 21.2664ZM7.08776 26.6626L8.00464 23.9138L9.8365 25.7457L7.08776 26.6626Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19.6876 26.2501H14.0626C13.7373 26.2501 13.4364 26.4189 13.2648 26.6954C13.0933 26.972 13.0783 27.317 13.2236 27.6076L16.0361 33.2326C16.1945 33.5504 16.5198 33.751 16.8751 33.751C17.2304 33.751 17.5548 33.5504 17.7142 33.2326L20.5267 27.6076C20.672 27.317 20.656 26.972 20.4854 26.6954C20.3148 26.4189 20.0129 26.2501 19.6876 26.2501ZM16.8751 30.7164L15.5795 28.1251H18.1707L16.8751 30.7164Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M21.8813 27.0451L27.8475 29.0335C27.945 29.0663 28.0444 29.0822 28.1438 29.0822C28.3885 29.0822 28.6285 28.9857 28.8066 28.8076C29.0578 28.5563 29.145 28.1851 29.0335 27.8485L27.0441 21.8832C26.941 21.5748 26.686 21.3423 26.37 21.2673C26.0522 21.1942 25.7213 21.287 25.4916 21.5176L21.5138 25.4944C21.2841 25.7241 21.1894 26.0569 21.2644 26.3729C21.3394 26.6898 21.5719 26.9438 21.8804 27.0469L21.8813 27.0451ZM25.7457 23.9138L26.6625 26.6626L23.9138 25.7457L25.7457 23.9138Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M26.6945 13.2649C26.4188 13.4364 26.2501 13.7374 26.2501 14.0627V19.6877C26.2501 20.013 26.4188 20.3139 26.6945 20.4855C26.8454 20.5792 27.016 20.6252 27.1876 20.6252C27.331 20.6252 27.4745 20.5924 27.6066 20.5267L33.2316 17.7142C33.5494 17.5549 33.7501 17.2305 33.7501 16.8752C33.7501 16.5199 33.5494 16.1955 33.2316 16.0361L27.6066 13.2236C27.316 13.0793 26.971 13.0933 26.6945 13.2649ZM28.1251 15.5796L30.7163 16.8752L28.1251 18.1708V15.5796Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M25.4926 12.2346C25.6698 12.4118 25.9098 12.5093 26.1554 12.5093C26.2276 12.5093 26.2998 12.5008 26.371 12.4849C26.687 12.4099 26.942 12.1774 27.0451 11.8689L29.0345 5.90366C29.147 5.5671 29.0588 5.19491 28.8076 4.9446C28.5563 4.69241 28.1842 4.60429 27.8485 4.71866L21.8823 6.70709C21.5739 6.80928 21.3414 7.06428 21.2664 7.38115C21.1914 7.69709 21.2861 8.02896 21.5158 8.25959L25.4935 12.2364L25.4926 12.2346ZM26.6626 7.08865L25.7457 9.83739L23.9139 8.00553L26.6626 7.08865Z",
                    fill: light_or_dark["sun"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M49.2882 31.7278C48.9441 31.5957 48.555 31.681 48.2944 31.9425C48.0338 32.2022 47.9504 32.5903 48.0797 32.9363C48.5241 34.1166 48.7491 35.3372 48.7491 36.5635C48.7491 42.2494 44.1226 46.8759 38.4367 46.8759C37.2095 46.8759 35.9888 46.6509 34.8095 46.2065C34.4654 46.0744 34.0764 46.1597 33.8157 46.4212C33.5551 46.6809 33.4717 47.07 33.601 47.415C35.3804 52.14 39.961 55.3143 44.9991 55.3143C51.7191 55.3143 57.1866 49.8468 57.1866 43.1269C57.1866 38.0888 54.0122 33.5082 49.2872 31.7297L49.2882 31.7278ZM45.0001 53.4374C41.4123 53.4374 38.0992 51.5343 36.242 48.5465C36.9676 48.6825 37.7017 48.75 38.4376 48.75C45.1576 48.75 50.625 43.2825 50.625 36.5625C50.625 35.8266 50.5566 35.0925 50.4216 34.3669C53.4094 36.2231 55.3125 39.5372 55.3125 43.125C55.3125 48.8109 50.686 53.4374 45.0001 53.4374Z",
                    fill: light_or_dark["moon"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M37.5274 41.4788C37.6314 41.8951 38.0046 42.1857 38.4339 42.1876H38.4377C38.8652 42.1876 39.2392 41.896 39.3461 41.4826C39.3799 41.3513 40.2152 38.2567 43.3539 37.472C43.7711 37.3679 44.0645 36.9929 44.0645 36.5626C44.0645 36.1323 43.7711 35.7573 43.3539 35.6532C40.2152 34.8685 39.3799 31.7739 39.3471 31.6464C39.243 31.2301 38.8699 30.9395 38.4405 30.9376H38.4367C38.0092 30.9376 37.6352 31.2292 37.5283 31.6426C37.4946 31.7739 36.6593 34.8685 33.5205 35.6532C33.1033 35.7573 32.8099 36.1323 32.8099 36.5626C32.8099 36.9929 33.1033 37.3679 33.5205 37.472C36.6593 38.2567 37.4946 41.3513 37.5274 41.4788ZM38.4377 34.1476C38.9392 34.9614 39.6874 35.867 40.7739 36.5626C39.6874 37.2582 38.9392 38.1638 38.4377 38.9776C37.9361 38.1638 37.188 37.2582 36.1014 36.5626C37.188 35.867 37.9361 34.9614 38.4377 34.1476Z",
                    fill: light_or_dark["moon"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M45.9375 29.0626C47.4881 29.0626 48.75 27.8007 48.75 26.2501C48.75 24.6995 47.4881 23.4376 45.9375 23.4376C44.3869 23.4376 43.125 24.6995 43.125 26.2501C43.125 27.8007 44.3869 29.0626 45.9375 29.0626ZM45.9375 25.3126C46.454 25.3126 46.875 25.7326 46.875 26.2501C46.875 26.7676 46.454 27.1876 45.9375 27.1876C45.4209 27.1876 45 26.7676 45 26.2501C45 25.7326 45.4209 25.3126 45.9375 25.3126Z",
                    fill: light_or_dark["moon"]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M26.2501 47.8126C24.6995 47.8126 23.4377 49.0745 23.4377 50.6251C23.4377 52.1757 24.6995 53.4376 26.2501 53.4376C27.8008 53.4376 29.0626 52.1757 29.0626 50.6251C29.0626 49.0745 27.8008 47.8126 26.2501 47.8126ZM26.2501 51.5626C25.7336 51.5626 25.3127 51.1426 25.3127 50.6251C25.3127 50.1076 25.7336 49.6876 26.2501 49.6876C26.7667 49.6876 27.1876 50.1076 27.1876 50.6251C27.1876 51.1426 26.7667 51.5626 26.2501 51.5626Z",
                    fill: light_or_dark["moon"]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo_dark.svg
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo_dark.8a2a0571.svg","height":54,"width":65});
;// CONCATENATED MODULE: ./public/logo_light.svg
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo_light.1150d823.svg","height":54,"width":65});
;// CONCATENATED MODULE: ./public/elements/header.jsx










function Header({ lightmodeon , light_or_dark , onClick , currentPage  }) {
    const navClass = function(page) {
        let className = "mx-auto nav-item nav-link";
        if (page === currentPage) {
            className += " active";
        }
        return className;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Mon portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "My portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Portfolio, React, NextJs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Dylan Chapuis"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    lightmodeon ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "logo_light.svg",
                        type: "image/x-icon"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "logo_dark.svg",
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
                    expand: "lg",
                    className: "justify-content-between",
                    children: [
                        lightmodeon ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar-brand",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    style: {
                                        height: "60px",
                                        width: "60px"
                                    },
                                    src: logo_light,
                                    alt: "Le logo du site, un renard orange et noir",
                                    className: "ms-4",
                                    width: "100",
                                    height: "100",
                                    layout: "raw"
                                })
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar-brand",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    style: {
                                        height: "60px",
                                        width: "60px"
                                    },
                                    src: logo_dark,
                                    alt: "Le logo du site, un renard orange et noir",
                                    className: "ms-4",
                                    width: "100",
                                    height: "100",
                                    layout: "raw"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Lightmode, {
                            onClick: onClick,
                            light_or_dark: light_or_dark
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
                            "aria-controls": "basic-navbar-nav",
                            className: "me-4 " + light_or_dark["navToggle"]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                            id: "basic-navbar-nav",
                            className: "justify-content-end",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                                className: "me-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: navClass("home"),
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: navClass("about"),
                                            children: "\xc0 propos"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/portfolio",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: navClass("portfolio"),
                                            children: "Portfolio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: navClass("contact"),
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;
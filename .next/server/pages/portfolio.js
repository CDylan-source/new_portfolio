"use strict";
(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 7262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Portfolio),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/elements/header.jsx + 3 modules
var header = __webpack_require__(9098);
// EXTERNAL MODULE: ./public/elements/footer.jsx
var footer = __webpack_require__(4795);
;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: ./pages/portfolio.jsx







function Portfolio({ Projets  }) {
    const { 0: page , 1: setPage  } = (0,external_react_.useState)("portfolio");
    const localLightMode =  false ? 0 : "";
    const { 0: lightmodeon , 1: setLightmodeon  } = (0,external_react_.useState)(localLightMode);
    const handleClick = function(e) {
        e.preventDefault();
        setLightmodeon(!lightmodeon);
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        lightmodeon
    ]);
    const light_or_dark = {
        sun: lightmodeon ? "#DE6439" : "#fff",
        moon: lightmodeon ? "#fff" : "#DE6439",
        navToggle: lightmodeon ? "" : "navbar-dark"
    };
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(0);
    const { 0: tagSelected , 1: setTagSelected  } = (0,external_react_.useState)("all");
    const handleClose = ()=>{
        setShow(false);
        setSelected(0);
    };
    const handleShow = (id)=>{
        setSelected(id);
        setShow(true);
    };
    const tagsSet = new Set();
    Projets.map((element)=>{
        element.portfolio_joint.map((subelement)=>{
            tagsSet.add(subelement.portfolio_tags.tag);
        });
    });
    const handleChange = (e)=>{
        setTagSelected(e.target.value);
    };
    const tags = Array.from(tagsSet);
    let arr = [];
    const ProjetsFiltered = ()=>{
        Projets.map((element)=>{
            var flatten = __webpack_require__(5755);
            const elementFlat = flatten(element);
            Object.values(elementFlat).includes(tagSelected) ? arr.push(element) : null;
        });
        return arr;
    };
    ProjetsFiltered();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: lightmodeon ? "body_light d-flex flex-column" : "body_dark d-flex flex-column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                onClick: handleClick,
                light_or_dark: light_or_dark,
                lightmodeon: lightmodeon,
                currentPage: page,
                onNavClick: setPage
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                name: "tags",
                id: "tags",
                className: "margin-start mb-4 select p-1",
                onChange: (e)=>handleChange(e)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "all",
                        children: "TOUT"
                    }),
                    tags.map((tag)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: tag,
                            children: tag
                        }, tag);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "customcontainer d-flex flex-wrap gap-5 justify-content-center mb-4 list-unstyled",
                children: tagSelected == "all" ? Projets.map((projet, id)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "card card-transparent col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 mb-md-0 py-4 d-flex align-items-center text-center max-width",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: projet.image,
                                    alt: "Photo du projet",
                                    className: "shadow-2-strong mb-4 card-img-top mx-auto",
                                    style: {
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "0.6rem"
                                    },
                                    width: "1000",
                                    height: "1000",
                                    layout: "raw"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "card-title mb-3 titre",
                                    children: projet.titre
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex flex-wrap justify-content-center gap-3 mb-3",
                                    children: projet.portfolio_joint.map((element)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "card-text mb-0 mb-md-2 tag",
                                            children: element.portfolio_tags.tag
                                        }, element.portfolio_tags.tag);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "card-text mb-4 short",
                                    children: projet.short
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "more orange",
                                    onClick: ()=>handleShow(id)
                                    ,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "En savoir +"
                                    })
                                })
                            ]
                        })
                    }, id);
                }) : arr.map((projet, id)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "card card-transparent col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 mb-md-0 py-4 d-flex align-items-center text-center max-width",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: projet.image,
                                    alt: "Photo du projet",
                                    className: "shadow-2-strong mb-4 card-img-top mx-auto",
                                    style: {
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "0.6rem"
                                    },
                                    width: "1000",
                                    height: "1000",
                                    layout: "raw"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "card-title mb-3 titre",
                                    children: projet.titre
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex flex-wrap justify-content-center gap-3 mb-3",
                                    children: projet.portfolio_joint.map((element)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "card-text mb-0 mb-md-2 tag",
                                            children: element.portfolio_tags.tag
                                        }, element.portfolio_tags.tag);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "card-text mb-4 short",
                                    children: projet.short
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "more orange",
                                    onClick: ()=>handleShow(id)
                                    ,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "En savoir +"
                                    })
                                })
                            ]
                        })
                    }, id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                show: show,
                onHide: handleClose,
                size: "lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                            children: Projets[selected].titre
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex flex-column w-100 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Projets[selected].image,
                                    alt: "Photo du projet",
                                    className: "shadow-2-strong mb-4",
                                    style: {
                                        width: "90%",
                                        height: "auto"
                                    },
                                    width: "1000",
                                    height: "1000",
                                    layout: "raw"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: Projets[selected].description
                                }),
                                Projets[selected].lien ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: Projets[selected].lien,
                                    className: "more noir",
                                    target: "blank",
                                    children: "Lien vers le site"
                                }) : ""
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Footer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleClose,
                            className: "more startnoir blanc",
                            children: "Close"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps() {
    const prisma = new client_namespaceObject.PrismaClient();
    const Projets = await prisma.portfolio_projets.findMany({
        include: {
            portfolio_joint: {
                include: {
                    portfolio_tags: true
                }
            }
        }
    });
    return {
        props: {
            Projets
        },
        revalidate: 2000
    };
} // https://drive.google.com/file/d/1zHuBeqD_1RtgSzgQIsG0dbIOZl9LMDGX/view?usp=sharing


/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5755:
/***/ ((module) => {

module.exports = require("flat");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,207], () => (__webpack_exec__(7262)));
module.exports = __webpack_exports__;

})();
"use strict";



//  E X P O R T

module.exports = exports = {
  defaultSeverity: "error",
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "at-rule-blacklist": null,
    "at-rule-empty-line-before": [
      "always", {
        ignore: [
          "blockless-after-blockless",
          "inside-block"
        ]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": [
      true, {
        ignoreAtRules: [
          "if",
          "include",
          "mixin",
          "use"
        ]
      }
    ],
    "at-rule-no-vendor-prefix": true,
    "at-rule-property-requirelist": [
      {
        "font-face": [
          "font-display",
          "font-family",
          "font-style"
        ]
      }
    ],
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "at-rule-whitelist": null,
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": "always-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "always-where-possible",
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always", {
        except: [
          "first-nested"
        ],
        ignore: [
          "after-comment",
          "stylelint-commands"
        ]
      }
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": null,
    "custom-media-pattern": null,
    "custom-property-empty-line-before": "never",
    "custom-property-pattern": null,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 2,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": null,
    "declaration-no-important": true,
    "declaration-property-unit-blacklist": {
      "font-size": [
        "em",
        "px"
      ]
    },
    "declaration-property-unit-whitelist": null,
    "declaration-property-value-blacklist": null,
    "declaration-property-value-whitelist": null,
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-blacklist": null,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": [
      "always", {
        except: [
          "empty"
        ]
      }
    ],
    "function-url-scheme-blacklist": [
      "ftp",
      "/^http/"
    ],
    "function-url-scheme-whitelist": [
      "data",
      "file"
    ],
    "function-whitelist": null,
    "function-whitespace-after": "always",
    indentation: [
      2, {
        baseIndentLevel: 1,
        indentClosingBrace: false,
        message: "Please use 2 spaces for indentation. Tabs are gross."
      }
    ],
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": true,
    linebreaks: "unix",
    "max-empty-lines": [
      3, {
        ignore: [
          "comments"
        ]
      }
    ],
    "max-line-length": 120,
    "max-nesting-depth": [
      3, {
        ignore: [
          "blockless-at-rules",
          "pseudo-classes"
        ]
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-blacklist": null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true, // Might be painful
    "media-feature-name-value-whitelist": null,
    "media-feature-name-whitelist": null,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "never-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": [
      true, {
        ignore: [
          "selectors-within-list"
        ]
      }
    ],
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "no-empty-source": true,
    "no-eol-whitespace": [
      true, {
        ignore: [
          "empty-lines"
        ]
      }
    ],
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,
    "order/order": [
      "at-variables",
      "declarations",
      "custom-properties",
      "at-rules",
      "rules"
    ],
    "order/properties-alphabetical-order": true,
    "order/properties-order": [
      {
        emptyLineBeforeUnspecified: "never",
        groupName: "dimensions",
        noEmptyLineBetween: true,
        properties: [
          "width",
          "max-width",
          "min-width",
          "height",
          "max-height",
          "min-height"
        ]
      },
      {
        emptyLineBeforeUnspecified: "never",
        groupName: "position",
        noEmptyLineBetween: true,
        properties: [
          "margin",
          "padding",
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        emptyLineBeforeUnspecified: "always",
        groupName: "the rest",
        noEmptyLineBetween: false,
        properties: [
          "align-content",
          "align-items",
          "align-self",
          "all",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "appearance",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "block-size",
          "border",
          "border-top",
          "border-right",
          "border-bottom",
          "border-left",
          "border-top-color",
          "border-right-color",
          "border-bottom-color",
          "border-left-color",
          "border-top-style",
          "border-right-style",
          "border-bottom-style",
          "border-left-style",
          "border-top-width",
          "border-right-width",
          "border-bottom-width",
          "border-left-width",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-top-left-radius",
          "border-bottom-left-radius",
          "border-radius-topright",
          "border-radius-bottomright",
          "border-radius-topleft",
          "border-radius-bottomleft",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-radius",
          "border-spacing",
          "border-style",
          "border-width",
          "box-align",
          "box-decoration-break",
          "box-flex",
          "box-orient",
          "box-pack",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "clip-path",
          "color",
          "color-adjust",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "content",
          "counter-increment",
          "counter-reset",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "fill",
          "filter",
          "flex",
          "flex-align",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-order",
          "flex-pack",
          "flex-shrink",
          "flex-wrap",
          "float",
          "font",
          "font-display",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-optical-sizing",
          "font-size",
          "font-size-adjust",
          "font-smoothing",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-alternatives",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variantion-settings",
          "font-weight",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-gap",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "hyphenate-limit-chars",
          "hyphens",
          "image-rendering",
          "inline-size",
          "inset-block-end",
          "inset-block-start",
          "inset-inline-end",
          "inset-inline-start",
          "interpolation-mode",
          "isolation",
          "justify-content",
          "justify-items",
          "justify-self",
          "letter-spacing",
          "line-break",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin-block-end",
          "margin-block-start",
          "margin-collapse",
          "margin-inline-end",
          "margin-inline-start",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "margin-top-collapse",
          "margin-right-collapse",
          "margin-bottom-collapse",
          "margin-left-collapse",
          "marks",
          "mask",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "min-block-size",
          "min-inline-size",
          "mix-blend-mode",
          "object-fit",
          "object-position",
          "opacity",
          "order",
          "orphans",
          "osx-font-smoothing",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-scrolling",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding-block-end",
          "padding-block-start",
          "padding-inline-end",
          "padding-inline-start",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "page", // ?
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "perspective",
          "perspective-origin",
          "place-content",
          "place-items",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "rotate",
          "scale",
          "scroll-behavior",
          "scroll-snap-type",
          "scrollbar-color",
          "set-link-source",
          "shape-image-threshold",
          "shape-margin",
          "shape-outside",
          "size",
          "speak",
          "speak-as",
          "src",
          "suffix",
          "symbols",
          "system",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-size-adjust",
          "text-transform",
          "text-underline-position",
          "touch-action",
          "transform",
          "transform-box",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "translate",
          "unicode-bidi",
          "unicode-range",
          "user-select",
          "user-zoom",
          "vertical-align",
          "visibility",
          "white-space",
          "widows",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
          "zoom"
        ]
      }
    ],
    "property-blacklist": null,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "property-whitelist": null,
    "rule-empty-line-before": [
      "always-multi-line", {
        except: [
          "first-nested"
        ]
      }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-whitelist": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-combinator-blacklist": null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-combinator-whitelist": null,
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": null,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": null,
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 2,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 2,
    "selector-max-pseudo-class": 2,
    "selector-max-specificity": "0,3,0",
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "selector-nested-pattern": null,
    "selector-no-qualifying-type": [
      true, {
        ignore: [
          "attribute"
        ]
      }
    ],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-class-whitelist": null,
    "selector-pseudo-element-blacklist": null,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-pseudo-element-whitelist": null,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [
      true, {
        ignore: [
          "custom-elements"
        ]
      }
    ],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "time-min-milliseconds": 100,
    "unicode-bom": "never",
    "unit-blacklist": [
      "em"
    ],
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": null,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true
  }
};

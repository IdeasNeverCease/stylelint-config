"use strict";



//  E X P O R T

module.exports = exports = {
  defaultSeverity: "error",
  rules: {
    "at-rule-blacklist": null,
    "at-rule-empty-line-before": [
      "always", {
        ignore: [
          "after-comment",
          "first-nested"
        ],
        except: [
          "blockless-after-blockless",
          "blockless-after-same-name-blockless",
          "inside-block"
        ],
        message: "Code readability is super important! You are building for humans, not machines."
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": true,
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
    "block-closing-brace-space-after": "always",
    "block-closing-brace-space-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "never-multi-line",
    "block-opening-brace-space-after": "always",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "always-where-possible",
    "color-no-hex": false,
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
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 2,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
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
      2, {
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
    "no-descending-specificity": true,
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
    "selector-list-comma-space-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 2,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 2,
    "selector-max-pseudo-class": 2,
    "selector-max-specificity": "0, 2, 0",
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
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true
  }
};
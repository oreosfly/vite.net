module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'html'
  ],
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  extends: "eslint:recommended",
  parserOptions: {
    'ecmaFeatures': {
      "jsx": true
    },
    "sourceType": "module"
  },
  rules: {
    "no-console": [
      "off"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "globals": {
    "window": true
  },
};
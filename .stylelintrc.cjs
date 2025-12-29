module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": "^[a-z]([a-z0-9-]|__|--)*$", // BEM-ish
    "max-nesting-depth": 3
  }
};

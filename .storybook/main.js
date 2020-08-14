module.exports = {
  addons: [
    {
      name: "@storybook/addon-actions/register",
      options: { configureJSX: true }
    },
    {
      name: "@storybook/addon-links/register",
      options: { configureJSX: true }
    },
    {
      name: "@storybook/addon-knobs/register",
      options: { configureJSX: true }
    },
    {
      name: "@storybook/addon-storysource",
      options: { configureJSX: true }
    },
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
   }
  ]
};

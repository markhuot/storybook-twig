export function webpack(config) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.twig$/,
          use: [
            {
              loader: require.resolve('twig-loader'),
              options: {
                debug: true,
                cache: false,
              }
            },
          ],
        },
      ],
    },
  };
}

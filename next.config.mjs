// next.config.js
export function webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    return config;
}

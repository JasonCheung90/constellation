module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

在使用Vue CLI创建的Vue项目中，你可以通过修改`vue.config.js`文件来自定义Webpack的配置，包括添加或修改Webpack插件。`vue.config.js`提供了一个`configureWebpack`选项，允许你直接修改Webpack的配置。此外，还有一个`chainWebpack`选项，它提供了一个更细粒度的API来修改Webpack的配置。

### 使用`configureWebpack`添加Webpack插件

如果你想要添加一个新的Webpack插件或者修改现有插件的配置，可以使用`configureWebpack`属性。这个属性可以是一个对象，直接被合并到最终的Webpack配置中；也可以是一个函数，允许你基于现有配置进行更复杂的修改。

#### 示例：添加一个简单的插件

```javascript
// vue.config.js
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // 定义全局常量
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
  },
};
```

在这个例子中，我们使用`configureWebpack`选项添加了`DefinePlugin`插件，用于定义一些全局的常量。

### 使用`chainWebpack`修改Webpack配置

`chainWebpack`是另一个可以用来修改Webpack配置的选项，它提供了一个基于Webpack Chain的API，允许你对Webpack的配置进行更细粒度的修改。

#### 示例：通过`chainWebpack`添加一个插件

```javascript
// vue.config.js
const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    // 添加一个新的插件
    config.plugin('define').use(webpack.DefinePlugin, [{
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }]);
  },
};
```

在这个例子中，我们使用`chainWebpack`来添加`DefinePlugin`插件。通过`config.plugin('define').use(...)`的方式，我们可以更精确地控制插件的添加和配置。

### 注意事项

- 当你通过`vue.config.js`修改Webpack配置时，需要确保你对Webpack有一定的了解，以避免不必要的配置错误。
- 使用`configureWebpack`时，你直接修改的是Webpack的配置对象，这种方式比较直接，但如果不小心，可能会覆盖Vue CLI的默认配置。
- 使用`chainWebpack`可以提供更精细的控制能力，它基于webpack-chain，允许你通过链式API修改配置。这种方式更安全，不太可能不小心覆盖掉默认配置。
- 如果你不熟悉webpack-chain，理解和使用`chainWebpack`可能会有一定的学习曲线。

根据你的需求选择合适的方式来修改Webpack配置。如果你只是需要添加一些简单的插件或者修改一些基本配置，`configureWebpack`可能就足够了。如果你需要进行更复杂的配置调整，那么`chainWebpack`可能更适合你。
# Module Based On Vue

## Files Path
- ./src/assets/sass
- entry : hokori.sass
- variable 全局变量 : ./style/_variable.sass
    - 可在此修改配色方案





## Style Dependencies

- Font Awesome





## Style Functions

- [ ] Color 配色方案
- [ ] Spacing 间距类
- [ ] Position 定位类
- [ ] Shadow 阴影类
- [ ] Typography 排版类
- [ ] Display 可见性
- [ ] Flex布局
- [ ] Grid 栅格系统(Flex 实现)
- [ ] Dark-mode 深色模式
- [ ] Assist 辅助CSS类
- [ ] Responsive 由html下的font-size和rem生成的响应式方案




## Name 命名规范

例子：
- .row
- .row_re
- .align-content_center
- .align-content_start

1. 用`-`表示父子关系
2. 用`_`表示类的状态

为了便于使用，最终决定去掉`h-`的命名前缀，这样同时也降低了和其他UI框架的兼容性
等有实际使用价值后可以考虑生成两套方案


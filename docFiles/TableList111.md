### Api

高级表格继承于`antd`的`Table`组件，同样可以使用`antd`的方式进行传参。

| 属性           | 说明                                                                  | 类型                           | 默认值 |
| -------------- | --------------------------------------------------------------------- | ------------------------------ | ------ |
| showFullscreen | 是否展示全屏按钮                                                      | `boolean`                      | false  |
| headRender     | 用于渲染左上角的按钮。                                                | `() => ReactNode`              | -      |
| batchRender    | 用于渲染左上角的批量操作按钮。                                        | `( any[] ) => ReactNode`       | -      |
| header         | 用于渲染表格顶部，多用于渲染表格顶部复杂筛选。                        | `() => ReactNode`              | -      |
| hideToolbar    | 是否展示表格顶部组件，包括`headRender`，`batchRender`渲染出来的 dom。 | `boolean`                      | false  |
| refresh        | 右上角刷新按钮点击的回调事件。                                        | `() => Promise<void>`\|`false` | -      |
| rowKeys        | 渲染默认选中的列，一般用于选择操作之后清空选中的列                    | `ReactText[]`                  | -      |
| columns        | 继承于`Table`组件的`columns`属性                                      | columns                        | -      |

### columns

`columns参数`继承于`antd`的`Table`组件的`columns参数`，同样可以使用`antd`的方式进行传参。

| 属性         | 说明                                                     | 类型                                                                             | 默认值 |
| ------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| editable     | 是够允许编辑该列                                         | `boolean`                                                                        | false  |
| onEdit       | 进行编辑的时候的回调函数，当`editable`为 true 时生效     | `(row: any, originValue: string \| number) => void`                              | -      |
| rules        | 当允许编辑时的输入框的校验规则，参考 antd 的表单校验规则 | `Rule[]`                                                                         | -      |
| ellipsis     | 是否超出文本显示省略号和 tooltip 展示                    | `boolean`                                                                        | false  |
| hide         | 是否隐藏该列                                             | `boolean`                                                                        | false  |
| search       | 是够展示搜索功能，TableList 组件默认配置搜索函数         | `boolean`                                                                        | false  |
| sorter       | 是否使用排序功能                                         | `boolean`                                                                        | false  |
| title        |                                                          | `React.ReactNode \| ((props: ColumnTitleProps<RecordType>) => React.ReactNode) ` | -      |
| titleTooltip |                                                          | `ReactNode`                                                                      | -      |

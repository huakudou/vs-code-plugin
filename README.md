# CCL README

输入如下简写字符，会自动创建相关代码片段，输入后，按 tab 键光标会自动跳转到下一个输入的位置

| 字符         |                      代码段 |                             备注                              |
| :----------- | --------------------------: | :-----------------------------------------------------------: |
| ustate       |                    useState | 会自动有两个光标同时输入，输入后按 tab 键，变量首字母会转大写 |
| umemo        |                     useMemo |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| ucallback    |                 useCallback |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| ueffect      |                   useEffect |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| uref         |                      useRef |                 生成代码块，支持 tab 切换光标                 |
| utranslation |              useTranslation |                 生成代码块，支持 tab 切换光标                 |
| urequest     |          ahooks->useRequest |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| edfunc       | export default function(){} |            导出默认 React 组件，支持 tab 切换光标             |
| ecfunc       |    export const xx= () =>{} |              导出 React 组件，支持 tab 切换光标               |
| func         |                function(){} |                 React 组件，支持 tab 切换光标                 |

e.g.
输入 umemo 弹出提示，按 enter 键，会插入如下代码块,输入后按 tab 键，定位到下一个输入的位置
const 光标位置= React.useMemo(() => {

}, []);

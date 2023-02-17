# CCL README

输入如下简写字符，会自动创建相关代码片段，输入后，按 tab 键光标会自动跳转到下一个输入的位置

| 字符           |             代码段 |                             备注                              |
| :------------- | -----------------: | :-----------------------------------------------------------: |
| usestate       |           useState | 会自动有两个光标同时输入，输入后按 tab 键，变量首字母会转大写 |
| usememo        |            useMemo |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| usecallback    |        useCallback |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| useeffect      |          useEffect |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| useref         |             useRef |                 生成代码块，支持 tab 切换光标                 |
| usetranslation |     useTranslation |                 生成代码块，支持 tab 切换光标                 |
| userequest     | ahooks->useRequest |   生成代码块，不用繁琐的输入()=>{}等内容，支持 tab 切换光标   |
| func           |       function(){} |         快速创建 React 组件或函数，支持 tab 切换光标          |
| .foreach       |      forEach(()=>) |                    快速创建 forEach 函数体                    |
| .reduce        |       reduce(()=>) |                    快速创建 reduce 函数体                     |
| .map           |          map(()=>) |                      快速创建 map 函数体                      |
| .filter        |       filter(()=>) |                    快速创建 filter 函数体                     |
| .find          |         find(()=>) |                     快速创建 find 函数体                      |
| .findindex     |    findIndex(()=>) |                   快速创建 findIndex 函数体                   |
| .some          |         some(()=>) |                     快速创建 some 函数体                      |
| .every         |        every(()=>) |                     快速创建 every 函数体                     |
| .sort          |         sort(()=>) |                     快速创建 sort 函数体                      |

e.g.
输入 usememo 弹出提示，按 enter 键，会插入如下代码块,输入后按 tab 键，定位到下一个输入的位置
const 光标位置= React.useMemo(() => {

}, []);

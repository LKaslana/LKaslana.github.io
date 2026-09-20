# Yangcheng Li

个人主页：https://yangcheng-li.github.io/

仓库：https://github.com/Yangcheng-Li/yangcheng-li.github.io

使用 GitHub Pages 托管的静态个人主页。修改 index.html 更新内容，style.css 调整样式，site.js 管理导航。发布源为 main 分支根目录。

## 安全维护

- 网站保持公开，GitHub Pages 强制 HTTPS。
- CSP 仅允许同源脚本与样式，禁止内联脚本、动态执行、外部连接、表单提交和嵌入框架；新增外部资源前须相应审查策略。
- 使用 no-referrer；新窗口链接使用 noopener noreferrer。
- 默认主分支禁止删除与强制推送；外部贡献者的 fork PR 工作流须经批准。默认工作流令牌权限为只读。
- Secret Protection、push protection 与私密漏洞报告已启用。请通过仓库 Security 页面报告漏洞。
- 不提交 API 密钥、私钥或 .env 文件；.gitignore 不能保护已经跟踪或曾公开的秘密。
- 公开网页及前端源码可以被访问和复制。这些措施不等同于自定义 WAF 或完整防嵌入保护；GitHub Pages 上的 meta CSP 不支持 frame-ancestors。

## 语言与样式

页首支持中英文切换，默认中文并在浏览器本地记住选择。翻译维护于 site.js，新增页面文字应补齐中英文版本。当前为黑色强调色与灰白背景，统一字号和字重。

## 个人兴趣

页尾的 Steam 资料卡链接至 https://steamcommunity.com/id/LKaslana/ 。Steam 不允许跨站 iframe 嵌入，因此本站使用独立资料卡。

“Steam 游戏收藏（26）”默认收起，点击展开封面列表，支持中英文与键盘操作。顺序取自用户 Steam 游戏库的游戏时间排序，保留全部 26 款及 Steam 原始同分顺序。资料为静态快照，不展示或存储时长数字、最近游玩日期，不自动同步。

游戏封面来源于对应 Steam 商店页面的 og:image，头像来自公开资料页，图片保存在 assets/ 中。浏览者无需加载 Steam 的脚本或提供任何登录凭据。

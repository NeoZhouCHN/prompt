# 🚀 PromptCraft - 专业提示词工具网站

<div align="center">

![PromptCraft Logo](https://img.shields.io/badge/PromptCraft-AI%20Prompt%20Tool-007AFF?style=for-the-badge&logo=sparkles)

**让AI更懂你的创意想法**

一个专业的提示词工具平台，帮助您创建、优化和管理高质量的AI提示词，提升工作效率和创作质量。

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6+-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

[🌟 在线演示](https://github.com/NeoZhouCHN/prompt) | [📖 使用指南](#使用指南) | [🛠️ 开发文档](#开发文档)

</div>

## ✨ 核心功能

### 🎯 提示词模板库
- **分类整理**: 写作、编程、分析、创意、商业、教育等多个领域
- **智能搜索**: 支持标题、描述、标签的全文搜索
- **筛选排序**: 按评分、使用量、时间等多维度排序
- **一键复制**: 快速复制模板到剪贴板
- **收藏功能**: 个人收藏夹管理

### 🤖 AI提示词优化工具
- **智能分析**: 从清晰度、具体性、结构性、上下文四个维度评分
- **优化建议**: 提供具体的改进建议和示例
- **对比展示**: 原始提示词与优化后的对比
- **实时反馈**: 即时分析结果和评分

### 🎨 苹果风格设计
- **简洁现代**: 受苹果发布会启发的视觉设计
- **流畅动画**: 丰富的过渡效果和交互反馈
- **响应式布局**: 完美适配桌面、平板、手机
- **无障碍设计**: 符合可访问性标准

## 🖼️ 界面预览

<div align="center">

### 首页
*简洁优雅的首页设计，突出核心功能*

### 模板库
*丰富的提示词模板，支持搜索和分类*

### 优化工具
*智能分析提示词，提供专业优化建议*

</div>

## 📋 目录
- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [详细安装指南](#详细安装指南)
- [使用指南](#使用指南)
- [开发文档](#开发文档)
- [部署指南](#部署指南)
- [故障排除](#故障排除)
- [贡献指南](#贡献指南)

## 🔧 环境要求

### 必需软件版本
- **Node.js**: >= 18.0.0 (推荐 18.17.0 或更高版本)
- **npm**: >= 9.0.0 (通常随 Node.js 自动安装)
- **Git**: 最新版本

### 检查当前版本
```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 检查 Git 版本
git --version
```

### 安装 Node.js (如果未安装)
- **官方下载**: https://nodejs.org/
- **推荐**: 下载 LTS (长期支持) 版本
- **macOS**: 可使用 Homebrew: `brew install node`
- **Windows**: 下载 .msi 安装包
- **Linux**: 使用包管理器或 NodeSource 仓库

## 🚀 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/NeoZhouCHN/prompt.git
cd prompt

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 在浏览器中访问
# http://localhost:5173/
```

**🎉 恭喜！您已成功部署 PromptCraft 提示词工具网站！**

## 📥 下载方式

### 方法一：使用 Git 克隆（推荐）
```bash
# 克隆仓库到本地
git clone https://github.com/NeoZhouCHN/prompt.git

# 进入项目目录
cd prompt
```

### 方法二：下载 ZIP 文件
1. 访问 https://github.com/NeoZhouCHN/prompt
2. 点击绿色的 "Code" 按钮
3. 选择 "Download ZIP"
4. 解压文件并进入 `prompt` 目录

## 📦 详细安装指南

### 1. 确认项目目录
```bash
# 确保在正确的目录中
pwd
# 应该显示类似：/path/to/prompt

# 查看项目文件
ls -la
# 应该看到 package.json, src/, public/ 等文件夹
```

### 2. 安装项目依赖
```bash
# 安装所有依赖包
npm install
```

**安装过程说明**：
- 这个过程可能需要 2-5 分钟，取决于网络速度
- npm 会自动下载并安装所有必需的依赖包
- 安装完成后会生成 `node_modules` 文件夹

### 3. 验证安装
```bash
# 检查是否生成了 node_modules 文件夹
ls -la node_modules

# 检查关键依赖是否安装成功
npm list react react-dom vite
```

## 🚀 运行方法

### 开发环境运行

#### 启动开发服务器
```bash
# 启动开发服务器
npm run dev
```

**预期输出**：
```
> prompt-tool@0.0.0 dev
> vite

  VITE v6.3.5  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 访问网站
- **本地访问**: http://localhost:5173/
- **网络访问**: 如需局域网访问，使用 `npm run dev -- --host`

#### 停止开发服务器
- 在终端中按 `Ctrl + C` (Windows/Linux) 或 `Cmd + C` (macOS)

### 生产环境构建

#### 构建项目
```bash
# 构建生产版本
npm run build
```

**构建输出**：
- 生成 `dist/` 文件夹
- 包含优化后的 HTML、CSS、JS 文件
- 可直接部署到任何静态文件服务器

#### 预览构建结果
```bash
# 本地预览生产版本
npm run preview
```

### npm 脚本说明

| 命令 | 用途 | 说明 |
|------|------|------|
| `npm run dev` | 开发环境 | 启动开发服务器，支持热重载 |
| `npm run build` | 生产构建 | 构建优化后的生产版本 |
| `npm run preview` | 预览构建 | 本地预览生产版本 |
| `npm run lint` | 代码检查 | 运行 ESLint 检查代码质量 |

## ✅ 验证方法

### 1. 开发服务器验证
```bash
# 启动开发服务器
npm run dev

# 在浏览器中访问 http://localhost:5173/
# 应该看到 PromptCraft 首页
```

### 2. 功能验证清单
- [ ] **首页加载**: 能看到苹果风格的首页设计
- [ ] **导航功能**: 点击导航栏的"模板库"和"优化工具"
- [ ] **模板库**: 能看到提示词模板列表和分类筛选
- [ ] **搜索功能**: 在模板库中搜索关键词
- [ ] **优化工具**: 输入提示词并点击"开始分析"
- [ ] **复制功能**: 点击"复制模板"按钮
- [ ] **响应式**: 调整浏览器窗口大小，布局自适应

### 3. 构建验证
```bash
# 构建项目
npm run build

# 检查构建输出
ls -la dist/
# 应该看到 index.html 和 assets/ 文件夹

# 预览构建结果
npm run preview
```

## 🔧 故障排除

### 常见问题及解决方案

#### 1. Node.js 版本过低
**错误信息**: `Error: Node.js version X.X.X is not supported`
**解决方案**:
```bash
# 升级 Node.js 到 18+ 版本
# 访问 https://nodejs.org/ 下载最新 LTS 版本
```

#### 2. npm 安装失败
**错误信息**: `npm ERR! network timeout` 或 `npm ERR! 404`
**解决方案**:
```bash
# 清除 npm 缓存
npm cache clean --force

# 使用国内镜像源（中国用户）
npm config set registry https://registry.npmmirror.com

# 重新安装
npm install
```

#### 3. 端口被占用
**错误信息**: `Port 5173 is already in use`
**解决方案**:
```bash
# 方法1: 使用不同端口
npm run dev -- --port 3000

# 方法2: 杀死占用端口的进程
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID号> /F
```

#### 4. 权限错误 (macOS/Linux)
**错误信息**: `EACCES: permission denied`
**解决方案**:
```bash
# 修复 npm 权限
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# 或使用 nvm 管理 Node.js 版本
```

#### 5. TypeScript 编译错误
**错误信息**: `TS2307: Cannot find module` 或类型错误
**解决方案**:
```bash
# 重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 检查 TypeScript 配置
npx tsc --noEmit
```

#### 6. Tailwind CSS 样式不生效
**解决方案**:
```bash
# 检查 PostCSS 配置
cat postcss.config.js

# 重启开发服务器
npm run dev
```

### 获取帮助
如果遇到其他问题：
1. 检查 [GitHub Issues](https://github.com/NeoZhouCHN/prompt/issues)
2. 查看浏览器开发者工具的控制台错误
3. 确保所有依赖都正确安装：`npm list`

## 📁 项目结构说明

```
prompt/
├── 📁 public/                 # 静态资源文件
│   └── vite.svg              # Vite 图标
├── 📁 src/                    # 源代码目录
│   ├── 📁 assets/            # 资源文件
│   │   └── react.svg         # React 图标
│   ├── 📁 components/        # 可复用组件
│   │   ├── 📁 Layout/        # 布局组件
│   │   │   ├── Header.tsx    # 导航头部
│   │   │   ├── Footer.tsx    # 页脚（含 NEO JOU 署名）
│   │   │   └── Layout.tsx    # 主布局容器
│   │   └── 📁 TemplateLibrary/ # 模板库组件
│   │       ├── TemplateCard.tsx    # 模板卡片
│   │       └── CategoryFilter.tsx  # 分类筛选器
│   ├── 📁 data/              # 数据文件
│   │   └── templates.ts      # 提示词模板数据
│   ├── 📁 pages/             # 页面组件
│   │   ├── Home.tsx          # 首页
│   │   ├── Templates.tsx     # 模板库页面
│   │   └── Optimizer.tsx     # 优化工具页面
│   ├── 📁 types/             # TypeScript 类型定义
│   │   └── index.ts          # 全局类型定义
│   ├── 📁 utils/             # 工具函数
│   │   └── promptOptimizer.ts # 提示词优化算法
│   ├── App.tsx               # 主应用组件
│   ├── main.tsx              # 应用入口文件
│   ├── index.css             # 全局样式和设计系统
│   └── vite-env.d.ts         # Vite 类型声明
├── 📄 index.html             # HTML 模板
├── 📄 package.json           # 项目配置和依赖
├── 📄 package-lock.json      # 依赖版本锁定
├── 📄 vite.config.ts         # Vite 构建配置
├── 📄 tailwind.config.js     # Tailwind CSS 配置
├── 📄 postcss.config.js      # PostCSS 配置
├── 📄 tsconfig.json          # TypeScript 配置
├── 📄 tsconfig.app.json      # 应用 TypeScript 配置
├── 📄 tsconfig.node.json     # Node.js TypeScript 配置
├── 📄 eslint.config.js       # ESLint 代码检查配置
└── 📄 README.md              # 项目说明文档
```

### 核心文件说明

| 文件/目录 | 作用 | 重要性 |
|-----------|------|--------|
| `src/App.tsx` | 主应用组件，路由配置 | ⭐⭐⭐ |
| `src/index.css` | 苹果风格设计系统 | ⭐⭐⭐ |
| `src/data/templates.ts` | 提示词模板数据 | ⭐⭐⭐ |
| `src/pages/` | 主要页面组件 | ⭐⭐⭐ |
| `src/components/` | 可复用 UI 组件 | ⭐⭐ |
| `src/utils/` | 业务逻辑工具函数 | ⭐⭐ |
| `tailwind.config.js` | 样式配置 | ⭐⭐ |
| `vite.config.ts` | 构建工具配置 | ⭐ |

## 🚀 使用指南

### 首页功能
- **功能介绍**: 展示平台核心功能和特色
- **快速导航**: 点击按钮快速跳转到模板库或优化工具
- **统计数据**: 查看平台使用统计和用户评价

### 模板库使用
1. **浏览模板**: 查看不同分类的提示词模板
2. **搜索筛选**: 使用搜索框或分类筛选找到合适的模板
3. **查看详情**: 点击模板卡片查看完整内容和使用场景
4. **复制使用**: 点击"复制模板"按钮将内容复制到剪贴板
5. **收藏管理**: 点击心形图标收藏喜欢的模板

### 优化工具使用
1. **输入提示词**: 在文本框中输入需要优化的提示词
2. **开始分析**: 点击"开始分析"按钮进行智能分析
3. **查看评分**: 查看清晰度、具体性、结构性、上下文四个维度的评分
4. **阅读建议**: 查看系统提供的优化建议和示例
5. **对比结果**: 对比原始提示词和优化后的版本
6. **复制结果**: 复制优化后的提示词进行使用

## 🌐 部署指南

### Vercel 部署（推荐）
1. 将项目推送到 GitHub
2. 访问 [Vercel](https://vercel.com/)
3. 导入 GitHub 仓库
4. 配置构建设置：
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. 点击部署

### Netlify 部署
1. 访问 [Netlify](https://netlify.com/)
2. 拖拽 `dist` 文件夹到部署区域
3. 或连接 GitHub 仓库进行自动部署

### 自定义服务器部署
```bash
# 构建项目
npm run build

# 将 dist 文件夹内容上传到服务器
# 配置 Web 服务器指向 dist/index.html
```

## 🛠️ 开发文档

### 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式方案**: Tailwind CSS 3
- **路由管理**: React Router 6
- **图标库**: Lucide React
- **代码规范**: ESLint + TypeScript

### 开发规范
- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践
- 组件采用函数式组件 + Hooks
- 样式使用 Tailwind CSS 类名
- 文件命名采用 PascalCase（组件）和 camelCase（工具函数）

### 添加新模板
编辑 `src/data/templates.ts` 文件：
```typescript
{
  id: 'unique-id',
  title: '模板标题',
  description: '模板描述',
  category: 'writing', // 分类ID
  content: `模板内容...`,
  tags: ['标签1', '标签2'],
  useCase: '适用场景说明',
  example: '使用示例',
  rating: 4.5,
  usageCount: 100,
  createdAt: '2024-01-01'
}
```

### 自定义样式
修改 `tailwind.config.js` 和 `src/index.css` 来调整设计系统。

## 🤝 贡献指南

### 如何贡献
1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 创建 Pull Request

### 贡献类型
- 🐛 Bug 修复
- ✨ 新功能开发
- 📝 文档改进
- 🎨 UI/UX 优化
- ⚡ 性能优化
- 🧪 测试用例

### 代码规范
- 遵循现有的代码风格
- 添加适当的注释
- 确保 TypeScript 类型正确
- 运行 `npm run lint` 检查代码质量

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 [React](https://reactjs.org/) 团队提供优秀的前端框架
- 感谢 [Vite](https://vitejs.dev/) 提供快速的构建工具
- 感谢 [Tailwind CSS](https://tailwindcss.com/) 提供优秀的样式框架
- 感谢 [Lucide](https://lucide.dev/) 提供精美的图标库

## 📞 联系方式

- **作者**: NEO JOU
- **GitHub**: [@NeoZhouCHN](https://github.com/NeoZhouCHN)
- **项目地址**: https://github.com/NeoZhouCHN/prompt

---

<div align="center">

**🌟 如果这个项目对您有帮助，请给它一个 Star！**

*Created with ❤️ by NEO JOU*

</div>

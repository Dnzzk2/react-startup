# Vite + React + TypeScript 开发模板

这是一个基于 Vite、React 和 TypeScript 的现代前端开发模板，集成了 ESLint、Prettier、Husky、Zustand 和 React Router 等工具，为您提供一个强大、高效的开发环境。

## 技术栈

- Vite
- React
- TypeScript
- ESLint
- Prettier
- Husky
- Zustand
- React Router

## 快速开始

### 前置条件

确保您的开发环境中已安装以下工具：

- Node.js (推荐使用 v14 或更高版本)
- npm (通常随 Node.js 一起安装)

### 安装

1. 克隆此仓库：

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

### 开发

启动开发服务器：

```bash
npm run dev
```

访问 `http://localhost:5173` 查看您的应用。

### 构建

构建生产版本：

```bash
npm run build
```

### 代码检查

运行 ESLint 检查：

```bash
npm run lint
```

### 代码格式化

使用 Prettier 格式化代码：

```bash
npm run lint
```

### 代码格式化

使用 Prettier 格式化代码：

```bash
npm run format
```

## 项目结构

```.
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── store/
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 特性

- **Vite**: 快速的开发服务器和构建工具
- **React**: 用于构建用户界面的 JavaScript 库
- **TypeScript**: JavaScript 的超集，添加了类型系统
- **ESLint**: JavaScript 和 TypeScript 的代码质量工具
- **Prettier**: 代码格式化工具
- **Husky**: Git hooks 工具，用于在提交前运行脚本
- **Zustand**: 简单、快速的状态管理解决方案
- **React Router**: React 应用的声明式路由

## 自定义

- 修改 `vite.config.ts` 以自定义 Vite 配置
- 在 `.eslintrc.js` 中调整 ESLint 规则
- 在 `.prettierrc` 中更改 Prettier 配置
- 编辑 `tsconfig.json` 以调整 TypeScript 编译器选项

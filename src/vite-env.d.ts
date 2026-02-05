/**
 * Vite 环境变量类型声明文件
 * 
 * 这个文件用于为 TypeScript 提供类型定义，让 IDE 能够识别和自动补全
 * 通过 import.meta.env 访问的环境变量
 */

/// <reference types="vite/client" />
// 引用 Vite 客户端的类型定义，提供 import.meta.env 等 Vite 特性的类型支持

/**
 * 环境变量接口定义
 * 
 * 定义了所有以 VITE_ 开头的环境变量的类型
 * 这些变量可以通过 import.meta.env.VITE_APP_XXX 的方式访问
 */
interface ImportMetaEnv {
	/** 应用的默认路由路径 */
	readonly VITE_APP_DEFAULT_ROUTE: string;
	/** 静态资源的公共路径 */
	readonly VITE_APP_PUBLIC_PATH: string;
	/** API 接口的基础 URL */
	readonly VITE_APP_API_BASE_URL: string;
	/** 路由模式：前端路由或后端路由 */
	readonly VITE_APP_ROUTER_MODE: "frontend" | "backend";
}

/**
 * ImportMeta 接口扩展
 * 
 * 扩展了 import.meta 对象的类型定义，使其包含 env 属性
 * 这样在代码中使用 import.meta.env 时就能获得类型提示和检查
 */
interface ImportMeta {
	readonly env: ImportMetaEnv;
}

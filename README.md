## install 
> cnpm install -g typescript  // 全局安装typescript
## init
> tsc -init  // 初始化项目，vscode 会生产 tsconfig.json

```js
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./js/",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
}

```
## vscode 支持
> 拓展 tslint
> ctrl+shift+b 监视  ,运行task typescript run watch任务
> 可以生成到不同的文件夹中去
## 因为使用webstorm的隐射关系，所以，这里的task运行快捷键见如下
> alt+shift+f10 
## ts 类型
- string
- any
## 新知识
### interfaces 接口
### generics 泛型
### 类 classes
### enums 枚举
## 基础类型
- boolean
- number  
> 接受十进制、十六进制、二进制、八进制
- string
> 符号 “ ' `
- 数组
  - `let list:number[]=[1,2,3]` 表示数字组成的数组
  - `let list:Array<number>=[,2,3]` 使用数组泛型，array <元素类型>
- 元组 Tuple
> 越界情况，意思是不在之前约定的长度范围内，则类型只能使用两者之一，否则也会报错

```typescript
let x =[string,number]
 x =['hello',100] //ok
 x=[10,'helloe']//error
```
- 枚举 enum，对js的一个数据类型补充
```typescript
  enum Color {Red=1,Gree=14,Blue=399}
  let c:Color=Color.Green
```
- 任意值 any
```typescript
  let noSure:any 4;
  noSure ="maybe a String"
  noSure =false
```
- 空值 void
> 常见函数没有return 返回值时，通常`void`
```typescript
function warn():void{
  alert('this warning msg')
}
// so 你只能给他void undefined null
let unVoid:void =undefined || null
```
- null和undefined
> `--strickNullChecks ` 只能赋值给void和他们自己，避免很多常见问题，比如？
- Never
```typescript
// 返回never的函数，必须存在无法到达的终点
function error(msg:string):never{
  throw err(msg)
}
// 推断的返回值类型为 never
function fail(){
  return error("xxx")
}
// 返回never的函数，必须存在无法到达的终点
function infiniteLoop():never{
  while(true){

  }
}
```
- Object 对象
> 又忘记了 Object.create() 的用法了，不行呀~~记不住这些API 苦恼
```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 警告

### 尝试不入参，会报错误
```js
function ge(person:any){
    return 'hello,' +person
}
let user = [1,3,3]
document.body.innerHTML=ge()
```

## 接口

```js
interface Person{
  firstName:'Jo',
  lastName:'Gol'
}
```
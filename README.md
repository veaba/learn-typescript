
----------------------------------------------------------
## 常识
- `.ts`后缀文件
- `.tsx`后缀文件
- `.d.ts`后缀文件。用来标注js的数据库？
- 没有类似 `v8`的 `typeScript` 解析引擎
- 没有类似 `node.js`的 `typeScript` runtime  `type.ts` 环境
## 警告


### 尝试不入参，会报错误
```js
function ge(person:any){
    return 'hello,' +person
}
let user = [1,3,3]
document.body.innerHTML=ge()
```
###  vscode 的ts检查是本项目全部检查，所以如果有a文件中有某个对象的interface，另外一个文件中同名，则会包警告你新建的对象需要遵从第一个的对象interface定义的数据类型格式，否则会报错。

----------------------------------------------------------
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
## ts 类型[*重复bug]
- string
- any
## interfaces 接口
- 一种定义对象的类型，相当于自定义一种关于对象的数据类型格式
- 形状大小都要一直，
```typescript
  interface Persion{
    name:string,
    age:number
  }
  let tim:Persion={
    namer:'Tim',
    age:26
  }
```
## generics 泛型
## 类 classes
### 概念

- `class` 类，定义一个事物的抽象特点，包含 属性和方法
- `object` 对象，类的实例，通过new 生成
- `OOP` 面向对象：封装、继承、多态
- `encapsulation封装，确保外部无法任意更改内部对象的数据，对外暴露接口`
- `inheritance` 继承，子类继承父类，子类拥有父类所有特性之后，还有自己的一些
- `polymoiphism` 多态，继承产生相关不同的类，有点难理解
- `getter` & `setter`，用以改变属性的读取和赋值行为
- `modifiers`：一些关键字，用于限定成员或类型的性质，比如`public`表示共用属性或方法，`private`则表示私有
- `abstract class`抽象类，供给其他类继承的 `基础类`，且不允许被实例化，抽象方法必须在子类中被实现
- `interface`接口：不同类之间公有的属性和方法，可以抽象成一个接口。接口可以被类实现，一类`只能`继承自`另一个类`，但可以实现多个接口

### es6类
> http://es6.ruanyifeng.com/#docs/class

```js
  class Animal{
    constructor(name){
      this.name=name
    }
    sayHi(){
      return `My name is: ${this.name}`//如果是this.name=>name，则无法获取到。
    }
  }
  let cat= new Animal('cat')
  console.log(cat.sayHi())
  // 类的继承
  class Cat extends Animal{
    constructor(name){
      super(name)//调用父类的constuctor(name)
      console.log(this.name)
    }
    sayHi1(){
      return `I am sayHi1:${this.name} `
    }
  }

  // 此时 cat 实例就有两个方法和一个实例
  let cat= new Cat('丁丁')
```
## enums 枚举
## 基础类型
- `boolean`
### `number`  
> 接受十进制、十六进制、二进制、八进制
### `string`
> 符号 “ ' `
### `array` 数组
  - `let list:number[]=[1,2,3]` 表示数字组成的数组
  - `let list:Array<number>=[,2,3]` 使用数组泛型，array <元素类型>
  - `let list:number[]=[1,'2',3]` 一个错误的标识符，数组只能包含number类型
  - `let a:Array<number|string>=[1,3,'2']` 一个只包含string 和number类型的数组
- 元组 Tuple
  - 给数组的元素位置，定义了类型
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
### `any` 任意值
```typescript
  let noSure:any 4;
  noSure ="maybe a String"
  noSure =false
```
### `void` 空值
> 常见函数没有return 返回值时，通常`void`
```typescript
function warn():void{
  alert('this warning msg')
}
// so 你只能给他void undefined null
let unVoid:void =undefined || null
```
- `null和undefined`
> `--strickNullChecks ` 只能赋值给void和他们自己，避免很多常见问题，比如？
### `Never`
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
### `Object` 对象
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
## `function` 函数
- 多余或者少于的参数，不被允许
- 输入输出都考虑到数据类型
```typescript
  function sum(x:number,y:number):number{
    return x+ y
  }
```
- `=>` 表示 左边输入类型，右边输出类型
- 一个函数表达式，带输入输出的函数声明
```js
let mySum:(x:number,y:number)=>number=function(x:number,y:number):number{
  return x+ y
}
```
### 使用interface 定义函数形状
```typescript
interface SearchFnc{
    //相当于 入参是两个，都是字符串，输出的是一个布尔值
    (source:string,subString:string):boolean
}
let mySearch:SearchFnc
mySearch=function(x:string,y:string){
    return x.search(y)!==-1
}
```
### 可选的函数参数
```typescript
function x(x:string,y:number,x?:number|object){
    // coding
}
```
### 给参数添加一个默认值,`此时不受限制：可选参数必须接待必选参数后面`
```typescript
function x(x:string,y:number,x?:number|object=2333){
    // coding
}
```
### 剩余参数,此时items是最后一个参数
```typescript
function push(array:any[],...items:any[]){
    // coding
    items.forEach((item)=>{
      array.push(item)
    })
}
let a=[]
push(a,1,33,34)
```
### 重载
- 意思是先检查第一个number类型人入参
- 后续再检查，具体的代码实现，还是要抄一遍
```typescript
function reverse(x: number | string): number | string|undefined {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))||'';
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')||'';
    }
}
let c = reverse(123)
console.log(c)

// 由于输入数字逆序之后还得是数字，字符依然是字符的，为此需要上做上的判断处理，但如果使用了重载定义函数的话：

function reverse(x: number): number;//函数定义
function reverse(x: string): string;//函数定义
//函数实现，有限把精确的定义写在前面
function reverse(x: number | string): number | string|undefined {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//讲真的，没看出来啥。
```
### 断言
> 类型断言不是`类型转换`，`断言成` 一个联合类型中 不存在的类型是不允许的
- 断言的类型只能是联合类型中的类型
```typescript
/**
 * @desc 断言
 * 
 */
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
//error 此时，翻译器会报错,因为如果是number话，不存在length属性,但JS中，却可以不需要这个断言
function getLength(something: string | number): number {
    if (something.length) {
        return (something.length;
    } else {
        return something.toString().length;
    }
}
//但JS中，却可以不需要这个断言
function getLength1(something){
    if (something.length) {
        return something.length;
    } else {
        return something.toString().length;
    }
};
getLength1(11)
getLength1('11')
```
## 内置对象
> typescript 内置核心库  https://github.com/Microsoft/TypeScript/tree/master/src/lib
### ECMAScript 内置
- Boolean
- Error
- Date
- RegExp
- ...
```typescript
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```
### BOM和DOM内置对象
- Document
- HTMLElement
- Event
- NodeList
- ...
```typescript
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```
### TypeScript 使用node.js
>`npm install @types/node --save-dev`
## typeScript 的能力
### 类型推断能力
```typescript
  let s='I am a string'
  s=2333//这里将原本的 string 类型变更为数字类型

  // 以上等同于
  let s:string = 'I am a string'
  s=2333

  // 从第一段可看出，在ts中和原生js里面，变量的类型有了很大的变化，为此，需要这么写：
  let s//自动推断为any
  s='I am a string'
  s=2333
  // or 
  let s:any
  s="I am a string"
  s=2333
```
### 联合类型
> 可以为该变量指定多个数据的类型

```typescript
  let s: string|number
  s="I am a String"
  s=2333

  // error
  s=true
```
> 在不知道联合类型的变量是哪个类型是，只能访问此联合类型的所有类型的共用属性或者方法，比如常见 `toString()`、`valueOf()`、`__proto__`（以上三种类型需要排除掉`null`、`undefined`）
### declare 声明文件
- 一般讲声明文件放到一单独的一个文件中，以`.d.ts`后缀结尾,比如`$.d.ts`
- 三斜线指令表示引用声明文件，`/// <reference path="./$.d.ts"/>`
- 关于jquery 给出的声明文件，见 https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/index.d.ts
- 第三方声明文件，http://definitelytyped.org/
- https://microsoft.github.io/TypeSearch/ 搜索需要的声明文件
```typescript
// demo
declare var $:(selector:string)=>any;
$('.class')

// demo
declare var test:(t:string)=>any;
test('ttt')
```
## 进阶
### 类型别名
> haha，相当于整合了 `val:string|number`=> `val:sb`。
```typescript
  // default
  function t(val:string|number){
    return val
  }
  type s=string;
  type b=number
  type sb=s|b
  function t(val:sb){
    return val
  }
```
### `字符串` __字面量__ 类型
- 字符串字面量都使用 `type`来定义
```typescript
type EventName='click'|'dbclick'
function hand(el:Element,event:EventName){
  //do something
}
hand(document.querySelector('#d'),'click')
hand(document.querySelector('#d'),'scroll')//error
```
## 接口
- 确定属性`：` 则说明，属性名要对上，且不能多，不能少.
- 可选属性`？:` 可选的，依然不允许添加未定义的属性
- 任意属性 `[propName:string]:any`  任意的，但其他的属性，都要遵从此处的类型规定
- 只读属性`readonly id:number`,且 一定要有该属性
```js
interface Person{
  firstName:'Jo',
  lastName:'Gol'
// 错误的示范

interface Person1 {
    readonly id:number;
    name: string;
    age?: number;//因为是number，但任意类型是string，所以此处是错误的，必须将age改为string，或者 string|number。缺定义的是时候，因为缺少了age属性，所以，还有一个undefined
    [propName:string]:string;//或者 此处改为 string|undefiner|number、或者 any
}

let person1: Person1 = {
    id:2333,
    name: 'Tom',
    aget: 'x'
};
// error 如果在ts对readonly 属性赋值。则会报错
persion1.id:11111 //error
```
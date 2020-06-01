
----------------------------------------------------------
## 常识及术语
- `.ts`后缀文件
- `.tsx`后缀文件
- `.d.ts`后缀文件。用来标注js的数据库？
- 没有类似 `v8`的 `typeScript` 解析引擎
- 没有类似 `node.js`的 `typeScript` runtime  `type.ts` 环境
- `implement`！！？？实现的意思， 类似es6中的 extends？
```typescript
// 这里的implements 啥意思？
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
```
## 问题

1. ts 的class 如何用接口声明？

2. Error:(11, 19) TS2339: Property 'assign' does not exist on type 'ObjectConstructor'.
return bject.assign({}, defaultConfig);
>  (<any>Object).assign({}, defaultConfig); // 或者更改target='es6'，因为es5不支持

3. Error:(47, 22) TS2339: Property 'videoElement' does not exist on type 'typeof Features'.

> fix:private static videoElement:any=undefined;

## 警告


### 尝试不入参，会报错误
```js
function ge(person:any){
    return 'hello,' +person
}
let user = [1,3,3];
document.body.innerHTML=ge(user)
```
###  vscode 的ts检查是本项目全部检查，所以如果有a文件中有某个对象的interface，另外一个文件中同名，则会包警告你新建的对象需要遵从第一个的对象interface定义的数据类型格式，否则会报错。

----------------------------------------------------------
## install 
> cnpm install -g typescript  // 全局安装typescript
## init
> tsc -init  // 初始化项目，vscode 会生产 tsconfig.json

```js
const json ={
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
};
console.info(json);
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
- 形状大小都要一致

```typescript
  interface Person4{
    name:string,
    age:number
  }
  let tim:Person4={
    name:'Tim',
    age:26
  };
  console.log(tim)
```

### 可选属性
### 只读属性
### 额外的属性检查

```typescript
interface aface{
  color?:string;
  width?:number;
  [propName:string]:any  //支持以外的任意数量的属性
}



```
### 类型断言


### 函数类型

```ts

interface SearchFnc{
  (source:string,subString:string):boolean
}
let mySearch:SearchFnc
let fnSearch:SearchFnc

mySearch=((source:string,subString:string)):boolean=>{
  let result= source.search(subString)
  return result>-1
}

// 如果是箭头函数则如下：

fnSearch= (source: string, subString: string)=>{
let result = source.search(subString)
 	return result > -1
 }

```

### 可索引类型 

看不出这个玩意有个锤子用？？

=》禁止数组只读吗？

```ts
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

### 继承接口

```ts
interface A{
    color:string
}
interface B{
    width:number
}

interface S extends A{
    age:number
}
interface X extends A,B{
    heigth:number
}

// let a=<S>{}  疑问？为什么这里是<B>{}??
// a.color="red"
// a.age=6969
// console.log(a)

// 报错
// let b:S
// b.age=99
// b.color="99"
// console.log(b)


```

### 混合类型




## generics 泛型
见>`generics-type.ts`


使用类型变量，一种特殊变量，表示类型而不是值

```typescript
function identity<T>(arg:T):T{
  return arg
}
```

上面的代码中：
- 给函数添加了类型变量T，T帮助我们捕获用户传入类型（比如: number），之后就可以使用这个类型
- 再次使用T作为返回值类型

第一种使用的方法

```ts
let output= indentity<string>("hahaha")
```

第二种使用的方法,利用了ts的类型推论（类型推导）——编译器会根据传入的参数自动地帮助用户确定T的类型
```js
const output1=indentity('wakaka')
```

### 使用泛型变量
 
使用泛型创建泛型函数时，编译器要求函数体必须使用这个通用的类型，必须将参数认为是任意或所有类型

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

### 泛型类型

泛型函数，有类型参数在最前面，类似函数声明

```ts
function identity<T>(arg:T):T{
  return arg
}

const myIdentity:<T>(arg:T)=>T=identity
```

也可以使用不同的泛型参数名，只要在数量上和使用方式上对应即可


```ts
function identity<T>(arg:T):T{
  return arg
}

const myid:<U>(arg:U)=>U=identity
```

带有调用签名的对象字面量来定义泛型函数：

```ts
function identity<T>(arg:T):T{
  return arg
}

let myitidy:{<T>(arg:T):T}=identity
```

这引导我们去写第一个泛型接口。

```ts
interface GenericIdentityFn {
  <T>(arg:T):T
}

function identity<T>(arg:T):T{
  return arg
}

const mytidy:GenericIdentityFn=identity
```

把泛型参数当做整个接口的参数，可清楚的知道使用的具体是哪个泛型（Dictionary<T>而不是dictionary），这样接口里的其他成员就能知道这个参数的类型

```ts
interface GenericIdentityFn<T>{
  (arg:T):T
}

function identity<T>(arg:T):T{
  return arg
}
const mytity:GenericIdentityFn<number>=identity

```

除了泛型接口，还可以创建泛型类，注意，无法创建`泛型枚举`和`泛型命名空间`

### 泛型类
```ts
class School<T>{
  zeroV:T,
  // 这个函数将会被复写
  add:(x:T,y:T)=>T
}
const mySchool=new School<number>()
mySchool.zeroV=0
mySchool.add=function(x,y){
  return x+y
}

```
这里并没有使用它只能使用`number`，也可以其他类型


```ts
const strNameric=new School<string>()
strNameric.zeroV=""
strNameric.add=function(x,y) {return x+y}

console.log(strNameric.add(strNameric.zeroV,"test"))


```

### 泛型约束

```ts
function logi<T>(arg:T):T{
  console.log(arg.length) //Error: T doesn't have .length
  return arg
}

```

可以定义一个接口描述来约束补充这个未知的类型没有某个属性，是要用接口和`extends` 关键字来说实现约束

```ts
interface Lengthwise {
  length:number
}

function logi<T extends Lengthwise>(arg:T):T{
  console.log(arg.length) // Now we know it has a .length property,so no more error
  return arg
}

```

现在泛型函数被约束了，不再适用任意类型了。

```ts
console.log('===>logi',logi(3)) // Error, number no .length property
```

需要传入符合约束类型的值，必须含有必须的属性

```ts
logi({length:1,value:2})
```

### 泛型约束中使用类型参数

你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 `obj`上，因此我们需要在这两个类型之间使用约束。
```ts
function getProperty(obj:T,key:k){
  return obj[key]
}

const x={a:1,b:2,c:3,d:4}

getProperty(x,'a')
getProperty(x,'m') //error

```
### 泛型中使用类类型

是TS中使用泛型创建工厂函数时，需要引用构造函数的类类型，比如

```ts
function create<T>(c:{new():T}):T{
  return new c()
}
```

一个高级的例子，使用原型属性推断并约束构造函数与类实例的关系
```ts
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal{
  keeper:BeeKeeper
}

class Lion exntends Animal{
  keeper:ZooKeeper
}

function createInstance<A extends Animal>(c:new ()=>A):A{
  return new c()
}

createInstance(Lion).keeper.nametag  // typechecks!
createInstance(Bion).keeper.hasMask  // typechecks!

```



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
- 类具有两个类型：静态部位类型和实例类型


### 如何实现类接口？？


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
  let cat= new Animal('cat');
  console.log(cat.sayHi());
  // 类的继承
  class Cat extends Animal{
    constructor(name){
      super(name);//调用父类的constuctor(name)
      console.log(this.name)
    }
    sayHi1(){
      return `I am sayHi1:${this.name} `
    }
  }

  // 此时 cat 实例就有两个方法和一个实例
  let cat1= new Cat('丁丁')
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
let x =[string,number];
 x =['hello',100]; //ok
 x=[10,'helloe']//error
```
- 枚举 enum，对js的一个数据类型补充
```typescript
  enum Color {Red=1,Gree=14,Blue=399}
  let c:Color=Color.Green
```
### `any` 任意值
```typescript
  let noSure:any;
  noSure ="maybe a String";
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
  throw Error(msg)
}
// 推断的返回值类型为 never
function fail(){
  return error("xxx")
}
// 返回never的函数，必须存在无法到达的终点
function infiniteLoop():never{
  while(true){
	console.log('forever~~')
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
}
getLength1(11);
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
  let s='I am a string';
  s=2333;//这里将原本的 string 类型变更为数字类型

  // 以上等同于
  let s:string = 'I am a string';
  s=2333;

  // 从第一段可看出，在ts中和原生js里面，变量的类型有了很大的变化，为此，需要这么写：
  let s//自动推断为any
  s='I am a string';
  s=2333;
  // or 
  let s:any;
  s="I am a string";
  s=2333
```
### 联合类型
> 可以为该变量指定多个数据的类型

```typescript
  let s: string|number;
  s="I am a String";
  s=2333;

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
```typescript
interface Person_1{
  firstName:'Jo'
  lastName:'Gol'
// 错误的示范
}
interface Person1_2{
    readonly id:number;
    name: string;
    age?: number;//因为是number，但任意类型是string，所以此处是错误的，必须将age改为string，或者 string|number。缺定义的是时候，因为缺少了age属性，所以，还有一个undefined
    [propName:string]:string;//或者 此处改为 string|undefiner|number、或者 any
}

let person3: Person1_2 = {
    id:2333,
    name: 'Tom',
    aget: 'x'
};
// error 如果在ts对readonly 属性赋值。则会报错
person3.id=11111 //error
```
## modules
- `模块里面不要用命名空间`
- `命名空间使用模块，几乎没有什么价值`
- `文件的顶层声明是export namespace Foo { ... }（删除Foo并把所有内容向上层移动一层）` 
- `文件只有一个export class或export function （考虑使用export default）`
- `多个文件的顶层具有同样的export namespace Foo { （不要以为这些会合并到一个Foo中！）`
### 关于模块的tsc命令
```shell
	tsc --module commonkjs test.ts

```
### 将整个模块导入到一个变量
```typescript
	import * as xxx from 'xxx'
	let tt= new xxx.alert('喵~~')
```
### 具有副作用的导入模块
> import './t.ts'

### 关于export default
- export导出一个值
> export default '1231'
### `export =` 和`import = require()`

> export = aVar ，此时需要使用ts语法  import module= require('module')

> import a_var = './xx'

### 生成模块代码
- simpleModule.ts
```js
import m= require('mode)
export let t=m.t+1
```
- require.js(AMD)
```js
define(['require','exports','./mod'],function( require,exports,mod_1) {
  exports.t=mod_1.test+1
})

```
- node.js(common.js)/SimpleModule.js
```js
let mod=  require('mod')
export.t= mod.test+1
```
- UMD `真长啊~~`
```js
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        let v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./mod"], factory);
    }
})(function (require, exports) {
    let mod_1 = require("./mod");
    exports.t = mod_1.something + 1;
});
```
- SystemJS

```js

System.register(["./mod"], function(exports_1) {
    let mod_1;
    let t;
    return {
        setters:[
            function (mod_1_1) {
                mod_1 = mod_1_1;
            }],
        execute: function() {
            exports_1("t", t = mod_1.something + 1);
        }
    }
});
```

- Native ECMAScript 2015 modules SimpleModule.js，es6的方式
```js
import { something } from "./mod";
export let t = something + 1;

```
### 外部模块
- node.d.ts
```typescript
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}
```
- app.ts
```typescript
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```
- 支持通配符 
	- "*!text"
	- "json!*"
- UMD 
## 命名空间
- `tsc --outFile sample.js Test.ts` 将所有输入文件编译为一个输出文件，需要 `--outFile`标记
## 命名空间和模块
- TypeScript里模块的一个特点是不同的模块永远也不会在相同的作用域内使用相同的名字
- 不应该对模块使用命名空间
 
错误的使用 
```typescript

//a.ts
export namespace Shapes {
    export class xxx{
	}
}

// b.ts
import * as shapes from "./shapes";
let t = new shapes.Shapes.xxx();
```


修正的使用
```typescript

//a.ts
export class xxx{
}

// b.ts
import * as shapes from "./shapes";
let t = new shapes.xxx();

```
## 声明合并
- 类不能与其他类或变量合并

|声明类型|Namespace|Type|Value|
|----|----|----|----|
|Namespace命名空间|×||×|
|Class类||×|x|
|Enum枚举||×|x|
|Interface接口||×||
|Type Alias类型别名||×||
|Function函数|||×|
|Variable变量|||×|

### interface 合并
```typescript
interface Box {
  height:number,
  width:number
}
interface Box {
  size:number
}
let box:Box={
    height:33,
    width:99,
    size:666
}
```
### namespace 合并
- `从其他命名空间合并进来的成员无法访问非导出成员`
```typescript
	namespace Animals{
    	export class God {
    	  
    	}
	}
	namespace Animals{
    	export class Cat {
    	  
    	}
	}
	
	//=>>
	namespace Animals{
    	export class God{
    	    
    	}
    	export class Cat {
    	  
    	}
	}
```
### 命名空间、类、函数、枚举合并

### 全局拓展
```typescript
	declare global{
    	interface Array<T> {
    	    //Do something
    	}
	}
```

## 书写d.ts 文件 `暂缺`

## JSX
> facebook 的React 使用jsx，从而导致流行起来

### typescript三种JSX模式
- hsc --jsx 做标记

|模式|输入|输出|拓展名|
|----|----|----|----|
|preserve[prɪˈzɜ:rv]|`<div/>`|`<div/>`|`.jsx`|
|react|`<div/>`|`React.createElement('div')`|`js`|
|react-native|`<div/>`|`<div/>`|`js`|

### as 操作符 
> https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/JSX.html
## Decorators 装饰！！`常见这个`


## tsc命令选项
```cmd 
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown'
 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint'
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictBindCallApply                              Enable strict 'bind', 'call', and 'apply' methods on functions.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.

```

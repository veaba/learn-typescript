/**
 * @desc 可索引的类型
 */

 // 这个接口具有索引签名
 interface StringArray{
     [index:number]:string
 }

 let myArray:StringArray
 myArray=['Bob','Lihua','Alice']

 console.log(myArray)

 let myStr:string=myArray[0]
 console.log(myStr)//Bob

 console.log('ha:',myArray['0'])

 // 只读索引

 interface ReadonlyStringArray{
     readonly [index:number]:string
 }

 let myArray1:ReadonlyStringArray=['acadas','dsadsa']
 console.log(myArray1)
 myArray1[2]="dasdsad"
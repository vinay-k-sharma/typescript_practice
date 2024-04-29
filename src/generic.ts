// generics without arrow fuction syntax
function genericPractice<U>(args:U):U{
    console.log(args)
    return args
}
// genericPractice('vinay')

type Generic = {
    args:string
}
genericPractice('vinay')

// arrow function syntax
const  arrowFunction= <T,>(products:T): T =>{
    return products

}
// this T, indicates that the "," is used to show that this is not an html tag.
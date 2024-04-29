type User = {
    name: string,
    age: number,
    is_enrolled?:boolean,
    method() : string      // this is how we can define functions in typescript.
}
function Users(user:User) {
   console.log(user)
}

const user: User = {
    name:'vinay',
    age:56,
    method : () =>{
        return 'vinay'
    }
}

Users(user)
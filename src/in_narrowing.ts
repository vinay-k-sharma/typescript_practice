type Fish = {
    swim:() => void
}
type Bird = {
    fly:() => void
}

function move(animal: Fish|Bird){
 if('swim' in animal)
    return animal.swim()  // the in type guard is used for determining whether the property with the name exists in the object or its prototype.  "value" in x , here value indicates the property name and x indicates the union type.
}
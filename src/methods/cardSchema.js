const Shape = {
    H:"H",
    D:"D",
    C:"C",
    S:"S"
}

const Value = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    11:11
}

let cardEnum = class  {
    constructor(){
    this.shape = Shape
    this.value = Value 
    }
    
}

module.exports = {cardEnum};
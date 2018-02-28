function myFunctionDemo(ObjectDetails) {
    var {
        age: NewAge, firstName: DefaultName = 'This is DefaultName(Sagar)',
        lastName: DefaultLastName = 'This is DefaultLastName(Pawar)',
        gender: NewGender = 'Female' } = ObjectDetails


    return [{ ObjectDetails },
    {
       
        ...ObjectDetails,
        age: NewAge + 10,
        firstName: "zzz" + DefaultName + "zzz",
        lastName: "zzz" + DefaultLastName + "zzz",
        gender: "zzz" + NewGender + "zzz"

    }]
}



var ObjectDetails = {
    age: 22,
    firstName: 'Bruce',
    lastName: 'Wayne',
    gender: 'Male'
}
console.log(myFunctionDemo(ObjectDetails));


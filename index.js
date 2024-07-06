let employee = {
    name: "James",
    streetAddress: "River side"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {
        ...employee,
        [key]: value
    };
    return updatedEmployee;
}

function updatedEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmloyee = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
    };

    console.log( "Original Emploee:", employee);
    console.log( "Updated Emloyee:", updatedEmloyee);

    
    function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
        employee[key]=value;
        return employee;

    }

    destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Manager');

    console.log( "Updated Employee", employee);

    function deleteFromEmployeeByKey(employee, key){
        const newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
    }

    const updatedEmloyee = deleteFromEmployeeByKey(employee, 'streetAdress');

    console.log( "Original Employee:", employee);
    console.log( "Update Employee:", updatedEmloyee);

    function destructivelyDeleteFromEmployeeByKey(employee, key ){
        delete employee[key];

        return employee;
    }

    

// Write your solution in this file!

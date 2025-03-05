// 1. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2. Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. Non-destructive delete
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructive delete
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  const employee = { name: "John", role: "Engineer" };
  
  console.log(updateEmployeeWithKeyAndValue(employee, "location", "NY")); // { name: "John", role: "Engineer", location: "NY" }
  console.log(employee); // Original object is unchanged
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Manager")); // Mutates the original object
  
  console.log(deleteFromEmployeeByKey(employee, "role")); // Returns a new object without "role"
  console.log(employee); // Original object is unchanged
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // Mutates original object

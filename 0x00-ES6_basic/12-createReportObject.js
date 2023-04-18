export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartments(employeesList) {
      return object.keys(employeesList).length
    };
  };
}

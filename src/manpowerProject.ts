import { makeProject } from '@revideo/core';
import "./global.css";

import { manpowerIntroduction, commonEmployee, highestYearlyExpense, totalEmployees, successOutro } from './manpower-2';

// import example from './example/example?scene';

export default makeProject({
  scenes: [manpowerIntroduction, highestYearlyExpense, commonEmployee, totalEmployees, successOutro]
  // scenes: [example]
});

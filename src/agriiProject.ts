import { makeProject } from '@revideo/core';
import "./global.css";

import { additionals, annualSales, funding, machines, manpowerAnnualCost, requirements, totalProjectCost, fixedcost, variablecost, agriimplements } from './agri-edii';

export default makeProject({
  scenes: [requirements, manpowerAnnualCost, totalProjectCost, funding, machines, additionals, annualSales, fixedcost, variablecost, agriimplements]
});
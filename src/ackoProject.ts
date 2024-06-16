import { makeProject } from '@revideo/core';
import "./global.css";

import { claimProcess, claimRelated, educationGrant, introduction, policyCovers, unfortunateEvent, bonus, notcovered, payments, typewriter } from './acko-life-insurance-sby';

export default makeProject({
    scenes: [introduction, policyCovers, unfortunateEvent, educationGrant, claimProcess, claimRelated, typewriter, notcovered, payments, bonus],
});

import {makeProject} from '@revideo/core';
import { videos,speedComarison,speedComarison2,qualityChecks,performance,implement,sceneDivision,productionRate,conclusion } from './videoanalysis';
import videoanalysis from './videoanalysis/video-analysis-bgm.mp3'

// import example from './scenes/example?scene';

export default makeProject({
  scenes: [videos,speedComarison,speedComarison2,qualityChecks,performance,implement,sceneDivision,productionRate,conclusion],
  audio: videoanalysis
});

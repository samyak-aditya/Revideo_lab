import {makeProject} from '@revideo/core';

import { heading,masterofArts,draws,ideal,getintoProgram,minimum,statement,classifiedstudent} from './projects';
import masterart from './projects/ma_arts_output_tts.mp3'

export default makeProject({
  scenes: [heading,masterofArts,draws,ideal,getintoProgram,minimum,statement,classifiedstudent],
  audio: masterart
});

import { useState } from 'react';
import TaskEntity from './Entities/TaskEntity';

export function useLevel(current) {
  const [level, setLevel] = useState(current);

  const modifyLevel = () => setLevel(l => { 
    if (l < (TaskEntity.levels.length - 1)) { 
      return l + 1 
    } else { 
      return 0 
    }
  }) 
    
  return [level, modifyLevel];
}

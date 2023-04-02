import type { ITag } from '@/types/tag'

export interface ITask {
  id: number;
  tag: ITag['label'];
  value: string;
}

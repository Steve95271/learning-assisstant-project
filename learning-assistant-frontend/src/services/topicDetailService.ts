import { api } from './api';
import type { TopicDetailVO } from '../types/api';

export const topicDetailService = {
  /**
   * Fetch topic detail by topic ID
   */
  getTopicDetailById: async (topicId: number): Promise<TopicDetailVO> => {
    return api.get<TopicDetailVO>(`/topicDetail/${topicId}`);
  },
};

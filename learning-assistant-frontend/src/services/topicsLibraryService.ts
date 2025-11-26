import { api } from './api';
import type { TopicLibraryViewDTO, CreateTopicRequest } from '../types/api';

export const topicsLibraryService = {
  /**
   * Fetch all topics for a specific user
   */
  getTopicsByUserId: async (userId: number): Promise<TopicLibraryViewDTO[]> => {
    return api.get<TopicLibraryViewDTO[]>(
      `/topicsLibrary/getTopicsByUserId?userId=${userId}`
    );
  },

  /**
   * Create a new topic
   */
  createTopic: async (data: CreateTopicRequest): Promise<TopicLibraryViewDTO> => {
    return api.post<TopicLibraryViewDTO>('/topicsLibrary/createTopic', data);
  },
};

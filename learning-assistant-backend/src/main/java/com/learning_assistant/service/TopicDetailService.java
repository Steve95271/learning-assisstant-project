package com.learning_assistant.service;

import com.learning_assistant.model.dto.UpdateTopicDTO;
import com.learning_assistant.model.viewObject.TopicDetailVO;

public interface TopicDetailService {

    /**
     * Retrieves the details of a topic based on the provided topic ID.
     *
     * @param id the unique identifier of the topic to be retrieved
     * @return a TopicDetailVO object containing detailed information about the topic,
     * including its title, description, session summaries, file information,
     * and other related details
     */
    TopicDetailVO getTopicDetailById(Long id);

    /**
     * Updates a topic's name and description.
     *
     * @param topicId the unique identifier of the topic to be updated
     * @param updateDTO the DTO containing the updated name and description
     * @return a TopicDetailVO object containing the updated topic details
     */
    TopicDetailVO updateTopic(Long topicId, UpdateTopicDTO updateDTO);

}

package com.steve.learning_assisstant.service.impl;

import com.steve.learning_assisstant.model.entity.Topic;
import com.steve.learning_assisstant.model.response.TopicLibraryView;
import com.steve.learning_assisstant.repository.TopicRepository;
import com.steve.learning_assisstant.service.TopicLibraryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TopicLibraryServiceImpl implements TopicLibraryService {

    private final TopicRepository topicRepository;

    @Override
    public List<TopicLibraryView> getTopicsByUserId(Long userId) {
        // query topics by user id
        List<Topic> activeTopics = topicRepository.findActiveTopicsByUserId(userId);

        // conver to topic library view
        List<TopicLibraryView> topicLibraryViewList = new ArrayList<>();
        for (Topic topic : activeTopics) {
            topicLibraryViewList.add(
                    TopicLibraryView
                            .builder()
                            .id(topic.getId())
                            .title(topic.getName())
                            .description(topic.getDescription())
                            .lastUpdated(topic.getUpdatedAt().toString())
                            .filesCount(topic.getFileCount())
                            .conversationsCount(topic.getConversationCount())
                            .filePreviews(List.of())
                            .build()
            );
        }

        return topicLibraryViewList;
    }
}

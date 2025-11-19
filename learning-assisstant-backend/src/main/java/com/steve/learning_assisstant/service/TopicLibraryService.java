package com.steve.learning_assisstant.service;

import com.steve.learning_assisstant.model.respond.Topic;

import java.util.List;

public interface TopicLibraryService {

    List<Topic> getTopicsByUserId(Long userId);

}

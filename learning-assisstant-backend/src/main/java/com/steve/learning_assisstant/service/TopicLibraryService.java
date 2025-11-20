package com.steve.learning_assisstant.service;

import com.steve.learning_assisstant.model.response.TopicLibraryView;

import java.util.List;

public interface TopicLibraryService {

    List<TopicLibraryView> getTopicsByUserId(Long userId);

}

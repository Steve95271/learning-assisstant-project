package com.steve.learning_assisstant.controller;

import com.steve.learning_assisstant.model.respond.Topic;
import com.steve.learning_assisstant.service.TopicLibraryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/topicsLibrary")
@Slf4j
public class TopicsLibraryController {

    private final TopicLibraryService topicLibraryService;

    @Autowired
    public TopicsLibraryController(TopicLibraryService topicLibraryService) {
        this.topicLibraryService = topicLibraryService;
    }

    @GetMapping("/getTopicsByUserId")
    public ResponseEntity<List<Topic>> getTopicsByUserId(@RequestParam("userId") Long userId) {
        log.info("Get user topics by user id: {}", userId);
        return ResponseEntity.ok(topicLibraryService.getTopicsByUserId(userId));
    }

}

package com.steve.learning_assisstant.service.impl;

import com.steve.learning_assisstant.model.respond.Topic;
import com.steve.learning_assisstant.service.TopicLibraryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicLibraryServiceImpl implements TopicLibraryService{

    @Override
    public List<Topic> getTopicsByUserId(Long userId) {
        // TODO query topics by user id

        return List.of(
            Topic.builder()
                .id(1L)
                .title("Binary Search Algorithms")
                .description("Deep dive into binary search, time complexity analysis, and implementation patterns")
                .lastUpdated("2h ago")
                .filesCount(3)
                .conversationsCount(5)
                .filePreviews(List.of("📄", "📊", "📝"))
                .build(),
            Topic.builder()
                .id(2L)
                .title("System Design Fundamentals")
                .description("Learning about scalability, load balancing, caching strategies, and distributed systems")
                .lastUpdated("Yesterday")
                .filesCount(5)
                .conversationsCount(8)
                .filePreviews(List.of("📄", "🖼️", "📊", "💻", "📝"))
                .build(),
            Topic.builder()
                .id(3L)
                .title("Python Data Structures")
                .description("Exploring lists, dictionaries, sets, and custom data structures in Python")
                .lastUpdated("3 days ago")
                .filesCount(2)
                .conversationsCount(3)
                .filePreviews(List.of("📄", "💻"))
                .build(),
            Topic.builder()
                .id(4L)
                .title("JavaScript Async Patterns")
                .description("Promises, async/await, event loop, and asynchronous programming concepts")
                .lastUpdated("1 week ago")
                .filesCount(1)
                .conversationsCount(2)
                .filePreviews(List.of("📄"))
                .build(),
            Topic.builder()
                .id(5L)
                .title("Database Normalization")
                .description("Understanding normal forms, database design principles, and optimization")
                .lastUpdated("2 weeks ago")
                .filesCount(0)
                .conversationsCount(4)
                .filePreviews(List.of())
                .build()
        );
    }
}

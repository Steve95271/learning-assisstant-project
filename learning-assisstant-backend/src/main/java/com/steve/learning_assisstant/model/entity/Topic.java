package com.steve.learning_assisstant.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("topics")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Topic {

    @Id
    private Long id;
    private Long userId;
    private String name;
    private String description;
    private Integer conversationCount;
    private Integer fileCount;
    private TopicStatus status;
    private LocalDateTime lastAccessedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;

    private enum TopicStatus {
        active,
        deleted
    }

}

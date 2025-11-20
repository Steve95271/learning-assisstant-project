package com.steve.learning_assisstant.model.response;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class TopicLibraryView {
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;
    private String title;
    private String description;
    private String lastUpdated;
    private Integer filesCount;
    private Integer conversationsCount;
    private List<String> filePreviews;

}

import React, { useState, useEffect } from "react";
import PageHeader from "../components/topics-library/PageHeader";
import TopicsGrid from "../components/topics-library/TopicsGrid";
import NewTopicModal from "../components/topics-library/NewTopicModal";
import EmptyState from "../components/common/EmptyState";
import type { TopicCardData, NewTopicFormData } from "../types";

const TopicsLibraryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState<TopicCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with actual userId
        const userId = 1;
        const response = await fetch(
          `/api/v1/topicsLibrary/getTopicsByUserId?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTopics(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch topics");
        console.error("Error fetching topics:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleTopicClick = (topic: TopicCardData) => {
    // TODO implement handle topic click logic
    console.log(topic.title, "topic card clicked");
  };

  const handleCreateTopic = (data: NewTopicFormData) => {
    // TODO implement handle create topic logic
    console.log("Creating topic:", data);
  };

  const handleMenuClick = (topic: TopicCardData, e: React.MouseEvent) => {
    // TODO implement handle menu click logic
    e.stopPropagation();
    console.log("Topic menu clicked:", topic.title);
  };

  return (
    <div className="max-w-[1600px] mx-auto px-[60px] py-10">
      <PageHeader onNewTopic={() => setIsModalOpen(true)} />

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500">Loading topics...</p>
        </div>
      ) : error ? (
        <EmptyState
          icon="⚠️"
          title="Error loading topics"
          description={error}
          action={{
            label: "Retry",
            onClick: () => window.location.reload(),
          }}
        />
      ) : topics.length > 0 ? (
        <TopicsGrid
          topics={topics}
          onTopicClick={handleTopicClick}
          onTopicMenuClick={handleMenuClick}
        />
      ) : (
        <EmptyState
          icon="📚"
          title="No topics yet"
          description="Create your first topic to start organizing your learning"
          action={{
            label: "Create Topic",
            onClick: () => setIsModalOpen(true),
          }}
        />
      )}

      <NewTopicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTopic}
      />
    </div>
  );
};

export default TopicsLibraryPage;

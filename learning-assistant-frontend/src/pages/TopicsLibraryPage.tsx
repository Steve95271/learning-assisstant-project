import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/topics-library/PageHeader";
import TopicsGrid from "../components/topics-library/TopicsGrid";
import NewTopicModal from "../components/topics-library/NewTopicModal";
import EmptyState from "../components/common/EmptyState";
import { topicsLibraryService } from "../services/topicsLibraryService";
import type { TopicCardData, NewTopicFormData } from "../types";

const TopicsLibraryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState<TopicCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTopicId, setNewTopicId] = useState<string | null>(null);
  const newTopicRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // load topics when first load the page
  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async (showLoading = true) => {
    try {
      if (showLoading) {
        setIsLoading(true);
      }
      setError(null);

      // TODO: Replace with actual userId
      const userId = 100;
      const data = await topicsLibraryService.getTopicsByUserId(userId);

      setTopics(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch topics";
      setError(errorMessage);
      console.error("Error fetching topics:", err);
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  };

  const handleTopicClick = (topic: TopicCardData) => {
    navigate(`/topic/${topic.id}`);
    console.log(topic.title, "topic card clicked");
  };

  const handleCreateTopic = async (data: NewTopicFormData) => {
    try {
      // Backend now returns the created TopicLibraryView
      const newTopic: TopicCardData = await topicsLibraryService.createTopic(
        data
      );

      // Add the new topic to the end of the list
      setTopics((prevTopics) => [...prevTopics, newTopic]);

      // Mark this topic for scrolling
      setNewTopicId(newTopic.id);

      // Close the modal after successful creation
      setIsModalOpen(false);

      // Show success toast
      toast.success("Topic created successfully!", {
        description: `"${newTopic.title}" has been added to your library`,
      });

      // Scroll to the new topic after a short delay to ensure rendering
      setTimeout(() => {
        newTopicRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        // Clear the newTopicId after scrolling
        setNewTopicId(null);
      }, 500);
    } catch (error) {
      console.error("Error creating topic:", error);
      toast.error("Failed to create topic", {
        description:
          error instanceof Error ? error.message : "Please try again later",
      });
    }
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
          newTopicId={newTopicId}
          newTopicRef={newTopicRef}
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

import type {
  Topic,
  QuickAction,
  Session,
  SummaryNote,
  FileItem,
  TopicCardData,
  Message,
  ChatSession,
} from "../types";

export const mockTopic: Topic = {
  id: "1",
  icon: "◆",
  title: "Binary Search Algorithms",
  description:
    "Deep dive into binary search, time complexity analysis, and implementation patterns. Exploring variations and practical applications.",
  stats: {
    conversations: 5,
    files: 3,
    lastUpdated: "2 hours ago",
  },
};

export const mockQuickActions: QuickAction[] = [
  {
    icon: "📝",
    label: "Generate Quiz",
    hint: "From all conversations",
    gradient: "primary",
  },
  {
    icon: "📊",
    label: "View Progress",
    hint: "Topic analytics",
    gradient: "orange",
  },
  {
    icon: "🔍",
    label: "Search",
    hint: "Find in conversations",
    gradient: "blue",
  },
];

export const mockSessions: Session[] = [
  {
    id: "1",
    icon: "💬",
    title: "Introduction to Binary Search",
    preview:
      "Discussed the fundamentals of binary search algorithm, its time complexity O(log n), and why it requires a sorted array...",
    meta: {
      timestamp: "2 hours ago",
      messageCount: 24,
    },
  },
  {
    id: "2",
    icon: "💬",
    title: "Implementation Patterns",
    preview:
      "Explored iterative and recursive implementations, discussed pros and cons of each approach, and analyzed space complexity...",
    meta: {
      timestamp: "Yesterday",
      messageCount: 18,
    },
  },
  {
    id: "3",
    icon: "💬",
    title: "Edge Cases and Debugging",
    preview:
      "Worked through common edge cases like empty arrays, single elements, and duplicate values. Fixed off-by-one errors...",
    meta: {
      timestamp: "2 days ago",
      messageCount: 31,
    },
  },
  {
    id: "4",
    icon: "💬",
    title: "Variations and Applications",
    preview:
      "Learned about binary search variations: finding first/last occurrence, rotated arrays, and peak element problems...",
    meta: {
      timestamp: "3 days ago",
      messageCount: 27,
    },
  },
  {
    id: "5",
    icon: "💬",
    title: "Practice Problems",
    preview:
      "Solved LeetCode problems using binary search: search in rotated array, find peak element, and square root calculation...",
    meta: {
      timestamp: "1 week ago",
      messageCount: 42,
    },
  },
];

export const mockSummary: SummaryNote = {
  title: "Topic Summary",
  conversationCount: 5,
  wordCount: 1247,
  lastUpdated: "2h ago",
  autoUpdate: true,
};

export const mockFiles: FileItem[] = [
  {
    id: "1",
    name: "binary-search-notes.pdf",
    size: "2.4 MB",
    icon: "📄",
  },
  {
    id: "2",
    name: "complexity-analysis.xlsx",
    size: "156 KB",
    icon: "📊",
  },
  {
    id: "3",
    name: "implementation.py",
    size: "8 KB",
    icon: "💻",
  },
];

// Topics Library Mock Data
export const mockTopicsLibrary: TopicCardData[] = [
  {
    id: "1",
    title: "Binary Search Algorithms",
    description:
      "Deep dive into binary search, time complexity analysis, and implementation patterns",
    lastUpdated: "2h ago",
    filesCount: 3,
    conversationsCount: 5,
    filePreviews: ["📄", "📊", "📝"],
  },
  {
    id: "2",
    title: "System Design Fundamentals",
    description:
      "Learning about scalability, load balancing, caching strategies, and distributed systems",
    lastUpdated: "Yesterday",
    filesCount: 5,
    conversationsCount: 8,
    filePreviews: ["📄", "🖼️", "📊", "💻", "📝"],
  },
  {
    id: "3",
    title: "Python Data Structures",
    description:
      "Exploring lists, dictionaries, sets, and custom data structures in Python",
    lastUpdated: "3 days ago",
    filesCount: 2,
    conversationsCount: 3,
    filePreviews: ["📄", "💻"],
  },
  {
    id: "4",
    title: "JavaScript Async Patterns",
    description:
      "Promises, async/await, event loop, and asynchronous programming concepts",
    lastUpdated: "1 week ago",
    filesCount: 1,
    conversationsCount: 2,
    filePreviews: ["📄"],
  },
  {
    id: "5",
    title: "Database Normalization",
    description:
      "Understanding normal forms, database design principles, and optimization",
    lastUpdated: "2 weeks ago",
    filesCount: 0,
    conversationsCount: 4,
    filePreviews: [],
  },
];

// Chat Session Mock Data
export const mockChatMessages: Message[] = [
  {
    id: "1",
    role: "ai",
    content:
      "Hello! I'm ready to help you learn about binary search algorithms. I see you have some reference materials uploaded. What would you like to explore today?",
  },
  {
    id: "2",
    role: "user",
    content:
      "I want to understand the time complexity better. Can you explain why it's O(log n)?",
  },
  {
    id: "3",
    role: "ai",
    content:
      "Great question! Binary search achieves O(log n) time complexity because it divides the search space in half with each iteration. Let me break it down:<br/><br/>1. Start with n elements<br/>2. After 1 comparison: n/2 elements remain<br/>3. After 2 comparisons: n/4 elements remain<br/>4. After k comparisons: n/2^k elements remain<br/><br/>We stop when n/2^k = 1, which means k = log₂(n). This is why the time complexity is O(log n).",
    fileReferences: ["complexity-analysis.xlsx"],
  },
];

export const mockChatSession: ChatSession = {
  id: "1",
  topicId: "1",
  topicTitle: "Binary Search Algorithms",
  topicIcon: "◆",
  messages: mockChatMessages,
};

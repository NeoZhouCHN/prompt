export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  tags: string[];
  useCase: string;
  example: string;
  rating: number;
  usageCount: number;
  createdAt: string;
  isFavorited?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export interface OptimizationSuggestion {
  type: 'structure' | 'clarity' | 'specificity' | 'context' | 'format';
  title: string;
  description: string;
  example?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface OptimizationResult {
  originalPrompt: string;
  optimizedPrompt: string;
  suggestions: OptimizationSuggestion[];
  improvementScore: number;
  analysis: {
    clarity: number;
    specificity: number;
    structure: number;
    context: number;
  };
}

export interface SearchFilters {
  category?: string;
  tags?: string[];
  rating?: number;
  sortBy?: 'rating' | 'usage' | 'recent' | 'alphabetical';
}

export interface UserPreferences {
  favoriteTemplates: string[];
  recentlyUsed: string[];
  customCategories: Category[];
}

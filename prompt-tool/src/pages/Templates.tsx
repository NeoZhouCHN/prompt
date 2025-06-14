import React, { useState, useMemo } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import TemplateCard from '../components/TemplateLibrary/TemplateCard';
import CategoryFilter from '../components/TemplateLibrary/CategoryFilter';
import { categories, searchTemplates } from '../data/templates';
import type { SearchFilters } from '../types';

const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'usage' | 'recent' | 'alphabetical'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [favoriteTemplates, setFavoriteTemplates] = useState<Set<string>>(new Set());

  const filters: SearchFilters = {
    category: selectedCategory || undefined,
    sortBy
  };

  const filteredTemplates = useMemo(() => {
    const results = searchTemplates(searchQuery, filters);
    return results.map(template => ({
      ...template,
      isFavorited: favoriteTemplates.has(template.id)
    }));
  }, [searchQuery, selectedCategory, sortBy, favoriteTemplates]);

  const handleFavorite = (templateId: string) => {
    const newFavorites = new Set(favoriteTemplates);
    if (newFavorites.has(templateId)) {
      newFavorites.delete(templateId);
    } else {
      newFavorites.add(templateId);
    }
    setFavoriteTemplates(newFavorites);
  };

  return (
    <div className="min-h-screen bg-apple-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">提示词模板库</h1>
          <p className="section-subtitle">
            精心整理的专业提示词模板，涵盖多个领域，助您快速找到合适的解决方案
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-apple-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-apple-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索模板标题、描述或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SortAsc className="w-5 h-5 text-apple-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 rounded-lg border border-apple-gray-200 bg-white text-apple-gray-700 focus:outline-none focus:ring-2 focus:ring-apple-blue"
                >
                  <option value="rating">按评分排序</option>
                  <option value="usage">按使用量排序</option>
                  <option value="recent">按时间排序</option>
                  <option value="alphabetical">按字母排序</option>
                </select>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  showFilters
                    ? 'bg-apple-blue text-white'
                    : 'bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>筛选</span>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-apple-gray-200">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-apple-gray-600">
            找到 <span className="font-semibold text-apple-gray-900">{filteredTemplates.length}</span> 个模板
            {selectedCategory && (
              <span className="ml-2">
                在 <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span> 分类中
              </span>
            )}
          </p>
          
          {favoriteTemplates.size > 0 && (
            <p className="text-apple-gray-600">
              已收藏 <span className="font-semibold text-apple-blue">{favoriteTemplates.size}</span> 个模板
            </p>
          )}
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TemplateCard
                  template={template}
                  onFavorite={handleFavorite}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-apple-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-apple-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-apple-gray-900 mb-2">未找到匹配的模板</h3>
            <p className="text-apple-gray-600 mb-6">
              尝试调整搜索关键词或筛选条件
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="btn-primary"
            >
              清除筛选条件
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;

import React from 'react';
import type { Category } from '../../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">分类筛选</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-apple-blue text-white shadow-md'
              : 'bg-white text-apple-gray-700 border border-apple-gray-200 hover:bg-apple-gray-50'
          }`}
        >
          全部
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              selectedCategory === category.id
                ? 'bg-apple-blue text-white shadow-md'
                : 'bg-white text-apple-gray-700 border border-apple-gray-200 hover:bg-apple-gray-50'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
            <span className="text-xs bg-apple-gray-200 text-apple-gray-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

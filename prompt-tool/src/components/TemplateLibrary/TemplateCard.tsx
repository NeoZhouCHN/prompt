import React, { useState } from 'react';
import { Copy, Heart, Star, Eye, Check } from 'lucide-react';
import type { PromptTemplate } from '../../types';

interface TemplateCardProps {
  template: PromptTemplate;
  onFavorite?: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onFavorite }) => {
  const [copied, setCopied] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFavorite = () => {
    onFavorite?.(template.id);
  };

  const truncatedContent = template.content.length > 200 
    ? template.content.substring(0, 200) + '...' 
    : template.content;

  return (
    <div className="card group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-apple-gray-900 mb-2 group-hover:text-apple-blue transition-colors duration-200">
            {template.title}
          </h3>
          <p className="text-apple-gray-600 text-sm mb-3">
            {template.description}
          </p>
        </div>
        
        <button
          onClick={handleFavorite}
          className={`p-2 rounded-lg transition-all duration-200 ${
            template.isFavorited 
              ? 'text-red-500 bg-red-50 hover:bg-red-100' 
              : 'text-apple-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-4 h-4 ${template.isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {template.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-apple-gray-100 text-apple-gray-700 text-xs rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content Preview */}
      <div className="mb-4">
        <div className="bg-apple-gray-50 rounded-lg p-4 border border-apple-gray-200">
          <pre className="text-sm text-apple-gray-700 whitespace-pre-wrap font-sans">
            {showFullContent ? template.content : truncatedContent}
          </pre>
          {template.content.length > 200 && (
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="text-apple-blue text-sm mt-2 hover:underline flex items-center"
            >
              <Eye className="w-3 h-3 mr-1" />
              {showFullContent ? '收起' : '查看完整内容'}
            </button>
          )}
        </div>
      </div>

      {/* Use Case */}
      <div className="mb-4">
        <p className="text-sm text-apple-gray-600">
          <span className="font-medium">适用场景：</span>
          {template.useCase}
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4 text-sm text-apple-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{template.rating}</span>
          </div>
          <div>
            <span>{template.usageCount.toLocaleString()} 次使用</span>
          </div>
        </div>
        <div>
          <span>{template.createdAt}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            copied
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-apple-blue text-white hover:bg-blue-600 hover:shadow-md'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              已复制
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              复制模板
            </>
          )}
        </button>
        
        <button className="px-4 py-2 border border-apple-gray-200 text-apple-gray-700 rounded-lg hover:bg-apple-gray-50 transition-colors duration-200">
          预览
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;

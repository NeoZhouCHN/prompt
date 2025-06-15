import type { PromptTemplate, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'writing',
    name: '写作助手',
    description: '帮助您创作各种类型的文本内容',
    icon: '✍️',
    count: 12
  },
  {
    id: 'coding',
    name: '编程开发',
    description: '代码生成、调试和优化相关提示词',
    icon: '💻',
    count: 15
  },
  {
    id: 'analysis',
    name: '数据分析',
    description: '数据处理、分析和可视化提示词',
    icon: '📊',
    count: 8
  },
  {
    id: 'creative',
    name: '创意设计',
    description: '创意思维、设计和艺术创作',
    icon: '🎨',
    count: 10
  },
  {
    id: 'business',
    name: '商业策略',
    description: '商业分析、策略制定和市场研究',
    icon: '💼',
    count: 9
  },
  {
    id: 'education',
    name: '教育培训',
    description: '教学设计、课程开发和学习辅导',
    icon: '📚',
    count: 7
  }
];

export const templates: PromptTemplate[] = [
  {
    id: '1',
    title: '专业文章写作助手',
    description: '帮助您创作结构清晰、逻辑严密的专业文章',
    category: 'writing',
    content: `请帮我写一篇关于 [主题] 的专业文章，要求：

1. 文章结构：
   - 引人入胜的开头
   - 3-5个主要论点
   - 每个论点都有支撑证据
   - 总结性结尾

2. 写作风格：
   - 语言专业但易懂
   - 逻辑清晰，层次分明
   - 适合 [目标读者] 阅读

3. 文章长度：约 [字数] 字

4. 特殊要求：[其他具体要求]

请确保内容原创、准确，并提供相关的数据支撑。`,
    tags: ['写作', '文章', '专业', '结构化'],
    useCase: '适用于撰写行业报告、学术文章、专业博客等',
    example: '请帮我写一篇关于人工智能在医疗领域应用的专业文章...',
    rating: 4.8,
    usageCount: 1250,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'React组件开发助手',
    description: '生成高质量、可复用的React组件代码',
    category: 'coding',
    content: `请帮我创建一个React组件，具体要求：

组件名称：[ComponentName]
功能描述：[详细描述组件的功能和用途]

技术要求：
- 使用TypeScript
- 使用函数式组件和Hooks
- 包含适当的类型定义
- 添加详细的注释
- 遵循最佳实践

组件特性：
- Props接口定义
- 状态管理（如需要）
- 事件处理
- 样式方案：[CSS Modules/Styled Components/Tailwind]
- 响应式设计支持

请提供：
1. 完整的组件代码
2. 使用示例
3. Props文档说明`,
    tags: ['React', 'TypeScript', '组件', '前端开发'],
    useCase: '适用于快速生成React组件、建立组件库等',
    example: '请帮我创建一个React组件，组件名称：SearchInput...',
    rating: 4.9,
    usageCount: 2100,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: '数据分析报告生成器',
    description: '基于数据生成专业的分析报告和洞察',
    category: 'analysis',
    content: `请基于以下数据进行深度分析并生成报告：

数据背景：[描述数据来源和背景]
分析目标：[明确分析的目的和问题]

数据概况：
[提供数据的基本信息、时间范围、样本量等]

请提供以下分析内容：

1. 数据概览
   - 基本统计信息
   - 数据质量评估
   - 关键指标总结

2. 趋势分析
   - 时间序列趋势
   - 周期性模式
   - 异常值识别

3. 关联性分析
   - 变量间相关性
   - 因果关系探索
   - 影响因素识别

4. 洞察与建议
   - 关键发现总结
   - 商业价值分析
   - 行动建议

请用图表描述和专业术语进行分析。`,
    tags: ['数据分析', '报告', '洞察', '统计'],
    useCase: '适用于业务数据分析、市场研究报告、用户行为分析等',
    example: '请基于以下电商销售数据进行深度分析...',
    rating: 4.7,
    usageCount: 890,
    createdAt: '2024-01-25'
  }
];

// 添加更多模板数据的函数
export const getTemplatesByCategory = (categoryId: string): PromptTemplate[] => {
  return templates.filter(template => template.category === categoryId);
};

export const searchTemplates = (query: string, filters?: any): PromptTemplate[] => {
  let results = templates;
  
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(template => 
      template.title.toLowerCase().includes(searchTerm) ||
      template.description.toLowerCase().includes(searchTerm) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  if (filters?.category) {
    results = results.filter(template => template.category === filters.category);
  }
  
  if (filters?.rating) {
    results = results.filter(template => template.rating >= filters.rating);
  }
  
  // 排序
  if (filters?.sortBy) {
    switch (filters.sortBy) {
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'usage':
        results.sort((a, b) => b.usageCount - a.usageCount);
        break;
      case 'recent':
        results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'alphabetical':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }
  
  return results;
};

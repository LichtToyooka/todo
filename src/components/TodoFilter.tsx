import type { FilterType } from '../types';

interface Props {
  current: FilterType;
  onChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
];

export function TodoFilter({ current, onChange }: Props) {
  return (
    <div className="todo-filter">
      {filters.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${current === f.value ? 'active' : ''}`}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

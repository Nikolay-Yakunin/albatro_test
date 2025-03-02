import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аналитика | Панель управления",
  description: "Аналитические данные и статистика",
};

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Аналитика</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Статистика посещений</h2>
        <div className="h-64 bg-[var(--color-cream)] flex items-center justify-center border border-[var(--color-teal)] rounded-md">
          <p className="text-[var(--color-teal)]">График посещений (здесь будет график)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Популярные страницы</h2>
          <ul className="space-y-3">
            {['Главная', 'О нас', 'Контакты', 'Блог', 'Услуги'].map((page, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span>{page}</span>
                <span className="text-[var(--color-teal)] font-medium">{Math.floor(Math.random() * 1000) + 100} просмотров</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Источники трафика</h2>
          <ul className="space-y-3">
            {['Поисковые системы', 'Прямые переходы', 'Социальные сети', 'Реклама', 'Другое'].map((source, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span>{source}</span>
                <span className="text-[var(--color-orange)] font-medium">{Math.floor(Math.random() * 50) + 10}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 
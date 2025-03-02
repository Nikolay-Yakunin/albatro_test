import { Metadata } from "next";
import { FaUsers, FaFileAlt, FaComments, FaBell } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Панель управления | Мой сайт",
  description: "Главная страница панели управления",
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="text-2xl text-[var(--color-teal)]">{icon}</div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Обзор</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Пользователи" 
          value="1,254" 
          icon={<FaUsers />} 
          color="border-[var(--color-primary)]"
        />
        <StatCard 
          title="Документы" 
          value="342" 
          icon={<FaFileAlt />} 
          color="border-[var(--color-orange)]"
        />
        <StatCard 
          title="Комментарии" 
          value="879" 
          icon={<FaComments />} 
          color="border-[var(--color-gold)]"
        />
        <StatCard 
          title="Уведомления" 
          value="12" 
          icon={<FaBell />} 
          color="border-[var(--color-brown)]"
        />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Последние активности</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-[var(--color-teal)]">Пользователь_{item}</span> выполнил действие {item}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
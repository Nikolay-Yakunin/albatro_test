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
  <div className={`bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 ${color} transition-all hover:shadow-lg`}>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-600 text-xs sm:text-sm">{title}</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="text-xl sm:text-2xl text-[var(--color-teal)]">{icon}</div>
    </div>
  </div>
);

interface ActivityItemProps {
  userId: number;
  action: number;
  date: Date;
}

const ActivityItem = ({ userId, action, date }: ActivityItemProps) => (
  <div className="border-b border-gray-200 pb-3 hover:bg-gray-50 px-2 transition-colors">
    <p className="text-sm text-gray-600">
      <span className="font-medium text-[var(--color-teal)]">Пользователь_{userId}</span> выполнил действие {action}
    </p>
    <p className="text-xs text-gray-500 mt-1">
      {date.toLocaleDateString('ru-RU')}
    </p>
  </div>
);

export default function DashboardPage() {
  const activities = [1, 2, 3, 4, 5].map((item) => ({
    userId: item,
    action: item,
    date: new Date()
  }));

  return (
    <div className="px-4 sm:px-6 py-4 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Обзор</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Последние активности</h2>
        <div className="space-y-3 sm:space-y-4">
          {activities.map((activity) => (
            <ActivityItem 
              key={activity.userId}
              userId={activity.userId}
              action={activity.action}
              date={activity.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
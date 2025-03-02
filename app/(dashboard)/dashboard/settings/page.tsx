"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ru");
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Настройки</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Общие настройки</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Уведомления</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="h-4 w-4 text-[var(--color-teal)] focus:ring-[var(--color-teal)] border-gray-300 rounded"
              />
              <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                Получать уведомления по email
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Внешний вид</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="darkMode"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="h-4 w-4 text-[var(--color-teal)] focus:ring-[var(--color-teal)] border-gray-300 rounded"
              />
              <label htmlFor="darkMode" className="ml-2 block text-sm text-gray-700">
                Темная тема
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Язык</h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[var(--color-teal)] focus:border-[var(--color-teal)] sm:text-sm rounded-md"
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
            </select>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <button
              className="px-4 py-2 bg-[var(--color-teal)] text-white rounded-md hover:bg-[var(--color-dark-blue)] transition-colors"
            >
              Сохранить настройки
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-6 text-red-600">Опасная зона</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Сменить пароль</h3>
            <p className="text-sm text-gray-600 mb-2">Обновите свой пароль для повышения безопасности</p>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              Сменить пароль
            </button>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium text-red-600">Удалить аккаунт</h3>
            <p className="text-sm text-gray-600 mb-2">Удаление аккаунта необратимо. Все ваши данные будут удалены.</p>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              Удалить аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
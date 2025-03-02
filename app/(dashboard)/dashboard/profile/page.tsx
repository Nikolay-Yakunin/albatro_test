"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(session?.user?.name || "");
  const [bio, setBio] = useState("Разработчик и ЧУПАПИ МУНЯНЯ.");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Профиль пользователя</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-[var(--color-teal)]">
            <Image
              src={session?.user?.image || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"}
              alt={session?.user?.name || "Пользователь"}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={session?.user?.email || ""}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Email нельзя изменить</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-[var(--color-teal)] text-white rounded-md hover:bg-[var(--color-dark-blue)] transition-colors"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
                <p className="text-gray-600 mt-1">{session?.user?.email}</p>
                <p className="mt-4">{bio}</p>
                
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-6 px-4 py-2 bg-[var(--color-teal)] text-white rounded-md hover:bg-[var(--color-dark-blue)] transition-colors"
                >
                  Редактировать профиль
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
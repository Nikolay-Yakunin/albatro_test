"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaTelegram, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';
import md5 from 'md5';
import Link from 'next/link';

export default function Contact() {
    const [avatarUrl, setAvatarUrl] = useState('/public/images/avatar.webp');
    const email = 'akuninn52@gmail.com';

    useEffect(() => {
        const emailHash = md5(email.trim().toLowerCase());
        const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=256&d=mp`;
        setAvatarUrl(gravatarUrl);
    }, [email]);

    return (

        <>
            <section className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Свяжитесь со мной</h1>
                <div className="w-32 h-32 mx-auto mb-8 relative rounded-full overflow-hidden border-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <div
                        className="relative w-full h-full"
                    >
                        <Image
                            src={avatarUrl}
                            alt="Аватар"
                            fill
                            className="object-cover transition-opacity duration-300"
                        />
                    </div>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Буду рад обсудить ваш проект или ответить на любые вопросы. Выберите удобный способ связи ниже.
                </p>
            </section>

            <section className="bg-black md:rounded-lg shadow-xl p-8 md:mb-12 transform hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Контактная информация</h2>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-xl" />
                            <a href="mailto:example@example.com" className="text-gray-300 hover:text-white hover:underline transition-colors">
                                {email}
                            </a>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-lg font-medium text-gray-300 mb-3">Местоположение:</h3>
                            <p className="text-gray-400">Барнаул, Россия</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Социальные сети</h2>
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="https://github.com/Nikolay-Yakunin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-700"
                            >
                                <FaGithub className="text-2xl" />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                href="https://t.me/Nicolay_Yakunin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-700"
                            >
                                <FaTelegram className="text-2xl" />
                                <span>Telegram</span>
                            </Link>
                            <a
                                href="https://t.me/blog_NY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-700"
                            >
                                <FaQuoteLeft className="text-2xl" />
                                <span>Blog</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
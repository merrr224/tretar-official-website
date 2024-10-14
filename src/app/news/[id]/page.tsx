// src/app/news/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAnnouncementById, getAllAnnouncements } from '../lib';
import { Announcement } from '../types';
import React from 'react';

interface AnnouncementPageProps {
    params: { id: string };
}

const AnnouncementPage = async ({ params }: AnnouncementPageProps) => {
    const announcement: Announcement | null = getAnnouncementById(params.id);

    if (!announcement) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{announcement.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
                <span>{new Date(announcement.date).toLocaleDateString()}</span>
                <span className="mx-2">|</span>
                <span>{announcement.category}</span>
            </div>
            <div className="relative w-full h-64 mb-6">
                <Image
                    src={announcement.thumbnail}
                    alt={announcement.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="prose">
                {announcement.content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementPage;

// 動的ルートのパスを生成
export async function generateStaticParams() {
    const announcements = getAllAnnouncements();
    return announcements.map((announcement) => ({
        id: announcement.id,
    }));
}

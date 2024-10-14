// src/app/news/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { getAllAnnouncements } from './lib';
import { Announcement } from './types';

interface NewsPageProps {
    searchParams: { page?: string };
}

const ITEMS_PER_PAGE = 5;

const NewsPage = async ({ searchParams }: NewsPageProps) => {
    // ページ番号を取得（デフォルトは1）
    const page = parseInt(searchParams.page || '1', 10);

    // すべてのお知らせを取得
    const allAnnouncements = getAllAnnouncements();

    // 総ページ数を計算
    const totalPages = Math.ceil(allAnnouncements.length / ITEMS_PER_PAGE);

    // 現在のページに表示するお知らせをスライス
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentAnnouncements = allAnnouncements.slice(start, end);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">お知らせ一覧</h1>

            {/* お知らせ一覧 */}
            <div className="grid gap-6">
                {currentAnnouncements.map(announcement => (
                    <div key={announcement.id} className="border rounded-lg p-4 flex">
                        <Image
                            src={announcement.thumbnail}
                            alt={announcement.title}
                            width={96} // 24 * 4 = 96px
                            height={96}
                            className="object-cover mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">
                                <Link href={`/news/${announcement.id}`}>
                                    {announcement.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600">{new Date(announcement.date).toLocaleDateString()}</p>
                            <p className="text-gray-600">{announcement.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ページネーション */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <Link
                        key={index + 1}
                        href={`/news?page=${index + 1}`}
                        className={`mx-1 px-3 py-1 rounded ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {index + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;

/*
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllAnnouncements } from './lib';
import { Announcement } from './types';
import React, { useEffect, useState } from 'react';

interface NewsPageProps {
    announcements: Announcement[];
}

const ITEMS_PER_PAGE = 5;

// お知らせ一覧ページ
const NewsPage: React.FC<NewsPageProps> = ({ announcements }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageParam = searchParams.get('page');
    const currentPage = pageParam ? parseInt(pageParam) : 1;

    const totalPages = Math.ceil(announcements.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentAnnouncements = announcements.slice(start, end);

    const handlePageChange = (page: number) => {
        router.push(`/news?page=${page}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">お知らせ一覧</h1>
            <div className="grid gap-6">
                {currentAnnouncements.map(announcement => (
                    <div key={announcement.id} className="border rounded-lg p-4 flex">
                        <Image
                            src={announcement.thumbnail}
                            alt={announcement.title}
                            width={96} // 24 * 4 = 96px
                            height={96}
                            className="object-cover mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">
                                <Link href={`/news/${announcement.id}`}>
                                    {announcement.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600">{new Date(announcement.date).toLocaleDateString()}</p>
                            <p className="text-gray-600">{announcement.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* ページネーション 
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;

// src/app/news/page.tsx を 'use client' コンポーネントとして設定し、クライアントサイドでページネーションを管理

*/
// src/app/news/lib.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Announcement } from './types';

const announcementsDirectory = path.join(process.cwd(), 'src', 'app', 'news', 'data', 'announcements');

// Markdownファイルを読み込む
export function getAllAnnouncements(): Announcement[] {
    const fileNames = fs.readdirSync(announcementsDirectory);
    const announcements = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(announcementsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            id,
            title: data.title,
            thumbnail: data.thumbnail,
            date: data.date,
            category: data.category,
            content,
        };
    });

    // 日付でソート（新しい順）
    announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return announcements;
}

export function getAnnouncementById(id: string): Announcement | null {
    const fullPath = path.join(announcementsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        id,
        title: data.title,
        thumbnail: data.thumbnail,
        date: data.date,
        category: data.category,
        content,
    };
}

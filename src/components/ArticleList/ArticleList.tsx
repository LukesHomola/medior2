'use client';

import { ReactElement } from 'react';
import { useUser } from '@/context/UserContext';
import styles from './ArticleList.module.scss';

interface IArticle {
  id: number;
  title: string;
  content: string;
}

interface IProps {
  articles: IArticle[];
  fallbackAuthorName?: string;
}

export default function ArticleList({
  articles,
  fallbackAuthorName,
}: IProps): ReactElement {
  const user = useUser();
  const authorName = user?.name || fallbackAuthorName || 'Unknown Author';

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Articles</h1>
      <section className={styles.author_section}>
        <p className={styles.author_label}>Author</p>
        <p className={styles.author_name}>{authorName}</p>
      </section>
      <section className={styles.section_cards}>
        {articles.length === 0 ? (
          <p>No articles available.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className={styles.card}>
              <h2 className={styles.title}>{article.title}</h2>
              <p className={styles.body}>{article.content}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { getPrismicClient } from '../services/prismic';

import Header from '../components/Header';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  return (
    <>
      <main className={commonStyles.contentContainer}>
        <Header />

        <div className={styles.posts}>
          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>

          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>

          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>

          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>

          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>

          <Link href="/">
            <a>
              <strong>Algum Título</strong>
              <p>Pensado em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  <span>10 Fev 2022</span>
                </li>

                <li>
                  <FiUser />
                  <span>Vitor Galeti</span>
                </li>
              </ul>
            </a>
          </Link>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query<any>(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: ['post.title', 'post.content', 'post.subtitle', 'post.author'],
      pageSize: 1,
    }
  );
  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: { postsPagination },
  };
};

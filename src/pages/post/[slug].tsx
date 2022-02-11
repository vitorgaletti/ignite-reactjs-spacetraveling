import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <>
      <Head>
        <title> | spacetraveling</title>
      </Head>
      <div className={styles.contentHeader}>
        <Header />
      </div>
      <img src="/banner.png" alt="banner" className={styles.banner} />
      <main className={commonStyles.contentContainer}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Criando um app CRA do zero</h1>
            <ul>
              <li>
                <FiCalendar />
                <span>15 Mar 2021</span>
              </li>
              <li>
                <FiUser />
                <span>Joseph Oliveira</span>
              </li>
              <li>
                <FiClock />
                <span>4 min</span>
              </li>
            </ul>
          </div>
          <article>
            <h2>Proin et varius</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
              Nam facilisis sodales felis, pharetra pharetra lectus auctor sed.
              Ut venenatis mauris vel libero pretium, et pretium ligula
              faucibus. Morbi nibh felis, elementum a posuere et, vulputate et
              erat. Nam venenatis.
            </p>

            <h2>Proin et varius</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
              Nam facilisis sodales felis, pharetra pharetra lectus auctor sed.
              Ut venenatis mauris vel libero pretium, et pretium ligula
              faucibus. Morbi nibh felis, elementum a posuere et, vulputate et
              erat. Nam venenatis.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };

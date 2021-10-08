import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import mainStyles from '../pages/index.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'TERN Ontology',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    // img: require('../../static/img/docusaurus.png'),
    img: 'https://www.tern.org.au/wp-content/uploads/2019/10/ecosystem@2x.png',
    to: '/tern-ontology',
    description: (
      <>
        The TERN Ontology is a conceptual information model to represent plot-based ecological surveys.
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ Svg, to, img, title, description }) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} alt={title} /> */}
          <img src={img} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={mainStyles.buttons}><Link to={to} className="button button--secondary button--lg">View</Link></div>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

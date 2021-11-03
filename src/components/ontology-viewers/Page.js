import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import ResourceView from './ResourceView';
import ClassFlatList from './ClassFlatList';
import ClassHierarchyList from './ClassHierarchyList';
import ScrollToTop from '../ScrollToTop';
import Select from 'react-select'
import styles from './viewer.modules.css'
import useQuery from '../../hooks/useQuery';

const selectOptions = [
  { value: 'hierarchy', label: 'hierarchy' },
  { value: 'flat', label: 'flat' },
]

function PageComponent({ settings }) {
  let query = useQuery();
  const uri = query.get('uri')

  // Reason we serialise fetchOptions is to avoid infinite loop.
  // See https://github.com/vercel/swr/issues/345
  // const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  const [selectedClass, setSelectedClass] = useState(null)

  const [viewType, setViewType] = useState(selectOptions[0])

  useEffect(() => {
    if (uri) {
      setSelectedClass(uri)
    }
  }, [uri, viewType])

  let classNavComponent;
  if(viewType.value === 'flat') {
    classNavComponent = <ClassFlatList settings={settings} />
  }
  else if(viewType.value === 'hierarchy') {
    classNavComponent = <ClassHierarchyList settings={settings} />
  }

  return (
    <main className="margin-vert--lg">
      <div className="row">
        <div className="col col--2">
          <div className={styles.classList + " padding--sm padding-left--md"}>
            <h2>Classes</h2>
            <Select className="padding-bottom--md" options={selectOptions} defaultValue={viewType} onChange={value => setViewType(value)} />
            {classNavComponent}
          </div>
        </div>

        <div className="col col--10">
          <ResourceView resourceUri={selectedClass} settings={settings} />
        </div>
      </div>
    </main>
  )
}

export default function Page({ settings }) {
  if (typeof window === "undefined") {
    return <></>
  }

  return <Layout title={settings.title}>
    <Router>
      <ScrollToTop>
        <PageComponent settings={settings} />
      </ScrollToTop>
    </Router>
  </Layout>
}
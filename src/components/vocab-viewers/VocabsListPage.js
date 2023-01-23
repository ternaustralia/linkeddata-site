import React from "react";
import useSWR from "swr";
import { getFetcher } from "../../data/dataFetcher";
import useQuery from "../../hooks/useQuery";
import { useViewerSettings } from "../../hooks/useViewerSettings";
import { VocabItem } from "./VocabItem";
import { VocabsPageNav } from "./VocabsPageNav";

export function VocabsListPage({ settingsID }) {
  const settings = useViewerSettings(settingsID);

  const params = useQuery();
  let page = params.get("page") || 1;
  if (typeof page === "string") {
    page = parseInt(page);
  }

  const { data, error } = useSWR(
    settings.api + `/viewer/entrypoint/${settingsID}?page=${page}`,
    getFetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { items, items_count: itemsCount, total_pages: totalPages } = data;

  return (
    <>
      <h2>{settings.title}</h2>

      <p>
        Showing page {page} of {totalPages} ({itemsCount} results).
      </p>

      <VocabsPageNav currentPage={page} totalPages={totalPages} />

      {items && items.length > 0 ? (
        items.map((item) => (
          <VocabItem
            key={item.id}
            uri={item.id}
            label={item.label}
            description={item.description}
          />
        ))
      ) : (
        <div>Sorry, failed to load data.</div>
      )}

      <VocabsPageNav currentPage={page} totalPages={totalPages} />
    </>
  );
}

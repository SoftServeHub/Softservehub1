import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_PAGE_LOADERS, type NonITServicePageKey } from "../../../data/nonItServicePages";
import { NON_IT_SERVICE_CATEGORIES } from "../../../data/nonItServicesData";
import PageSEO from "../../../components/PageSEO";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";

const NonITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const loader = NON_IT_SERVICE_PAGE_LOADERS[key as NonITServicePageKey];
  const [Page, setPage] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!loader) {
      setPage(null);
      return;
    }

    setPage(null);
    loader().then((module) => {
      if (!cancelled) {
        setPage(() => module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [loader, key]);

  if (!loader) {
    return <Navigate to="/services/non-it" replace />;
  }

  if (!Page) {
    return null;
  }

  const category = NON_IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
  const item = category?.items.find((i) => i.slug === itemSlug);
  const seoTitle = item ? `${item.title} | Softserve Hub` : "Business Services | Softserve Hub";
  const seoDescription = item?.shortDesc ?? "Professional business solutions delivered by Softserve Hub.";
  const seoCanonical = `/services/non-it/${categorySlug}/${itemSlug}`;
  const fullCanonical = `https://www.softservehub.com${seoCanonical}`;

  return (
    <>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        serviceSchema={item ? { name: item.title, description: item.shortDesc, url: fullCanonical } : undefined}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Non-IT Services", path: "/services/non-it" },
          ...(category ? [{ name: category.title, path: `/services/non-it/${category.slug}` }] : []),
          ...(item ? [{ name: item.title, path: `/services/non-it/${categorySlug}/${itemSlug}` }] : []),
        ]}
      />
      <Page />
    </>
  );
};

export default NonITServiceItemPage;

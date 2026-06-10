import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { IT_SERVICE_PAGE_LOADERS, type ITServicePageKey } from "../../../data/itServicePages";
import { IT_SERVICE_CATEGORIES } from "../../../data/itServicesData";
import PageSEO from "../../../components/PageSEO";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";

const ITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const loader = IT_SERVICE_PAGE_LOADERS[key as ITServicePageKey];
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
    return <Navigate to="/services/it" replace />;
  }

  if (!Page) {
    return null;
  }

  const category = IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
  const item = category?.items.find((i) => i.slug === itemSlug);
  const seoTitle = item ? `${item.title} | Softserve Hub` : "IT Services | Softserve Hub";
  const seoDescription = item?.description ?? "Expert IT solutions delivered by Softserve Hub.";
  const seoCanonical = `/services/it/${categorySlug}/${itemSlug}`;
  const fullCanonical = `https://www.softservehub.com${seoCanonical}`;

  return (
    <>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        serviceSchema={item ? { name: item.title, description: item.description, url: fullCanonical } : undefined}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "IT Services", path: "/services/it" },
          ...(category ? [{ name: category.title, path: `/services/it/${category.slug}` }] : []),
          ...(item ? [{ name: item.title, path: `/services/it/${categorySlug}/${itemSlug}` }] : []),
        ]}
      />
      <Page />
    </>
  );
};

export default ITServiceItemPage;

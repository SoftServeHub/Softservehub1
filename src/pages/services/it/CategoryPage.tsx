import React from "react";
import { useParams, Navigate } from "react-router-dom";
import MasterDetailServicePage from "../../../components/MasterDetailServicePage";
import { IT_SERVICE_CATEGORIES } from "../../../data/itServicesData";
import PageSEO from "../../../components/PageSEO";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";

const ITServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();

  const category = IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/services/it" replace />;
  }

  return (
    <>
      <PageSEO
        title={`${category.title} | Softserve Hub`}
        description={category.desc}
        canonical={`/services/it/${category.slug}`}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "IT Services", path: "/services/it" },
          { name: category.title, path: `/services/it/${category.slug}` },
        ]}
      />
      <MasterDetailServicePage category={category} backTo="/services/it" />
    </>
  );
};

export default ITServiceCategoryPage;

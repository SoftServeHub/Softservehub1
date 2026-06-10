import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MasterDetailServicePage({ category, backTo = "/services" }) {
  const navigate = useNavigate();
  const [activeSlug, setActiveSlug] = useState(category?.items?.[0]?.slug ?? "");

  const activeItem = useMemo(() => {
    if (!category?.items?.length) return null;
    return category.items.find((item) => item.slug === activeSlug) ?? category.items[0];
  }, [category, activeSlug]);

  if (!category) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffCF0] px-6 pb-14 pt-28 text-[#1f1605]">
      <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link to={backTo} className="text-sm text-[#64748b] hover:text-[#b45309]">
            ← Back
          </Link>
          <h1 className="mt-3 text-3xl font-extrabold text-[#0f172a] md:text-5xl">{category.title}</h1>
          <p className="mt-3 max-w-3xl text-[#475569]">{category.desc}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-[#b45309]">Services</h2>
              <div className="space-y-3">
                {category.items.map((item) => {
                  const isActive = item.slug === activeItem?.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setActiveSlug(item.slug)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[#D4AF37]/60 bg-[#fffbeb] shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                          : "border-[#e2e8f0] bg-[#fafafa] hover:bg-[#fffbeb] hover:border-[#d4af37]/35"
                      }`}
                    >
                      <div className="font-semibold text-[#0f172a]">{item.title}</div>
                      <div className="mt-1 text-sm text-[#64748b]">{item.shortDesc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-extrabold text-[#0f172a]">{activeItem?.title}</h3>
              <p className="mt-4 text-[#475569]">{activeItem?.description ?? activeItem?.shortDesc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(activeItem?.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D4AF37]/35 bg-[#fffbeb] px-3 py-1 text-xs text-[#92400e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate(`/services/it/${category.slug}/${activeItem?.slug}`)}
                className="mt-8 rounded-2xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#1f1605] transition hover:brightness-105"
              >
                View Service
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

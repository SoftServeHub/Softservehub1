type EnquiryPayload = {
  website_slug: string;
  form_type: string;
  name: string;
  email: string;
  phone: string;
  subject?: string | null;
  enquiry_type?: string | null;
  service_interested_in?: string | null;
  message: string;
  source_page_url?: string | null;
  source_page_title?: string | null;
  metadata?: Record<string, unknown>;
};

type EnquirySubmitInput = Omit<EnquiryPayload, "website_slug"> & {
  website_slug?: string;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || "http://localhost:4000/api/v1";
const WEBSITE_SLUG =
  (import.meta.env.VITE_ENQUIRY_WEBSITE_SLUG as string | undefined)?.trim() ||
  (import.meta.env.VITE_PUBLIC_WEBSITE_SLUG as string | undefined)?.trim() ||
  (import.meta.env.VITE_BLOG_WEBSITE_SLUG as string | undefined)?.trim() ||
  "softservehub-products";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

export async function submitEnquiry(payload: EnquirySubmitInput) {
  const response = await fetch(new URL("enquiries", normalizeBaseUrl(API_BASE_URL)).toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...payload,
      website_slug: payload.website_slug ?? WEBSITE_SLUG
    } satisfies EnquiryPayload)
  });

  if (!response.ok) {
    throw new Error(`Enquiry submission failed with status ${response.status}`);
  }

  return response.json();
}

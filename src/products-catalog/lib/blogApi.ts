import type { BlogPost, BlogSection } from "../types/blog";

type UnknownRecord = Record<string, unknown>;

const LOCAL_API_BASE_URL = "http://localhost:4000/api/v1";
const BLOG_API_BASE_URL =
  (import.meta.env.VITE_BLOG_API_URL as string | undefined)?.trim() || "";
const PUBLIC_API_BASE_URL =
  (import.meta.env.VITE_PUBLIC_API_BASE_URL as string | undefined)?.trim() || "";
const WEBSITE_SLUG =
  (import.meta.env.VITE_PUBLIC_WEBSITE_SLUG as string | undefined)?.trim() ||
  (import.meta.env.VITE_BLOG_WEBSITE_SLUG as string | undefined)?.trim() ||
  "softservehub-products";

const POSTS_ENDPOINT = `public/websites/${WEBSITE_SLUG}/blogs`;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

function toStringValue(value: unknown, fallback = ""): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return fallback;
}

function toBooleanValue(value: unknown): boolean {
  return value === true || value === "true" || value === 1 || value === "1";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

function getCandidateBaseUrls(): string[] {
  const isLocalhost =
    typeof window !== "undefined" &&
    /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);

  const baseUrls: string[] = [];
  const pushUnique = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || baseUrls.includes(trimmed)) {
      return;
    }
    baseUrls.push(trimmed);
  };

  if (isLocalhost) {
    pushUnique(LOCAL_API_BASE_URL);
  }

  pushUnique(BLOG_API_BASE_URL);

  if (
    PUBLIC_API_BASE_URL.startsWith("http://") ||
    PUBLIC_API_BASE_URL.startsWith("https://") ||
    PUBLIC_API_BASE_URL.startsWith("//") ||
    PUBLIC_API_BASE_URL.startsWith("/")
  ) {
    pushUnique(PUBLIC_API_BASE_URL);
  }

  if (!isLocalhost) {
    pushUnique(LOCAL_API_BASE_URL);
  }

  return baseUrls;
}

function resolveUrl(value: unknown): string {
  const rawValue = toStringValue(value).trim();

  if (!rawValue) {
    return "";
  }

  if (/^(https?:)?\/\//i.test(rawValue) || rawValue.startsWith("data:")) {
    return rawValue;
  }

  const baseUrl = BLOG_API_BASE_URL || PUBLIC_API_BASE_URL || LOCAL_API_BASE_URL;
  try {
    return new URL(rawValue, normalizeBaseUrl(baseUrl)).toString();
  } catch {
    return rawValue;
  }
}

function stripHtml(value: string): string {
  if (!value) {
    return "";
  }

  if (typeof DOMParser !== "undefined" && /<[^>]+>/.test(value)) {
    const doc = new DOMParser().parseFromString(value, "text/html");
    return (doc.body.textContent ?? "").replace(/\s+/g, " ").trim();
  }

  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function estimateReadTime(text: string): string {
  const wordCount = stripHtml(text).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 180));
  return `${minutes} min read`;
}

function inferDepartment(post: UnknownRecord): string {
  const title = toStringValue(post.title ?? post.name ?? post.heading).toLowerCase();
  const slug = toStringValue(post.slug ?? post.url_slug ?? post.permalink).toLowerCase();
  const excerpt = toStringValue(post.excerpt ?? post.summary ?? post.short_description).toLowerCase();
  const content = toStringValue(post.content ?? post.body ?? post.description).toLowerCase();
  const haystack = `${title} ${slug} ${excerpt} ${content}`;

  if (/(hrms|recruit|attendance|onboard|leave|workforce|talent|hiring)/i.test(haystack)) {
    return "Recruitment";
  }

  if (/(crms|crm|sales|pipeline|forecast|customer|deal)/i.test(haystack)) {
    return "Sales Automation";
  }

  if (/(orbileads|lead|outbound|sequence|prospect|campaign|reply)/i.test(haystack)) {
    return "Lead Generation";
  }

  const tagNames = Array.isArray(post.tags)
    ? post.tags
        .map((tag) => (isRecord(tag) ? toStringValue(tag.name ?? tag.slug) : ""))
        .filter(Boolean)
    : [];

  const websiteName = isRecord(post.website) ? toStringValue(post.website.name) : "";
  return tagNames[0] || websiteName || "General";
}

function buildPlaceholderImage(title: string, department: string): string {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeDepartment = department.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1d1630" />
          <stop offset="55%" stop-color="#40235d" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" />
      <circle cx="960" cy="150" r="220" fill="url(#glow)" />
      <circle cx="180" cy="650" r="220" fill="#22d3ee" fill-opacity="0.12" />
      <rect x="70" y="70" width="240" height="48" rx="24" fill="rgba(255,255,255,0.15)" />
      <text x="102" y="103" font-family="Arial, sans-serif" font-size="20" fill="#f8fafc">${safeDepartment}</text>
      <text x="70" y="360" font-family="Arial, sans-serif" font-size="68" font-weight="700" fill="#ffffff">${safeTitle}</text>
      <text x="70" y="430" font-family="Arial, sans-serif" font-size="28" fill="#cbd5e1">SoftServe Hub Product Blog</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function normalizeSection(section: unknown, fallbackTitle: string): BlogSection | null {
  if (!isRecord(section)) {
    return null;
  }

  const subtitle = toStringValue(section.subtitle ?? section.heading ?? section.title, fallbackTitle);
  const paragraph = toStringValue(section.paragraph ?? section.content ?? section.description ?? section.body);
  const image = resolveUrl(section.image ?? section.imageUrl ?? section.media_url);
  const video = resolveUrl(section.video ?? section.videoUrl ?? section.video_url);
  const imageAlt = toStringValue(section.imageAlt ?? section.image_alt ?? section.alt);
  const mediaCaption = toStringValue(section.mediaCaption ?? section.media_caption ?? section.caption);

  if (!subtitle && !paragraph && !image && !video) {
    return null;
  }

  return {
    subtitle: subtitle || fallbackTitle,
    paragraph,
    image: image || undefined,
    imageAlt: imageAlt || undefined,
    video: video || undefined,
    mediaCaption: mediaCaption || undefined,
  };
}

function buildSectionsFromBody(body: string, title: string, image: string, introVideo: string): BlogSection[] {
  const trimmedBody = body.trim();
  if (!trimmedBody) {
    return [];
  }

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(trimmedBody);
  if (hasHtml && typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(trimmedBody, "text/html");
    const sections: BlogSection[] = [];
    let currentTitle = "Overview";
    let currentParagraphs: string[] = [];

    const flush = () => {
      const paragraph = currentParagraphs.join("\n\n").trim();
      if (!paragraph && sections.length > 0) {
        currentParagraphs = [];
        return;
      }

      if (paragraph) {
        sections.push({
          subtitle: currentTitle,
          paragraph,
          image: sections.length === 0 ? image || undefined : undefined,
          imageAlt: sections.length === 0 && title ? `${title} cover image` : undefined,
          video: sections.length === 0 ? introVideo || undefined : undefined,
          mediaCaption: sections.length === 0 && introVideo ? `${title} video` : undefined,
        });
      }

      currentParagraphs = [];
    };

    Array.from(doc.body.children).forEach((node) => {
      const tagName = node.tagName.toLowerCase();
      const text = (node.textContent ?? "").replace(/\s+/g, " ").trim();
      if (!text) {
        return;
      }

      if (/^h[1-4]$/.test(tagName)) {
        flush();
        currentTitle = text;
        return;
      }

      currentParagraphs.push(text);
    });

    flush();

    if (sections.length > 0) {
      return sections;
    }
  }

  const blocks = trimmedBody
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks.length === 0) {
    const text = stripHtml(trimmedBody);
    return text
      ? [
          {
            subtitle: "Overview",
            paragraph: text,
            image: image || undefined,
            imageAlt: title ? `${title} cover image` : undefined,
            video: introVideo || undefined,
            mediaCaption: introVideo ? `${title} video` : undefined,
          },
        ]
      : [];
  }

  return blocks.map((block, index) => ({
    subtitle: index === 0 ? "Overview" : `Section ${index + 1}`,
    paragraph: stripHtml(block),
    image: index === 0 ? image || undefined : undefined,
    imageAlt: index === 0 && title ? `${title} cover image` : undefined,
    video: index === 0 ? introVideo || undefined : undefined,
    mediaCaption: index === 0 && introVideo ? `${title} video` : undefined,
  }));
}

function normalizeSections(post: UnknownRecord, title: string, fallbackText: string): BlogSection[] {
  const rawSections = post.sections ?? post.content_sections ?? post.blocks;

  if (Array.isArray(rawSections)) {
    const sections = rawSections
      .map((section, index) => normalizeSection(section, `Section ${index + 1}`))
      .filter((section): section is BlogSection => section !== null);

    if (sections.length > 0) {
      return sections;
    }
  }

  const body = toStringValue(post.content ?? post.body ?? fallbackText);
  const introVideo = resolveUrl(post.introVideo ?? post.intro_video);
  const image = resolveUrl(
    post.featuredImage ??
      post.featured_image ??
      post.bannerImage ??
      post.banner_image ??
      post.ogImage ??
      post.og_image
  );

  const sectionsFromBody = buildSectionsFromBody(body, title, image, introVideo);
  if (sectionsFromBody.length > 0) {
    return sectionsFromBody;
  }

  const plainTextBody = stripHtml(body);
  if (!plainTextBody) {
    return [];
  }

  return [
    {
      subtitle: "Overview",
      paragraph: plainTextBody,
      image: image || undefined,
      imageAlt: title ? `${title} cover image` : undefined,
      video: introVideo || undefined,
      mediaCaption: introVideo ? `${title} video` : undefined,
    },
  ];
}

function normalizePost(post: unknown, index = 0): BlogPost | null {
  if (!isRecord(post)) {
    return null;
  }

  const title = toStringValue(post.title ?? post.name ?? post.heading, `Blog Post ${index + 1}`);
  const slugSource = toStringValue(post.slug ?? post.url_slug ?? post.permalink ?? title);
  const slug = slugify(slugSource) || `blog-post-${index + 1}`;

  const descriptionSource =
    post.description ??
    post.excerpt ??
    post.summary ??
    post.short_description ??
    stripHtml(toStringValue(post.content ?? post.body));
  const description = toStringValue(descriptionSource);
  const department = inferDepartment(post);

  const featuredImage = resolveUrl(post.featuredImage ?? post.featured_image);
  const bannerImage = resolveUrl(post.bannerImage ?? post.banner_image);
  const ogImage = resolveUrl(post.ogImage ?? post.og_image);
  const image =
    featuredImage ||
    bannerImage ||
    ogImage ||
    resolveUrl(
      post.featuredImage ??
        post.featured_image ??
        post.bannerImage ??
        post.banner_image ??
        post.image ??
        post.imageUrl ??
        post.thumbnail ??
        post.cover_image
    );

  const dateSource =
    post.date ??
    post.publishDate ??
    post.publish_date ??
    post.publishedAt ??
    post.published_at ??
    post.createdAt ??
    post.created_at;
  const date = toStringValue(dateSource, new Date().toISOString());

  const readTime = toStringValue(post.readTime ?? post.read_time, estimateReadTime(`${description} ${toStringValue(post.content ?? post.body)}`));
  const sections = normalizeSections(post, title, description);

  return {
    slug,
    title,
    description,
    department,
    image: image || buildPlaceholderImage(title, department),
    featuredImage: featuredImage || undefined,
    bannerImage: bannerImage || undefined,
    date,
    readTime,
    sections,
    featured: toBooleanValue(post.featured ?? post.is_featured),
  };
}

function extractPayloadData(payload: unknown): unknown {
  if (isRecord(payload) && "data" in payload) {
    return payload.data;
  }

  return payload;
}

function extractPosts(payload: unknown): unknown[] {
  const data = extractPayloadData(payload);

  if (Array.isArray(data)) {
    return data;
  }

  if (!isRecord(data)) {
    return [];
  }

  const candidates = [data.posts, data.results, data.items, data.blogs];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }

  return [];
}

async function requestJson(
  path: string,
  signal?: AbortSignal,
  baseUrl: string = BLOG_API_BASE_URL || PUBLIC_API_BASE_URL || LOCAL_API_BASE_URL
): Promise<unknown> {
  const response = await fetch(new URL(path, normalizeBaseUrl(baseUrl)).toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Blog API request failed with status ${response.status}`);
  }

  return response.json();
}

async function fetchAllPages(baseUrl: string, signal?: AbortSignal): Promise<unknown[]> {
  const firstPagePath = `${POSTS_ENDPOINT}?page=1&limit=100`;
  const firstPayload = await requestJson(firstPagePath, signal, baseUrl);
  const firstPosts = extractPosts(firstPayload);
  const meta = isRecord(firstPayload) && isRecord(firstPayload.meta) ? firstPayload.meta : null;
  const totalPages = Number(
    meta?.totalPages ?? meta?.total_pages ?? meta?.pageCount ?? meta?.page_count ?? 1
  );

  if (!Number.isFinite(totalPages) || totalPages <= 1) {
    return firstPosts;
  }

  const extraPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      requestJson(`${POSTS_ENDPOINT}?page=${index + 2}&limit=100`, signal, baseUrl)
    )
  );

  return extraPages.reduce<unknown[]>((all, payload) => all.concat(extractPosts(payload)), firstPosts);
}

export async function fetchBlogPosts(signal?: AbortSignal): Promise<BlogPost[]> {
  const candidateBaseUrls = getCandidateBaseUrls();
  let lastEmptyResult: BlogPost[] = [];

  for (const baseUrl of candidateBaseUrls) {
    try {
      const payload = await fetchAllPages(baseUrl, signal);
      const normalizedPosts = payload
        .map((post, index) => normalizePost(post, index))
        .filter((post): post is BlogPost => post !== null);

      if (normalizedPosts.length > 0) {
        return normalizedPosts;
      }

      lastEmptyResult = normalizedPosts;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return [];
      }
    }
  }

  return lastEmptyResult;
}

export async function fetchBlogPostBySlug(
  slug: string,
  signal?: AbortSignal
): Promise<BlogPost | null> {
  for (const baseUrl of getCandidateBaseUrls()) {
    try {
      const payload = await requestJson(
        `${POSTS_ENDPOINT}/${encodeURIComponent(slug)}`,
        signal,
        baseUrl
      );
      const data = extractPayloadData(payload);
      const normalized = normalizePost(data, 0);
      if (normalized) {
        return normalized;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return null;
      }
    }
  }

  const posts = await fetchBlogPosts(signal);
  return posts.find((post) => post.slug === slug) ?? null;
}

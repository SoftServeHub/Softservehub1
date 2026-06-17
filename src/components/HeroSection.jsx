import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import hero1 from "../images/hero1.webp";
import hero2 from "../images/hero2.webp";
import hero3 from "../images/hero3.webp";
import projectsDeliveredImg from "../images/120+projects.webp";
import happyClientsImg from "../images/80+happy clients.webp";
import fiveStarRatingImg from "../images/5star rating.webp";
import MagneticMorphStack from "./hero/MagneticMorphStack";

const HERO_SLIDESHOW_IMAGES = [hero1, hero2, hero3];

gsap.registerPlugin(ScrollTrigger);

const ENTERPRISE_SLIDES = [
  {
    title: "120+ Projects Delivered",
    description:
      "From startups to enterprise teams, we have shipped production-ready software, automation, and platforms that drive measurable business outcomes.",
    photoSide: "left",
    image: projectsDeliveredImg,
  },
  {
    title: "80+ Happy Clients",
    description:
      "Trusted partnerships built on clear communication, reliable delivery, and solutions that keep teams moving forward with confidence.",
    photoSide: "right",
    image: happyClientsImg,
  },
  {
    title: "10+ Years Experience",
    description:
      "A decade of hands-on expertise across AI, enterprise software, and digital transformation for growing businesses worldwide.",
    photoSide: "left",
    image: hero3,
  },
  {
    title: "5-Star Rating",
    description:
      "Consistently rated for quality, responsiveness, and results—proof that our work meets the standards clients expect every time.",
    photoSide: "right",
    image: fiveStarRatingImg,
  },
];

const TAGLINE_WORDS = ["Innovate.", "Integrate.", "Inspire."];

const MOBILE_CONTACT_ACTIONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/916380207061",
    external: true,
    className: "bg-[#25D366] text-white hover:bg-[#1ebe57]",
    icon: MessageCircle,
  },
  {
    label: "Call",
    href: "tel:+916380207061",
    className: "bg-gradient-to-br from-[#d4af37] to-[#f6df9a] text-[#09090b] hover:brightness-105",
    icon: Phone,
  },
  {
    label: "Mail",
    href: "mailto:contact@softservehub.com",
    className: "bg-[#0f172a] text-white hover:bg-[#1e293b]",
    icon: Mail,
  },
  {
    label: "Location",
    href: "https://www.google.com/maps/place/SoftServe+Hub+Global+Ai+Technologies+Private+Limited/@12.9646836,80.2468603,17z",
    external: true,
    className: "bg-[#92400e] text-white hover:bg-[#7c2d12]",
    icon: MapPin,
  },
];

const ease = [0.22, 1, 0.36, 1];

const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const headlineItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const textEntry = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  },
});

const copyBlockEntry = (fromLeft) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
});

const copyTitleEntry = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? 40 : -40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.85, ease },
  },
});

const copyDescEntry = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? 32 : -32, y: 16 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease },
  },
});

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", update);
    update();
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function IntroSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 items-center gap-x-6 gap-y-8 sm:gap-x-8"
    >
      <motion.div
        variants={textEntry(0)}
        initial="hidden"
        animate="visible"
        className="relative z-10 col-span-12 flex flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="visible"
          className="font-azzuri-calcio w-full font-black uppercase tracking-tight"
          style={{ lineHeight: 0.88 }}
        >
          <motion.span
            variants={headlineItem}
            className="flex flex-nowrap items-baseline justify-center gap-x-[0.2em] whitespace-nowrap"
            style={{ fontSize: "calc(clamp(3.35rem, 14.5vw, 8rem) - 5px)" }}
          >
            {TAGLINE_WORDS.slice(0, 2).map((word, i) => (
              <span
                key={word}
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    i === 1
                      ? "linear-gradient(90deg, #d4af37 0%, #f6df9a 45%, #b45309 100%)"
                      : "linear-gradient(90deg, #0f172a 0%, #92400e 42%, #d4af37 100%)",
                }}
              >
                {word}
              </span>
            ))}
          </motion.span>
          <motion.span
            variants={headlineItem}
            className="block bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(3.35rem, 14.5vw, 8rem)",
              backgroundImage:
                "linear-gradient(90deg, #92400e 0%, #d4af37 55%, #f6df9a 100%)",
            }}
          >
            {TAGLINE_WORDS[2]}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={textEntry(0.45)}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-xl text-lg font-bold leading-relaxed text-[#475569] sm:mt-7 sm:text-xl"
        >
          AI automation, enterprise software, and scalable platforms—built with clarity and
          precision for teams that expect more.
        </motion.p>

        <motion.div
          variants={textEntry(0.58)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex w-full max-w-md flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 sm:mt-10"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.span
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6df9a] px-7 text-sm font-semibold text-[#09090b] shadow-[0_12px_36px_rgba(212,175,55,0.35)] sm:h-auto sm:min-w-[210px] sm:py-3"
            >
              <span className="relative z-10">Start your project</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.span>
          </Link>

          <Link to="/services" className="w-full sm:w-auto">
            <motion.span
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-[#d1d9e6] bg-white/95 px-7 text-sm font-semibold text-[#334155] shadow-sm backdrop-blur-sm transition-colors hover:border-[#d4af37]/55 hover:bg-white sm:min-w-[185px] sm:w-auto"
            >
              View services
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          variants={textEntry(0.72)}
          initial="hidden"
          animate="visible"
          className="mt-10 w-full max-w-lg"
        >
          <motion.div className="rounded-2xl border border-[#e2e8f0] bg-white/95 p-4 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#92400e]">
              Quick contact
            </p>
            <motion.div className="grid grid-cols-2 gap-2.5">
              {MOBILE_CONTACT_ACTIONS.map((action) => {
                const Icon = action.icon;
                const linkProps = action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    {...linkProps}
                    className={`flex flex-col items-center justify-center gap-1.5 rounded-xl px-2 py-3.5 text-center transition-transform active:scale-[0.98] ${action.className}`}
                  >
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
                    <span className="text-[11px] font-bold uppercase tracking-wide">
                      {action.label}
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function EnterpriseSlideCard({
  slide,
  slideIndex,
  slidePhotoSrc,
  itemClassName = "",
  useBackgroundImages = false,
}) {
  const isLeft = slide.photoSide === "left";
  const showInlineImage = !useBackgroundImages;

  const imageBlock = (
    <motion.div
      className={cn(
        "hero-img-el relative w-full",
        isLeft ? "md:order-1" : "md:order-2",
      )}
      initial={{ opacity: 0, x: isLeft ? -56 : 56, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.85, ease }}
    >
      <div className="aspect-4/3 overflow-hidden rounded-2xl border border-[#d4d4d8] bg-white shadow-sm md:rounded-3xl">
        <motion.img
          src={slidePhotoSrc}
          alt=""
          className="h-full min-h-[200px] w-full rounded-xl object-cover md:min-h-[300px] md:rounded-2xl"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
        />
      </div>
    </motion.div>
  );

  const copyBlock = (
    <motion.div
      className={cn(
        "flex flex-col justify-center gap-5 px-2 md:px-6",
        isLeft ? "md:order-2" : "md:order-1",
      )}
      variants={copyBlockEntry(isLeft)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h3
        variants={copyTitleEntry(isLeft)}
        className="hero-copy-el font-azzuri-calcio text-3xl font-black uppercase leading-[0.9] tracking-tight text-[#09090b] sm:text-4xl lg:text-5xl"
      >
        {slide.title}
      </motion.h3>
      {slide.title.includes("5-Star") && (
        <motion.div
          variants={copyDescEntry(isLeft)}
          className="hero-copy-el flex items-center gap-1"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, starIdx) => (
            <Star
              key={starIdx}
              className="h-6 w-6 fill-[#d4af37] text-[#d4af37] sm:h-7 sm:w-7"
              strokeWidth={1.5}
            />
          ))}
        </motion.div>
      )}
      <motion.p
        variants={copyDescEntry(isLeft)}
        className="hero-copy-el border-l-2 border-[#d4af37]/40 pl-5 text-base font-medium leading-relaxed text-[#52525b] md:text-lg"
      >
        {slide.description}
      </motion.p>
    </motion.div>
  );

  return (
    <motion.div
      className={cn(
        "hero-h-item flex h-screen w-screen shrink-0 items-center border-r border-[#e2e8f0]/80",
        useBackgroundImages ? "bg-transparent" : "bg-white",
        itemClassName,
        `hero-slide-${slideIndex}`,
      )}
    >
      <motion.div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 pt-20 sm:px-8 md:px-10">
        <motion.div
          className={cn(
            "overflow-hidden rounded-[1.75rem] border p-4 sm:rounded-[2rem] sm:p-6 md:p-8 lg:p-10",
            useBackgroundImages
              ? "border-white/40 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-md"
              : "border border-[#d4d4d8] bg-[#e5e7eb] shadow-[0_24px_60px_rgba(15,23,42,0.08)]",
          )}
        >
          <motion.div
            className={cn(
              "grid grid-cols-1 items-center gap-8",
              showInlineImage && "md:grid-cols-2 md:gap-10 lg:gap-14",
            )}
          >
            {showInlineImage ? (
              isLeft ? (
                <>
                  {imageBlock}
                  {copyBlock}
                </>
              ) : (
                <>
                  {copyBlock}
                  {imageBlock}
                </>
              )
            ) : (
              copyBlock
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  const triggerRef = useRef(null);
  const enterWrapperRef = useRef(null);
  const desktopTrackRef = useRef(null);
  const mobileTrackRef = useRef(null);

  const desktopSlideCount = ENTERPRISE_SLIDES.length;
  const mobileSlideCount = 1 + ENTERPRISE_SLIDES.length;

  useEffect(() => {
    if (!isDesktop) {
      window.dispatchEvent(
        new CustomEvent("hero-morph-progress", { detail: { progress: 1 } }),
      );
    }
  }, [isDesktop]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slideEase = "power2.inOut";

      const emitProgress = (progress) => {
        window.dispatchEvent(new CustomEvent("hero-orbit-progress", { detail: { progress } }));
      };

      const setupVerticalEnterFromLeft = (enterWrapper, revealFirstSlide) => {
        if (!enterWrapper) return;

        gsap.set(enterWrapper, { xPercent: -100, opacity: 0, y: 48 });

        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1.35,
          id: "hero-carousel-approach",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set(enterWrapper, {
              xPercent: gsap.utils.interpolate(-100, 0, p),
              y: gsap.utils.interpolate(48, 0, p),
              opacity: gsap.utils.interpolate(0, 1, Math.min(p * 1.15, 1)),
            });
            if (p > 0.7) revealFirstSlide?.();
          },
          onLeave: () => {
            gsap.set(enterWrapper, { xPercent: 0, y: 0, opacity: 1 });
            revealFirstSlide?.();
          },
        });
      };

      const buildDesktopTimeline = () => {
        const enterWrapper = enterWrapperRef.current;
        const sections = gsap.utils.toArray(".hero-h-item--desktop");
        const nSlides = sections.length;
        if (!enterWrapper || !nSlides) return;

        const getScrollLength = () => {
          const vh = window.innerHeight;
          const steps = Math.max(nSlides - 1, 1);
          return Math.round(vh * 0.18 + vh * 0.52 * steps);
        };

        const revealFirstSlide = () => {
          gsap.to(".hero-slide-1.hero-h-item--desktop .hero-copy-el", {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(".hero-slide-1.hero-h-item--desktop .hero-img-el", {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        gsap.set(".hero-slide-1.hero-h-item--desktop .hero-copy-el", {
          opacity: 0,
          x: -48,
          y: 16,
        });
        gsap.set(".hero-slide-1.hero-h-item--desktop .hero-img-el", {
          opacity: 0,
          x: 56,
          scale: 0.94,
        });

        setupVerticalEnterFromLeft(enterWrapper, revealFirstSlide);

        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${getScrollLength()}`,
            pin: true,
            scrub: 2.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => emitProgress(self.progress),
          },
        });

        gsap.set(sections, { xPercent: 0 });

        const introDwell = 0.26;
        const slideMove = 1.05;
        const slideDwell = 0.34;

        scrollTimeline.to(sections, { xPercent: 0, duration: introDwell, ease: "none" }, 0);
        for (let step = 1; step < nSlides; step += 1) {
          scrollTimeline.to(sections, {
            xPercent: -100 * step,
            duration: slideMove,
            ease: slideEase,
          });
          scrollTimeline.to(sections, {
            xPercent: -100 * step,
            duration: slideDwell,
            ease: "none",
          });
        }
      };

      const buildMobileTimeline = () => {
        const enterWrapper = enterWrapperRef.current;
        const sections = gsap.utils.toArray(".hero-h-item--mobile");
        const nSlides = sections.length;
        if (!nSlides) return;

        setupVerticalEnterFromLeft(enterWrapper, null);

        const getScrollLength = () => {
          const vh = window.innerHeight;
          const steps = Math.max(nSlides - 1, 1);
          return Math.round(vh * 0.18 + vh * 0.52 * steps);
        };

        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${getScrollLength()}`,
            pin: true,
            scrub: 2.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => emitProgress(self.progress),
          },
        });

        gsap.set(sections, { xPercent: 0 });

        const introDwell = 0.26;
        const slideMove = 1.05;
        const slideDwell = 0.34;

        scrollTimeline.to(sections, { xPercent: 0, duration: introDwell, ease: "none" });
        for (let step = 1; step < nSlides; step += 1) {
          scrollTimeline.to(sections, {
            xPercent: -100 * step,
            duration: slideMove,
            ease: slideEase,
          });
          scrollTimeline.to(sections, {
            xPercent: -100 * step,
            duration: slideDwell,
            ease: "none",
          });
        }
      };

      if (isDesktop) {
        buildDesktopTimeline();
      } else {
        buildMobileTimeline();
      }
    }, triggerRef);

    return () => {
      window.dispatchEvent(new CustomEvent("hero-orbit-progress", { detail: { progress: 0 } }));
      ctx.revert();
    };
  }, [isDesktop, desktopSlideCount, mobileSlideCount]);

  return (
    <>
      {isDesktop && <MagneticMorphStack images={HERO_SLIDESHOW_IMAGES} />}

      <section
        ref={triggerRef}
        className={cn(
          "relative overflow-hidden bg-white text-[#09090b]",
          isDesktop ? "border-t border-[#e2e8f0]" : "",
        )}
        aria-label="Hero highlights"
      >
        <div
          ref={enterWrapperRef}
          className="relative z-10 min-h-screen w-full will-change-transform"
        >
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,175,55,0.1),transparent_55%)] max-lg:opacity-60" />
            <div className="absolute inset-0 opacity-[0.22] max-lg:opacity-40 [background-image:linear-gradient(rgba(9,9,11,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          {isDesktop ? (
            <motion.div
              ref={desktopTrackRef}
              className="relative z-10 flex h-screen"
              style={{ width: `${desktopSlideCount * 100}vw` }}
            >
              {ENTERPRISE_SLIDES.map((slide, i) => (
                <EnterpriseSlideCard
                  key={slide.title}
                  slide={slide}
                  slideIndex={i + 1}
                  slidePhotoSrc={slide.image}
                  itemClassName="hero-h-item--desktop"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              ref={mobileTrackRef}
              className="relative z-10 flex h-screen"
              style={{ width: `${mobileSlideCount * 100}vw` }}
            >
            <motion.div className="hero-h-item--mobile hero-slide-1 relative flex h-screen w-screen shrink-0 items-center overflow-y-auto bg-white px-0 py-12 pt-20">
              <IntroSlide />
            </motion.div>

            {ENTERPRISE_SLIDES.map((slide, i) => (
              <EnterpriseSlideCard
                key={slide.title}
                slide={slide}
                slideIndex={i + 2}
                slidePhotoSrc={slide.image}
                itemClassName="hero-h-item--mobile"
              />
            ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import type { BlogPost as BlogPostType } from "@/data/blog-posts";
import { getRelatedPosts } from "@/data/blog-posts";
import { ArrowLeft, ArrowRight, Clock, Tag, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export default function BlogPost({ post }: { post: BlogPostType }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(215,50%,18%)] via-[hsl(215,50%,22%)] to-[hsl(215,48%,28%)] text-white pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 mt-5 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 font-medium text-white/80 text-xs">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight max-w-4xl">
              {post.title}
            </h1>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/85 leading-relaxed mb-6 text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-white shadow-lg ring-1 ring-border/30 p-7 sm:p-10 text-center">
            <p className="font-display font-bold text-xl sm:text-2xl text-foreground mb-3">
              Ready to sell your car for cash?
            </p>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Get a free quote today — same-day pickup across Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-accent/90 hover:shadow-lg transition-all"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/#quote-section"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {getRelatedPosts(post.slug).length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="font-display font-bold text-xl text-foreground mb-6">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {getRelatedPosts(post.slug).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-2xl bg-white shadow-card hover:shadow-card-hover p-6 transition-all"
                  >
                    <span className="text-xs text-accent font-semibold">{related.category}</span>
                    <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors mt-1.5 leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to all posts
            </Link>
          </div>
        </article>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}

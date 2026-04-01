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

      <main id="main-content" className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <div className="flex items-center gap-3 text-sm text-white/80 mt-4 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 font-medium text-white/90">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/85 leading-relaxed mb-5 text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-primary/15 bg-gradient-to-b from-primary/[0.06] to-transparent p-6 sm:p-8 text-center">
            <p className="font-display font-bold text-xl text-primary mb-2">
              Ready to sell your car for cash?
            </p>
            <p className="text-muted-foreground text-sm mb-5">
              Get a free quote today — same-day pickup across Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(16,36,82,0.2)] hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/#quote-section"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {getRelatedPosts(post.slug).length > 0 && (
            <div className="mt-12 border-t border-border pt-10">
              <h2 className="font-display font-bold text-lg text-foreground mb-5">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {getRelatedPosts(post.slug).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-xl border border-border/60 p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <span className="text-xs text-muted-foreground">{related.category}</span>
                    <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors mt-1 leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
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

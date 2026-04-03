import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight, Clock, Tag } from "lucide-react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog" },
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(215,50%,18%)] via-[hsl(215,50%,22%)] to-[hsl(215,48%,28%)] text-white pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-5 mb-6">
              Blog
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              Tips, guides, and insights about selling your car for cash in Brisbane.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1 font-semibold text-accent">
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

                  <h2 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group-hover:gap-2.5"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}

import { CompanyList } from "@/components/company/company-list";
import { getCompanies } from "@/data/queries";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Companies using Cursor | Cursor Directory",
  description: "A directory of companies that use Cursor.",
};

export const revalidate = 3600;

export default async function Page() {
  const { data: companies } = await getCompanies();

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 md:mt-24 pb-32">
      <h1 className="text-xl mb-2">Browse Companies</h1>
      <p className="text-sm text-[#878787] mb-8">
        Browse companies or{" "}
        <Link
          href="/companies/new"
          className="border-b border-border border-dashed"
        >
          add your company to the directory
        </Link>
        .
      </p>

      <Suspense fallback={null}>
        <CompanyList data={companies} />
      </Suspense>
    </div>
  );
}

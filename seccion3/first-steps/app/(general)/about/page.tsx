import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "SEO TITLE",
    description: "SEO DESCRIPTION HERE",
};

export default function AboutPage() {
    return (
        <span className="text-5xl">This is the about page</span>
    );
}
import {NavBar} from "@/components";

export default function GeneralLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar/>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">HOLA MUNDO</span>
                {children}
            </main>
        </>
    );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 gap-4 px-4">
      <p className="hc-eyebrow">Hack Club</p>
      <h1 className="text-6xl font-bold tracking-tight">
        YSWS <span className="text-fd-primary">Handbook</span>
      </h1>
      <p className="text-fd-muted-foreground max-w-md text-lg">
        Everything you need to know about You Ship, We Ship programs.
      </p>
      <Link href="/docs" className="hc-button lg mt-2">
        Read the docs
      </Link>
    </div>
  );
}

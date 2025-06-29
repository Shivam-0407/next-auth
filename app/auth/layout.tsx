export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)]">
      {children}
    </div>
  );
}

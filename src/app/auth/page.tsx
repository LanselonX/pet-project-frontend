import { AuthCard } from "@/src/features/auth/components/auth-card";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md px-4">
        <AuthCard />
      </div>
    </div>
  );
}

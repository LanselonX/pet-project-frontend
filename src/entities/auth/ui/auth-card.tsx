import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import AuthTabsForm from "./tabs-form";

export function AuthCard() {
  return (
    <div>
      <Card className="max-w-md rounded-2xl border border-border/40 p-10">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthTabsForm />
        </CardContent>
      </Card>
    </div>
  );
}

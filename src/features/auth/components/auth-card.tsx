import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import AuthTabsForm from "./tabs-form";

export function AuthCard() {
  return (
    <div>
      <Card className="w-full max-w-md p-6">
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

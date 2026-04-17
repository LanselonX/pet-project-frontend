import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { RegistrationForm } from "./registration-form";
import { LoginForm } from "./login-form";

export default function TabsForm() {
  return (
    <Tabs defaultValue="registration" className="flex flex-col ">
      <TabsList className="w-full rounded-xl bg-muted p-1">
        <TabsTrigger
          value="registration"
          className="flex-1 rounded-lg text-sm font-medium"
        >
          Registration
        </TabsTrigger>
        <TabsTrigger
          value="login"
          className="flex-1 rounded-lg text-sm font-medium"
        >
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="registration">
        <RegistrationForm />
      </TabsContent>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
    </Tabs>
  );
}

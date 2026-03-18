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
      <TabsList className="mx-auto">
        <TabsTrigger value="registration">Registration</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
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
